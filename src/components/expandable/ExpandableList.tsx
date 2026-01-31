"use client";

import clsx from "clsx";
import Image from "next/image";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { Pill } from "@/components/ui/Pill";
import type { ExpandableEntry } from "@/types/experience";
import styles from "./ExpandableList.module.css";

interface ExpandableListProps {
  items: ExpandableEntry[];
  defaultExpandedIds?: string[];
}

export function ExpandableList({ items, defaultExpandedIds = [] }: ExpandableListProps) {
  const defaultSet = useMemo(() => new Set(defaultExpandedIds), [defaultExpandedIds]);
  const [expandedIds, setExpandedIds] = useState(() => new Set(defaultSet));

  const toggle = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className={styles.list}>
      {items.map((item) => (
        <ExpandableListItem
          key={item.id}
          item={item}
          expanded={expandedIds.has(item.id)}
          onToggle={() => toggle(item.id)}
        />
      ))}
    </div>
  );
}

interface ItemProps {
  item: ExpandableEntry;
  expanded: boolean;
  onToggle: () => void;
}

function ExpandableListItem({ item, expanded, onToggle }: ItemProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState(0);
  const contentId = useId();
  const media = item.media ?? [];
  const [cover, ...gallery] = media;
  const coverIsLogo = cover?.variant === "logo";
  const coverWidth = cover?.width ?? 1200;
  const coverHeight = cover?.height ?? 720;
  const coverAspectRatio =
    cover && !coverIsLogo && cover.width && cover.height
      ? cover.width / cover.height
      : undefined;
  const coverStyle: CSSProperties | undefined = coverAspectRatio
    ? {
        aspectRatio: coverAspectRatio,
        height: "auto",
      }
    : undefined;

  useEffect(() => {
    const node = contentRef.current;
    if (!node) return;

    const updateHeight = () => {
      if (expanded) {
        setMaxHeight(node.scrollHeight);
      } else {
        setMaxHeight(0);
      }
    };

    updateHeight();

    const resizeObserver = new ResizeObserver(() => {
      if (expanded) {
        setMaxHeight(node.scrollHeight);
      }
    });
    resizeObserver.observe(node);

    return () => {
      resizeObserver.disconnect();
    };
  }, [expanded]);

  return (
    <div className={styles.item}>
      {cover ? (
        <div
          className={clsx(styles.cover, coverIsLogo && styles.coverLogo)}
          style={coverStyle}
        >
          <Image
            src={cover.src}
            alt={cover.alt}
            width={coverWidth}
            height={coverHeight}
            className={clsx(
              styles.coverImage,
              coverIsLogo ? styles.logoImage : styles.photoImage,
            )}
            sizes="(max-width: 600px) 100vw, 600px"
            priority={false}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      ) : null}
      <div className={styles.itemHeader}>
        <div className={styles.heading}>
          <div className={styles.titleRow}>
            <span className={styles.title}>{item.title}</span>
            {item.role ? (
              <span className={styles.subtitle}>{item.role}</span>
            ) : null}
          </div>
          {item.organization ? (
            <span className={styles.meta}>{item.organization}</span>
          ) : null}
          {item.timeframe || item.location ? (
            <span className={styles.meta}>
              {item.timeframe}
              {item.timeframe && item.location ? " · " : ""}
              {item.location}
            </span>
          ) : null}
          {item.summary ? <p className={styles.summary}>{item.summary}</p> : null}
        </div>
        <button
          type="button"
          className={clsx(styles.chevronButton)}
          onClick={onToggle}
          aria-expanded={expanded}
          aria-controls={contentId}
          data-expanded={expanded}
        >
          <span className={styles.chevronIcon}>›</span>
        </button>
      </div>
      <div
        id={contentId}
        ref={contentRef}
        className={styles.content}
        style={{
          maxHeight,
          opacity: expanded ? 1 : 0,
        }}
        aria-hidden={!expanded}
      >
        <div className={styles.contentInner}>
          {gallery.length > 0 ? (
            <div className={styles.mediaGrid}>
              {gallery.map((mediaItem) => {
                const isLogo = mediaItem.variant === "logo";
                return (
                  <div
                    key={mediaItem.src}
                    className={clsx(styles.mediaFrame, isLogo && styles.mediaLogo)}
                  >
                    <Image
                      src={mediaItem.src}
                      alt={mediaItem.alt}
                      width={800}
                      height={600}
                    className={clsx(
                      styles.mediaImage,
                      isLogo ? styles.logoImage : styles.photoImage,
                    )}
                      sizes="(max-width: 600px) 100vw, 400px"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                );
              })}
            </div>
          ) : null}
          {item.bullets ? (
            <ul className={styles.bulletList}>
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          ) : null}
          {item.tags && item.tags.length > 0 ? (
            <div className={styles.tags}>
              {item.tags.map((tag) => (
                <Pill dense key={tag}>
                  {tag}
                </Pill>
              ))}
            </div>
          ) : null}
          {item.links && item.links.length > 0 ? (
            <div className={styles.links}>
              {item.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

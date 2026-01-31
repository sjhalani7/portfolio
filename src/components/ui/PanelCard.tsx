import clsx from "clsx";
import type { ReactNode } from "react";
import styles from "./PanelCard.module.css";

interface PanelCardProps {
  children: ReactNode;
  hoverable?: boolean;
  className?: string;
}

export function PanelCard({ children, hoverable = true, className }: PanelCardProps) {
  return (
    <div
      className={clsx(
        styles.card,
        hoverable && styles.cardHoverable,
        className,
      )}
    >
      {children}
    </div>
  );
}

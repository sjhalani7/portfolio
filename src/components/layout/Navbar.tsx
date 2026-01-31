"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "./Container";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
  { label: "About", route: "/" },
  { label: "Work", route: "/work" },
  { label: "Research", route: "/research" },
  { label: "Projects", route: "/projects" },
  { label: "Santa Clara", route: "/santaclara" },
  { label: "Resume", route: "external:resume" },
] as const;

const EXTERNAL_LINKS: Record<string, string> = {
  resume: "/docs/resume.pdf",
};

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <Link className={styles.brand} href="/">
          Shiv Jhalani
        </Link>
        <nav>
          <ul className={styles.navList}>
            {NAV_LINKS.map((link) => {
              const isExternal = link.route.startsWith("external:");
              const href = isExternal
                ? EXTERNAL_LINKS[link.route.split(":")[1]] ?? "/"
                : link.route;
              const isActive = !isExternal && pathname === link.route;

              if (isExternal) {
                return (
                  <li key={link.label}>
                    <a
                      className={styles.navLink}
                      href={href}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      {link.label}
                      <span className={styles.externalIcon} aria-hidden>
                        ↗
                      </span>
                    </a>
                  </li>
                );
              }

              return (
                <li key={link.label}>
                  <Link
                    className={clsx(styles.navLink)}
                    data-active={isActive}
                    href={href}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

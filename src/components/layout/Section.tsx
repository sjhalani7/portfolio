import clsx from "clsx";
import type { ReactNode } from "react";
import styles from "./Section.module.css";

interface SectionProps {
  id?: string;
  variant?: "default" | "compact" | "tight";
  className?: string;
  children: ReactNode;
}

export function Section({
  id,
  variant = "default",
  className,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={clsx(
        styles.section,
        variant === "compact" && styles.compact,
        variant === "tight" && styles.tight,
        className,
      )}
    >
      {children}
    </section>
  );
}

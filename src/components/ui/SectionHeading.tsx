import type { ReactNode } from "react";
import styles from "./SectionHeading.module.css";

interface SectionHeadingProps {
  kicker?: string;
  title: string;
  description?: ReactNode;
}

export function SectionHeading({ kicker, title, description }: SectionHeadingProps) {
  return (
    <div className={styles.heading}>
      {kicker ? <span className={styles.kicker}>{kicker}</span> : null}
      <h2 className={styles.title}>{title}</h2>
      {description ? (
        <div className={styles.description}>{description}</div>
      ) : null}
    </div>
  );
}

import type { ReactNode } from "react";
import styles from "./PageHeader.module.css";

interface PageHeaderProps {
  title: string;
  kicker?: string;
  description?: ReactNode;
}

export function PageHeader({ title, kicker, description }: PageHeaderProps) {
  return (
    <div className={styles.wrapper}>
      {kicker ? <div className={styles.kicker}>{kicker}</div> : null}
      <h1 className={styles.title}>{title}</h1>
      {description ? <div className={styles.description}>{description}</div> : null}
    </div>
  );
}

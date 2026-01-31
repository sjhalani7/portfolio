import clsx from "clsx";
import type { ReactNode } from "react";
import styles from "./Pill.module.css";

interface PillProps {
  children: ReactNode;
  dense?: boolean;
  className?: string;
}

export function Pill({ children, dense, className }: PillProps) {
  return (
    <span className={clsx(styles.pill, dense && styles.dense, className)}>
      {children}
    </span>
  );
}

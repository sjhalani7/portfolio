import clsx from "clsx";
import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./ButtonLink.module.css";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonLinkProps {
  href: string;
  label: string;
  variant?: ButtonVariant;
  external?: boolean;
  iconRight?: ReactNode;
  className?: string;
}

export function ButtonLink({
  href,
  label,
  variant = "primary",
  external,
  iconRight,
  className,
}: ButtonLinkProps) {
  const classNames = clsx(styles.button, styles[variant], className);

  if (external) {
    return (
      <a
        className={classNames}
        href={href}
        target="_blank"
        rel="noreferrer noopener"
      >
        {label}
        {iconRight ? <span className={styles.icon}>{iconRight}</span> : null}
      </a>
    );
  }

  return (
    <Link className={classNames} href={href}>
      {label}
      {iconRight ? <span className={styles.icon}>{iconRight}</span> : null}
    </Link>
  );
}

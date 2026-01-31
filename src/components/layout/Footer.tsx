import { Container } from "./Container";
import styles from "./Footer.module.css";

const FOOTER_LINKS = [
  { label: "Email", href: "mailto:shivjhalani@gmail.com" },
  { label: "GitHub", href: "https://github.com/sjhalani7" },
  { label: "Twitter", href: "https://x.com/shivjhalani7" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shivjhalani/" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <span>© {currentYear} Shiv Jhalani</span>
        <div className={styles.links}>
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.label}
              className={styles.link}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer noopener" : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}

import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Pill } from "@/components/ui/Pill";
import { getAssetPath } from "@/lib/paths";
import styles from "./Hero.module.css";

const HERO_PARAGRAPHS = [
  "Hi, I’m Shiv Jhalani — a backend-focused software engineer at INRIX with a strong interest in data, product engineering, and modern AI-driven systems.",
  "I’m motivated by curiosity and learn best by building: from experimenting with embeddings and search, to prototyping agentic AI systems, to shipping data-heavy features and services in production. I enjoy working with new ideas, new tools, and new technologies, and turning them into real, working products.",
  "I use modern AI tools as part of my workflow — not as a shortcut, but as leverage. I care about shipping faster, iterating intelligently, and then applying strong fundamentals to make the result correct, reliable, and maintainable.",
  "What keeps me motivated is how quickly this field evolves. I have a constant need to keep up — new tools, new approaches, new ideas — and I enjoy turning that motion into real projects that solve real problems. I’m always building, always learning, and always looking for the next interesting problem to dive into.",
];

export function Hero() {
  const profileImageSrc = getAssetPath("/images/my_pic111.jpg");

  return (
    <Section className={styles.section}>
      <Container>
        <div className={styles.grid}>
          <div>
            <p className={styles.kicker}>Hi, I’m</p>
            <h1 className={styles.title}>Shiv Jhalani</h1>
            <div className={styles.subtitleRow}>
              <Pill>Software Engineer @ INRIX</Pill>
              <Pill>Backend • Data • Product</Pill>
            </div>
            <div className={styles.richText}>
              {HERO_PARAGRAPHS.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </div>
            <div className={styles.buttonRow}>
              <ButtonLink href="/work" label="Work Experience" variant="primary" />
              <ButtonLink
                href="/projects"
                label="Projects & Hackathons"
                variant="secondary"
              />
            </div>
            <p className={styles.note}>
              * P.S. I just love using em-dashes, I promise it&apos;s not what it looks like.
            </p>
          </div>
          <div className={styles.profileFrame}>
            <Image
              src={profileImageSrc}
              alt="Photo of Shiv Jhalani"
              fill
              className={styles.profileImage}
              sizes="(max-width: 820px) 70vw, 420px"
              priority
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}

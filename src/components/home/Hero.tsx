import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Pill } from "@/components/ui/Pill";
import { heroContent } from "@/data/hero";
import { getAssetPath } from "@/lib/paths";
import styles from "./Hero.module.css";

export function Hero() {
  const profileImageSrc = getAssetPath("/images/my_pic111.jpg");
  const { kicker, name, pills, note, paragraphs } = heroContent;

  return (
    <Section className={styles.section}>
      <Container>
        <div className={styles.grid}>
          <div>
            <p className={styles.kicker}>{kicker}</p>
            <h1 className={styles.title}>{name}</h1>
            <div className={styles.subtitleRow}>
              {pills.map((pill) => (
                <Pill key={pill}>{pill}</Pill>
              ))}
            </div>
            <div className={styles.richText}>
              {paragraphs.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </div>
            <p className={styles.note}>{note}</p>
            <div className={styles.buttonRow}>
              <ButtonLink href="/work" label="Work Experience" variant="primary" />
              <ButtonLink
                href="/projects"
                label="Projects & Hackathons"
                variant="secondary"
              />
              <ButtonLink
                href="/api/agent-feed"
                label="AI-ready data"
                variant="ghost"
                external
                iconRight={<span aria-hidden="true">↗</span>}
              />
            </div>
            <p className={styles.agentNote}>
              Post-agentic browsers need friendly feeds, so this API keeps my work structured
              for them.
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

import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { ExpandableList } from "@/components/expandable/ExpandableList";
import { projectSections } from "@/data/projects";
import styles from "./projects.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects & Hackathons | Shiv Jhalani",
  description: "Selected projects and hackathon builds across mobility, AI tooling, and product experiments.",
};

export default function ProjectsPage() {
  return (
    <Section variant="compact">
      <Container>
        <PageHeader
          kicker="Projects"
          title="Projects & Hackathons"
          description="A mix of shipping-grade projects and hackathon experiments that taught me how to move quickly without losing craft."
        />
        {projectSections.map((section) => (
          <section key={section.id} className={styles.block}>
            <h2 className={styles.heading}>{section.title}</h2>
            <ExpandableList items={section.entries} />
          </section>
        ))}
      </Container>
    </Section>
  );
}

import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { ExpandableList } from "@/components/expandable/ExpandableList";
import { researchProjects } from "@/data/research";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research | Shiv Jhalani",
  description: "Research projects blending mobility data, AI, and systems thinking.",
};

export default function ResearchPage() {
  return (
    <Section variant="compact">
      <Container>
        <PageHeader
          kicker="Research"
          title="Research"
          description="Autonomous systems, forecasting, and the experiments that taught me how to reason through messy data."
        />
        <ExpandableList items={researchProjects} />
      </Container>
    </Section>
  );
}

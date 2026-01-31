import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { ExpandableList } from "@/components/expandable/ExpandableList";
import { workExperience } from "@/data/work";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work Experience | Shiv Jhalani",
  description:
    "Roles, impact, and systems I’ve built across INRIX, Santa Clara, and beyond.",
};

export default function WorkPage() {
  return (
    <Section variant="compact">
      <Container>
        <PageHeader
          kicker="Work"
          title="Work Experience"
          description="Full-time roles, internships, and the operating habits I’ve built for shipping backend + data products with confidence."
        />
        <ExpandableList items={workExperience} />
      </Container>
    </Section>
  );
}

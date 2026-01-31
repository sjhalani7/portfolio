import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { ExpandableList } from "@/components/expandable/ExpandableList";
import { santaClaraLife } from "@/data/santaClara";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Life at Santa Clara | Shiv Jhalani",
  description:
    "Stories from campus, routines that keep me balanced, and the communities I care about.",
};

export default function SantaClaraPage() {
  return (
    <Section variant="compact">
      <Container>
        <PageHeader
          kicker="Santa Clara"
          title="My Life at Santa Clara"
          description="A living log of community work, wellness routines, and how I stay energized outside of shipping code."
        />
        <ExpandableList items={santaClaraLife} />
      </Container>
    </Section>
  );
}

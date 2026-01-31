import type { ExpandableEntry } from "@/types/experience";

export const santaClaraLife: ExpandableEntry[] = [
  {
    id: "leadership",
    title: "Leadership & Clubs",
    summary:
      "Poured energy into the orgs that shaped my SCU journey — scaling ACM sponsorships, mentoring peers, and amplifying entrepreneurship programs.",
    bullets: [
      "ACM Director of Communications: led four industry liaisons to raise $20k+ for Hack for Humanity and launched a Roblox game jam with 75 participants.",
      "ACM Industry Liaison: managed relationships with 10+ companies, driving $18k in sponsorships and professional development programs.",
      "Theta Tau Professional Development Chair: organized professional development programming for the engineering fraternity.",
      "Ciocca Center Student Advisory Board PR Director: shipped a bi-quarterly newsletter keeping founders informed on events and recruiting windows.",
    ],
    tags: ["Community", "Mentorship", "Leadership"],
    media: [
      { src: "/images/santaclara/acm.png", alt: "ACM leadership", variant: "logo" },
    ],
  },
  {
    id: "awards",
    title: "Awards & Honors",
    summary:
      "Selective distinctions that recognized scholarship, leadership, and service at Santa Clara.",
    bullets: [
      "Student Life Award — recognized by SCU’s president as 1 of 23 seniors (out of 1,600+) improving campus life; featured in The Santa Clara’s ‘Toast to the Class of 2025 Award Winners.’",
      "Summa Cum Laude — graduated with SCU’s highest academic distinction",
      "Phi Beta Kappa — nation’s oldest arts & sciences honor society; membership extended to the top ~10% demonstrating intellectual integrity",
      "Upsilon Pi Epsilon — international computing honor society recognizing the top cohort of CS students for scholarship and service",
      "Alpha Sigma Nu — Jesuit honor society invitation reserved for <15% of the class who excel in scholarship, loyalty, and service",
      "University Honors Program — selective interdisciplinary cohort (~68 of 1,500 admits) focused on critical inquiry and writing",
    ],
    tags: ["Honors", "Awards"],
    media: [
      {
        src: "/images/santaclara/award.JPG",
        alt: "Receiving the Student Life Award",
        variant: "photo",
        width: 3500,
        height: 1500,
      },
    ],
  },
];

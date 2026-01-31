export interface ExpandableEntry {
  id: string;
  title: string;
  organization?: string;
  role?: string;
  timeframe?: string;
  location?: string;
  summary?: string;
  bullets?: string[];
  tags?: string[];
  links?: { label: string; href: string }[];
  media?: {
    src: string;
    alt: string;
    variant?: "photo" | "logo";
    width?: number;
    height?: number;
  }[];
}

export interface SectionedEntries {
  id: string;
  title: string;
  entries: ExpandableEntry[];
}

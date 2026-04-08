export interface Project {
  title: string;
  description: string;
  tags: string[];
  url?: string;
  year: number;
}

export const projects: Project[] = [
  {
    title: "Hilichurl",
    description: "Genshin damage simulator.",
    tags: ["web", "game"],
    url: "https://hilichurl.com/",
    year: 2026,
  },
  {
    title: "MesoHungy",
    description: "Food finder app.",
    tags: ["web", "app"],
    url: "https://mesohungy.com/",
    year: 2026,
  },
  {
    title: "Don't Shrink the Rink",
    description: "Saving Lloyd Center.",
    tags: ["web", "advocacy"],
    url: "https://fammyfams.github.io/dont-shrink-the-rink-website/",
    year: 2026,
  },
  {
    title: "Slay Data",
    description: "Slay the Spire run history visualized.",
    tags: ["web", "data-viz"],
    url: "https://fammyfams.github.io/slay-data/",
    year: 2025,
  },
];

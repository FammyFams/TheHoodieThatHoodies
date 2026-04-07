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
    title: "Project One",
    description: "A short description of what this project does and why it's cool.",
    tags: ["web", "typescript"],
    url: "https://github.com",
    year: 2024,
  },
  {
    title: "Project Two",
    description: "Another thing you built — keep it brief and punchy.",
    tags: ["python", "tool"],
    url: "https://github.com",
    year: 2024,
  },
  {
    title: "Project Three",
    description: "Something you made just because you felt like it.",
    tags: ["game", "fun"],
    url: "https://github.com",
    year: 2023,
  },
  {
    title: "Project Four",
    description: "Real life project or experiment worth talking about.",
    tags: ["irl", "experiment"],
    year: 2023,
  },
];

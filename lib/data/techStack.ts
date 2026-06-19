import type { Localized } from "./projects";

export interface SkillCategory {
  title: Localized;
  icon: string;
  skills: string[];
}

export const techStack: SkillCategory[] = [
  {
    title: { tr: "Backend & API", en: "Backend & API" },
    icon: "⚙️",
    skills: [
      "ASP.NET Core",
      "Web API",
      "MVC",
      "C#",
      "Entity Framework Core",
      "LINQ",
      "SignalR",
      "Identity & JWT",
    ],
  },
  {
    title: { tr: "Yapay Zeka", en: "Artificial Intelligence" },
    icon: "🤖",
    skills: ["OpenAI", "Gemini AI", "Claude Code", "AI Integration", "Prompt Engineering"],
  },
  {
    title: { tr: "Frontend", en: "Frontend" },
    icon: "🎨",
    skills: ["JavaScript", "TypeScript", "Next.js", "React", "HTML5", "CSS3", "Bootstrap", "Tailwind"],
  },
  {
    title: { tr: "Veritabanı", en: "Database" },
    icon: "💾",
    skills: ["SQL Server", "PostgreSQL", "MongoDB", "Supabase"],
  },
  {
    title: { tr: "Araçlar & DevOps", en: "Tools & DevOps" },
    icon: "🛠️",
    skills: ["Git & GitHub", "Visual Studio", "VS Code", "Postman", "Chart.js"],
  },
];

// Marquee strip
export const techMarquee = [
  "ASP.NET Core",
  "C#",
  "Entity Framework",
  "SignalR",
  "OpenAI",
  "Gemini AI",
  "Next.js",
  "TypeScript",
  "SQL Server",
  "PostgreSQL",
  "MongoDB",
  "Identity & JWT",
  "LINQ",
  "React",
];

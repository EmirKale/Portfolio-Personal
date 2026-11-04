import type { Localized } from "./projects";

export interface Certificate {
  title: string;
  titleEn?: string;
  issuer: string;
  meta: Localized;
  icon: string;
  pdf: string;
}

export const certificates: Certificate[] = [
  {
    title: "Claude Code in Action",
    titleEn: "Claude Code in Action",
    issuer: "Anthropic Courses",
    meta: { tr: "Mart 2026", en: "March 2026" },
    icon: "🤖",
    pdf: "/certificate-ygok7oi6yqju-1772716952.pdf",
  },
  {
    title: "Claude 101",
    titleEn: "Claude 101",
    issuer: "Anthropic Courses",
    meta: { tr: "2026", en: "2026" },
    icon: "🧠",
    pdf: "/certificate-cemxs8baeitr-1772718639.pdf",
  },
  {
    title: "Database Mastery: ASP.NET Core ile MongoDB-PostgreSQL-MSSQL",
    titleEn: "Database Mastery: MongoDB-PostgreSQL-MSSQL with ASP.NET Core",
    issuer: "Udemy",
    meta: { tr: "Mayıs 2026 • 16.5 Saat", en: "May 2026 • 16.5 Hours" },
    icon: "💾",
    pdf: "/UC-d3bbd120-cf0b-4b4b-8e17-775707fad35c.pdf",
  },
  {
    title: "EntityFramework Core Masterclass (70+ LINQ & EF Core)",
    titleEn: "EntityFramework Core Masterclass (70+ LINQ & EF Core)",
    issuer: "Udemy",
    meta: { tr: "Ocak 2026 • 12 Saat", en: "January 2026 • 12 Hours" },
    icon: "📊",
    pdf: "/UC-14e1b6f6-40a7-40ed-901b-8aaf9533378d.pdf",
  },
  {
    title: "AspNet Core ile Güvenlik: Identity & JWT Masterclass",
    titleEn: "Security with ASP.NET Core: Identity & JWT Masterclass",
    issuer: "Udemy",
    meta: { tr: "Ocak 2026 • 14 Saat", en: "January 2026 • 14 Hours" },
    icon: "🔒",
    pdf: "/UC-179a93f6-8f2a-47df-bc30-989501c19039.pdf",
  },
  {
    title: "ASP.NET Core ile Yapay Zeka: Sigorta Projesi",
    titleEn: "Artificial Intelligence with ASP.NET Core: Insurance Project",
    issuer: "Udemy",
    meta: { tr: "Şubat 2026 • 28 Saat", en: "February 2026 • 28 Hours" },
    icon: "🤖",
    pdf: "/UC-210aceb2-350f-447f-92d0-6a5e4c7c48db.pdf",
  },
  {
    title: "C# ile 20 Derste 20 Uygulamalı Proje",
    titleEn: "20 Hands-On Projects in 20 Lessons with C#",
    issuer: "Udemy",
    meta: { tr: "Mayıs 2025 • 16 Saat", en: "May 2025 • 16 Hours" },
    icon: "🛠️",
    pdf: "/UC-533cba1f-609f-43ac-a1e5-414c17db2894.pdf",
  },
  {
    title: "Uygulama Geliştirerek C# Öğrenin: A'dan Z'ye",
    titleEn: "Learn C# by Building Applications: From A to Z",
    issuer: "Udemy",
    meta: { tr: "Temmuz 2025 • 22 Saat", en: "July 2025 • 22 Hours" },
    icon: "💻",
    pdf: "/UC-56b8ef6f-fde6-43a3-9e89-f8e689e08dbb.pdf",
  },
  {
    title: "C# .Net ile Yapay Zeka Entegrasyonları",
    titleEn: "Artificial Intelligence Integrations with C# .NET",
    issuer: "Udemy",
    meta: { tr: "Mayıs 2025 • 8 Saat", en: "May 2025 • 8 Hours" },
    icon: "🧠",
    pdf: "/UC-9e14a880-e3bb-40cb-9540-09579f982230.pdf",
  },
  {
    title: "Asp.Net Mvc5 ile Online Ticari Otomasyon",
    titleEn: "Online Commercial Automation with ASP.NET MVC5",
    issuer: "Udemy",
    meta: { tr: "Nisan 2026 • 27 Saat", en: "April 2026 • 27 Hours" },
    icon: "🛒",
    pdf: "/UC-cd027ac1-43d9-42f0-8549-3bc60b096d40.pdf",
  },
];

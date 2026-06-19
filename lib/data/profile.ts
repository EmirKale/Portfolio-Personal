import type { Localized } from "./projects";

export const profile = {
  name: "Emir Kale",
  age: 22,
  location: { tr: "İstanbul, Türkiye", en: "İstanbul, Türkiye" },
  email: "emirkale03@gmail.com",
  phone: "+90 545 330 51 10",
  phoneHref: "+905453305110",
  github: "https://github.com/emirkale",
  linkedin: "https://www.linkedin.com/in/emirkale/",
  instagram: "https://www.instagram.com/lemirkl/",
  cv: "/CV.pdf",
  avatar: "/profile.png",
  university: {
    tr: "Bandırma Onyedi Eylül Üniversitesi — Bilgisayar Programcılığı",
    en: "Bandırma Onyedi Eylül University — Computer Programming",
  },
  role: {
    tr: "AI Destekli .NET & Full-Stack Geliştirici",
    en: "AI-Powered .NET & Full-Stack Developer",
  },
  tagline: {
    tr: "Yapay zeka destekli, ölçeklenebilir web uygulamaları geliştiriyorum.",
    en: "I build AI-powered, scalable web applications.",
  } as Localized,
  bio: {
    tr: "Merhaba, ben Emir. ASP.NET Core Web API ve modern SaaS geliştirme konusunda uzmanlaşmış full-stack bir geliştiriciyim. Canlı ve freemium bir ürün olan ViCareerAI'ı hayata geçirdim. AI entegrasyonlu uygulamalar (OpenAI, Gemini), SignalR ile gerçek zamanlı özellikler ve Next.js tabanlı arayüzlerle ölçeklenebilir sistemler kuruyorum.",
    en: "Hi, I'm Emir. A self-directed .NET and full-stack developer specialized in ASP.NET Core Web API and modern SaaS development. Launched ViCareerAI as a live freemium product. Experienced in AI-integrated applications, real-time features with SignalR, scalable backend systems, and Next.js frontends.",
  } as Localized,
};

export interface JourneyItem {
  year: string;
  title: Localized;
  description: Localized;
}

export const journey: JourneyItem[] = [
  {
    year: "2024",
    title: { tr: "Yolculuğun Başlangıcı", en: "The Journey Begins" },
    description: {
      tr: "Bilgisayar Programcılığı eğitimi ve C# ile yazılım temelleri.",
      en: "Computer Programming education and software fundamentals with C#.",
    },
  },
  {
    year: "2025",
    title: { tr: "Full-Stack & Kurumsal", en: "Full-Stack & Corporate" },
    description: {
      tr: "Melody Admin, MVC Yazar Platformu ve Virasure (AI Sigorta) gibi projelerle temiz mimari ve ölçeklenebilir backend sistemleri.",
      en: "Clean architecture and scalable backends with projects like Melody Admin, MVC Writer Platform, and Virasure.",
    },
  },
  {
    year: "2026",
    title: { tr: "SaaS & AI Ürünleri", en: "SaaS & AI Products" },
    description: {
      tr: "ViCareerAI, AskBase ve AudioLoop gibi yapay zeka odaklı, Next.js ve Supabase kullanan modern SaaS ürünlerinin geliştirilmesi.",
      en: "Building modern AI-driven SaaS products like ViCareerAI, AskBase, and AudioLoop using Next.js and Supabase.",
    },
  },
];

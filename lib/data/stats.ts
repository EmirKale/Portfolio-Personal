import type { Localized } from "./projects";

export interface Stat {
  value: number;
  suffix: string;
  label: Localized;
}

export const stats: Stat[] = [
  { value: 6, suffix: "+", label: { tr: "Tamamlanan Proje", en: "Completed Projects" } },
  { value: 10, suffix: "", label: { tr: "Sertifika", en: "Certificates" } },
  { value: 25, suffix: "+", label: { tr: "Teknoloji", en: "Technologies" } },
  { value: 3, suffix: "+", label: { tr: "Yıllık Deneyim", en: "Years of Learning" } },
];

'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useI18n } from '@/components/providers/I18nProvider';
import { profile, journey } from '@/lib/data/profile';
import { stats } from '@/lib/data/stats';
import { techStack } from '@/lib/data/techStack';
import { certificates } from '@/lib/data/certificates';
import { Project, getProjectTitle } from '@/lib/data/projects';

interface TerminalPortfolioProps {
  projects: Project[];
}

export default function TerminalPortfolio({ projects = [] }: TerminalPortfolioProps) {
  const { locale, dictionary } = useI18n();
  const dict = dictionary;

  // İletişim formu durumu
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormState({ name: '', email: '', message: '' });
    }, 1000);
  };

  // İlk 3 projeyi derinlemesine vaka olarak, kalanları arşiv tablosu olarak ayırıyoruz
  const featuredProjects = projects.slice(0, 3);
  const archiveProjects = projects.slice(3);

  return (
    <div className="min-h-screen bg-[#090d16] text-[#f8fafc] font-mono selection:bg-emerald-500/20 selection:text-emerald-300">
      <main className="max-w-6xl mx-auto px-4 py-10 sm:py-16 space-y-24">

        {/* ── 01. HERO / SİSTEM GİRİŞİ ─────────────────────────── */}
        <section id="hero" aria-labelledby="hero-title" className="space-y-6 pt-4">
          <div className="flex items-center gap-2 text-xs text-emerald-400">
            <span>$</span>
            <span>whoami --verbose</span>
            <span className="text-slate-600">{'//'} {dict.hero.since[locale]}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4">
              <h1 id="hero-title" className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-100">
                {profile.name} — {profile.role[locale]}
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-[65ch]">
                {profile.tagline[locale]}
              </p>

              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-[65ch]">
                {profile.bio[locale]}
              </p>

              {/* Sistem Özet Parametreleri */}
              <div className="border border-slate-800 bg-[#0c1220] p-4 text-xs text-slate-300 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <span className="text-slate-500 block uppercase font-semibold">
                    {dict.contact.location[locale]}:
                  </span>
                  <span>{profile.location[locale]}</span>
                </div>
                <div>
                  <span className="text-slate-500 block uppercase font-semibold">
                    {dict.contact.education[locale]}:
                  </span>
                  <span>{profile.university[locale]}</span>
                </div>
                <div>
                  <span className="text-slate-500 block uppercase font-semibold">
                    {dict.contact.statusLabel?.[locale] ?? (locale === 'tr' ? 'DURUM' : 'STATUS')}:
                  </span>
                  <span className="text-emerald-400 font-semibold">
                    {dict.contact.statusValue?.[locale] ?? profile.status[locale]}
                  </span>
                </div>
              </div>

              {/* Eylemler */}
              <div className="flex flex-wrap items-center gap-3 pt-2 text-xs">
                <a
                  href="#contact"
                  className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold px-4 py-2.5 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm"
                >
                  {dict.hero.cta2[locale]} ({profile.email})
                </a>
                <a
                  href={profile.cv}
                  download
                  className="border border-slate-700 hover:border-slate-500 text-slate-200 px-4 py-2.5 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm"
                >
                  {dict.contact.downloadCv[locale]} ↓
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200 px-4 py-2.5 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm"
                >
                  GitHub ↗
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200 px-4 py-2.5 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>

            {/* Profil Fotoğrafı ve Bilgi Kartı */}
            <div className="lg:col-span-4 border border-slate-800 bg-[#0c1220] p-4 space-y-4">
              <div className="border border-slate-800 bg-[#080c16] overflow-hidden">
                <Image
                  src={profile.avatar}
                  alt={profile.name}
                  width={400}
                  height={400}
                  className="w-full h-auto object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
                  priority
                />
              </div>
              <div className="text-xs space-y-1 text-slate-400">
                <div className="text-slate-200 font-semibold">{profile.name}</div>
                <div>{profile.role[locale]}</div>
                <div>{profile.email}</div>
                <div>{profile.phone}</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 02. STATS / METRİKLER ─────────────────────────────── */}
        <section id="stats" aria-labelledby="stats-title" className="space-y-4">
          <div className="border-b border-slate-800 pb-2">
            <div className="text-xs text-emerald-400 mb-1">$ systeminfo --metrics</div>
            <h2 id="stats-title" className="text-lg font-bold text-slate-100 uppercase">
              {dict.stats.title[locale]}
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((item, idx) => (
              <div key={idx} className="border border-slate-800 bg-[#0c1220] p-4 space-y-1">
                <span className="text-2xl sm:text-3xl font-bold text-emerald-400 tabular-nums">
                  {item.value}{item.suffix}
                </span>
                <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                  {item.label[locale]}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 03. FEATURED CASE STUDIES / PROJELER ──────────────── */}
        <section id="projects" aria-labelledby="projects-title" className="space-y-8">
          <div className="border-b border-slate-800 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <div className="text-xs text-emerald-400 mb-1">$ ls -la ./projects/featured/</div>
              <h2 id="projects-title" className="text-xl font-bold text-slate-100 uppercase">
                {dict.projects.title[locale]}
              </h2>
            </div>
            <span className="text-xs text-slate-500">
              {dict.projects.subtitle[locale]}
            </span>
          </div>

          <div className="space-y-12">
            {featuredProjects.map((proj, idx) => (
              <article key={proj.id} className="border border-slate-800 bg-[#0c1220] p-6 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
                  <div>
                    <span className="text-xs text-emerald-400 font-semibold block uppercase">
                      {dict.projects.caseLabel?.[locale] ?? (locale === 'tr' ? 'VAKA' : 'CASE')} 0{idx + 1} {'//'} {proj.category[locale]}
                    </span>
                    <h3 className="text-xl font-bold text-slate-100">{getProjectTitle(proj, locale)}</h3>
                  </div>

                  <div className="flex items-center gap-3 text-xs">
                    {proj.links.demo && (
                      <a
                        href={proj.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-emerald-500/10 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/20 px-3 py-1.5 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm"
                      >
                        {dict.projects.liveDemo[locale]} ↗
                      </a>
                    )}
                    {proj.links.github && (
                      <a
                        href={proj.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-slate-700 hover:border-slate-600 text-slate-300 px-3 py-1.5 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm"
                      >
                        {dict.projects.viewCode[locale]} ↗
                      </a>
                    )}
                  </div>
                </div>

                {/* Ekran Görüntüsü */}
                {proj.cover && (
                  <div className="border border-slate-800 bg-[#080c16] overflow-hidden">
                    <Image
                      src={proj.cover}
                      alt={getProjectTitle(proj, locale)}
                      width={1200}
                      height={675}
                      className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity"
                    />
                  </div>
                )}

                {/* Problem, Çözüm / Mimari ve Sonuçlar */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300">
                  <div className="space-y-1.5">
                    <span className="text-slate-500 block uppercase font-semibold">
                      {dict.projects.problem[locale]}
                    </span>
                    <p className="text-slate-300 leading-relaxed max-w-[65ch]">
                      {proj.problem ? proj.problem[locale] : proj.description[locale]}
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-slate-500 block uppercase font-semibold">
                      {dict.projects.solutionArch?.[locale] ?? (locale === 'tr' ? 'Çözüm & Mimari' : 'Solution & Architecture')}
                    </span>
                    <p className="text-slate-300 leading-relaxed max-w-[65ch]">
                      {proj.solution ? proj.solution[locale] : (proj.longDescription ? proj.longDescription[locale] : proj.description[locale])}
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-slate-500 block uppercase font-semibold">
                      {dict.projects.resultsDeliverables?.[locale] ?? (locale === 'tr' ? 'Sonuç & Çıktılar' : 'Results & Deliverables')}
                    </span>
                    {proj.results && proj.results.length > 0 ? (
                      <ul className="space-y-1 text-slate-300">
                        {proj.results.map((res, i) => (
                          <li key={i}>• {res[locale]}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-slate-300 leading-relaxed max-w-[65ch]">
                        {proj.description[locale]}
                      </p>
                    )}
                  </div>
                </div>

                {/* Kullanılan Teknolojiler */}
                <div className="border-t border-slate-800/80 pt-3 flex flex-wrap gap-2 text-[11px] text-slate-400">
                  <span className="text-slate-500">
                    {dict.projects.toolsUsed?.[locale] ?? (locale === 'tr' ? 'Kullanılan Araçlar:' : 'Tools Used:')}
                  </span>
                  {proj.tech.map((t, i) => (
                    <span key={i} className="px-2 py-0.5 bg-slate-900 border border-slate-800 text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── 04. PROJECT ARCHIVE / SİSTEM KAYITLARI TABLOSU ───── */}
        {archiveProjects.length > 0 && (
          <section id="archive" aria-labelledby="archive-title" className="space-y-6">
            <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
              <div>
                <div className="text-xs text-emerald-400 mb-1">$ cat ./projects_archive.tsv</div>
                <h2 id="archive-title" className="text-lg font-bold text-slate-100 uppercase">
                  {dict.projects.archiveTitle?.[locale] ?? (locale === 'tr' ? 'Tüm Projeler & Sistem Arşivi' : 'All Projects & System Archive')}
                </h2>
              </div>
              <span className="text-xs text-slate-500">
                {archiveProjects.length} {dict.projects.recordsListed?.[locale] ?? (locale === 'tr' ? 'kayıt listelendi' : 'records listed')}
              </span>
            </div>

            <div className="border border-slate-800 bg-[#0c1220] overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 bg-slate-900/60 text-slate-400">
                    <th className="p-3 font-semibold">{dict.projects.tableProject?.[locale] ?? (locale === 'tr' ? 'PROJE' : 'PROJECT')}</th>
                    <th className="p-3 font-semibold">{dict.projects.tableCategory?.[locale] ?? (locale === 'tr' ? 'KATEGORİ' : 'CATEGORY')}</th>
                    <th className="p-3 font-semibold">{dict.projects.tableTech?.[locale] ?? (locale === 'tr' ? 'TEKNOLOJİLER' : 'TECHNOLOGIES')}</th>
                    <th className="p-3 font-semibold">{dict.projects.tableDescription?.[locale] ?? (locale === 'tr' ? 'AÇIKLAMA' : 'DESCRIPTION')}</th>
                    <th className="p-3 font-semibold text-right">{dict.projects.tableLinks?.[locale] ?? (locale === 'tr' ? 'BAĞLANTI' : 'LINKS')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-slate-300">
                  {archiveProjects.map((p) => (
                    <tr key={p.id} className="hover:bg-slate-900/40">
                      <td className="p-3 font-semibold text-slate-100">{getProjectTitle(p, locale)}</td>
                      <td className="p-3 text-slate-400">{p.category[locale]}</td>
                      <td className="p-3 text-slate-300">{p.tech.join(', ')}</td>
                      <td className="p-3 text-slate-400 max-w-sm line-clamp-2">{p.description[locale]}</td>
                      <td className="p-3 text-right whitespace-nowrap">
                        {p.links.demo && (
                          <a href={p.links.demo} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline mr-3">
                            Demo ↗
                          </a>
                        )}
                        {p.links.github && (
                          <a href={p.links.github} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-emerald-400 hover:underline">
                            Repo ↗
                          </a>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* ── 05. TECH STACK / YETKİNLİKLER VE ARAÇLAR ─────────── */}
        <section id="skills" aria-labelledby="skills-title" className="space-y-6">
          <div className="border-b border-slate-800 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <div className="text-xs text-emerald-400 mb-1">{"$ env | grep -E 'STACK|SKILLS'"}</div>
              <h2 id="skills-title" className="text-xl font-bold text-slate-100 uppercase">
                {dict.skills.title[locale]}
              </h2>
            </div>
            <span className="text-xs text-slate-500">
              {dict.skills.subtitle[locale]}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
            {techStack.map((cat, idx) => (
              <div key={idx} className="border border-slate-800 bg-[#0c1220] p-4 space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                  <span className="text-slate-200 font-bold uppercase tracking-wider">
                    {cat.title[locale]}
                  </span>
                  <span className="text-slate-500 text-[11px]">
                    {cat.skills.length} {dict.skills.toolsCount?.[locale] ?? (locale === 'tr' ? 'araç' : 'tools')}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-1 bg-slate-900 border border-slate-800 text-slate-300 rounded-none"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 06. CERTIFICATES / DOĞRULANMIŞ SERTİFİKALAR ──────── */}
        <section id="certificates" aria-labelledby="cert-title" className="space-y-6">
          <div className="border-b border-slate-800 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <div className="text-xs text-emerald-400 mb-1">$ ls ./credentials/*.pdf</div>
              <h2 id="cert-title" className="text-xl font-bold text-slate-100 uppercase">
                {dict.certificates.title[locale]}
              </h2>
            </div>
            <span className="text-xs text-slate-500">
              {certificates.length} {dict.certificates.countLabel?.[locale] ?? (locale === 'tr' ? 'adet kayıtlı belge' : 'registered credentials')}
            </span>
          </div>

          <div className="border border-slate-800 bg-[#0c1220] divide-y divide-slate-800/80 text-xs">
            {certificates.map((cert) => (
              <div key={cert.pdf} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-900/40">
                <div className="space-y-1">
                  <div className="font-semibold text-slate-200">
                    {locale === 'en' && cert.titleEn ? cert.titleEn : cert.title}
                  </div>
                  <div className="text-slate-400 text-[11px]">
                    {dict.certificates.issuerLabel?.[locale] ?? (locale === 'tr' ? 'Kurum' : 'Issuer')}: <span className="text-slate-300">{cert.issuer}</span> • {cert.meta[locale]}
                  </div>
                </div>
                <a
                  href={cert.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 border border-slate-700 hover:border-slate-500 text-slate-300 px-3 py-1.5 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm w-fit"
                >
                  <span>{dict.certificates.viewPDF[locale]}</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ── 07. EXPERIENCE / GELİŞİM LOGLARI ─────────────────── */}
        <section id="experience" aria-labelledby="exp-title" className="space-y-6">
          <div className="border-b border-slate-800 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <div className="text-xs text-emerald-400 mb-1">$ git log --oneline --reverse</div>
              <h2 id="exp-title" className="text-xl font-bold text-slate-100 uppercase">
                {dict.experience.title[locale]}
              </h2>
            </div>
            <span className="text-xs text-slate-500">{dict.experience.subtitle[locale]}</span>
          </div>

          <div className="space-y-4 text-xs">
            {journey.map((item, idx) => (
              <div
                key={item.year}
                className={`border-l-2 pl-4 py-1 space-y-1 ${
                  idx === journey.length - 1 ? 'border-emerald-500/80' : 'border-slate-700'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">[{item.year}]</span>
                  <span className="text-slate-200 font-semibold">{item.title[locale]}</span>
                </div>
                <p className="text-slate-400 leading-relaxed max-w-[65ch]">
                  {item.description[locale]}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 08. CONTACT & FORM / İLETİŞİM ────────────────────── */}
        <section id="contact" aria-labelledby="contact-title" className="space-y-8 border-t border-slate-800 pt-12">
          <div className="space-y-2">
            <div className="text-xs text-emerald-400">$ ping -c 1 emirkale</div>
            <h2 id="contact-title" className="text-2xl font-bold text-slate-100 uppercase">
              {dict.contact.title[locale]}
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-[65ch]">
              {dict.contact.subtitle[locale]}
            </p>
          </div>

          {submitSuccess && (
            <div className="p-4 border border-emerald-500/40 bg-emerald-500/10 text-emerald-300 text-xs rounded-none">
              ✓ {dict.contact.successMessage[locale]}
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* İletişim Kanalları */}
            <div className="lg:col-span-5 border border-slate-800 bg-[#0c1220] p-6 space-y-6 text-xs">
              <div>
                <span className="text-slate-500 block uppercase font-semibold mb-1">
                  {dict.contact.emailLabel[locale]}
                </span>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-emerald-400 hover:text-emerald-300 text-sm font-semibold underline underline-offset-4 focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm"
                >
                  {profile.email}
                </a>
              </div>

              <div>
                <span className="text-slate-500 block uppercase font-semibold mb-1">
                  {dict.contact.phoneLabel[locale]}
                </span>
                <a
                  href={`tel:${profile.phoneHref}`}
                  className="text-slate-300 hover:text-slate-100 text-sm focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm"
                >
                  {profile.phone}
                </a>
              </div>

              <div>
                <span className="text-slate-500 block uppercase font-semibold mb-1">
                  {dict.contact.location[locale]}
                </span>
                <span className="text-slate-300 text-sm">{profile.location[locale]}</span>
              </div>

              <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-4 text-xs">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-emerald-400"
                >
                  GitHub ↗
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-emerald-400"
                >
                  LinkedIn ↗
                </a>
                <a
                  href={profile.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-emerald-400"
                >
                  Instagram ↗
                </a>
              </div>
            </div>

            {/* İletişim Formu */}
            <div className="lg:col-span-7 border border-slate-800 bg-[#0c1220] p-6 text-xs">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label htmlFor="name" className="text-slate-400 uppercase font-semibold block">
                    {dict.contact.nameLabel[locale]}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full bg-[#080c16] border border-slate-800 focus:border-emerald-500 text-slate-100 p-2.5 outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-none"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="email" className="text-slate-400 uppercase font-semibold block">
                    {dict.contact.emailLabel[locale]}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full bg-[#080c16] border border-slate-800 focus:border-emerald-500 text-slate-100 p-2.5 outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-none"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="message" className="text-slate-400 uppercase font-semibold block">
                    {dict.contact.messageLabel[locale]}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-[#080c16] border border-slate-800 focus:border-emerald-500 text-slate-100 p-2.5 outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-5 py-2.5 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-none disabled:opacity-50"
                >
                  {isSubmitting ? dict.contact.submitting[locale] : dict.contact.submitButton[locale]}
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* ── 09. FOOTER ───────────────────────────────────────── */}
        <footer className="border-t border-slate-800 pt-8 pb-12 text-xs text-slate-500 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} {profile.name} — {profile.role[locale]}. {dict.footer.rights[locale]}
          </div>
          <div className="flex items-center gap-4">
            <a href="#hero" className="hover:text-slate-300">↑ {locale === 'tr' ? 'Başa Dön' : 'Back to Top'}</a>
          </div>
        </footer>

      </main>
    </div>
  );
}

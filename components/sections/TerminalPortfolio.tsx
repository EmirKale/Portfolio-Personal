'use client';

import React, { useState } from 'react';
import Image from 'next/image';
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

  // Contact form state
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Active tabs or filter if needed
  const [activeFilter, setActiveFilter] = useState<'all' | 'featured'>('all');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormState({ name: '', email: '', message: '' });
    }, 800);
  };

  const featuredProjects = projects.slice(0, 3);
  const archiveProjects = projects.slice(3);

  return (
    <div className="w-full pb-16 font-mono text-black">
      {/* ── DESKTOP ICONS (FLOATING ON LEFT/TOP) ── */}
      <div className="max-w-7xl mx-auto px-4 pt-6 pb-2">
        <div className="flex flex-wrap items-center gap-6 text-[11px] font-bold">
          <a href="#readme" className="flex items-center gap-2 px-2 py-1 bg-white border border-black shadow-[2px_2px_0_#000] hover:bg-black hover:text-white transition-none">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
              <path d="M1 2h14v12H1V2zm1 1v10h12V3H2zm2 2h8v1H4V5zm0 3h8v1H4V8zm0 3h5v1H4v-1z"/>
            </svg>
            <span>Readme.txt</span>
          </a>

          <a href="#projects" className="flex items-center gap-2 px-2 py-1 bg-white border border-black shadow-[2px_2px_0_#000] hover:bg-black hover:text-white transition-none">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
              <path d="M1 3h5l2 2h7v9H1V3zm1 3v7h12V6H2z"/>
            </svg>
            <span>Projects/ ({projects.length})</span>
          </a>

          <a href="#skills" className="flex items-center gap-2 px-2 py-1 bg-white border border-black shadow-[2px_2px_0_#000] hover:bg-black hover:text-white transition-none">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
              <path d="M2 2h12v12H2V2zm1 1v10h10V3H3zm2 2h2v2H5V5zm4 0h2v2H9V5zm-4 4h2v2H5V9zm4 0h2v2H9V9z"/>
            </svg>
            <span>Stack.sys</span>
          </a>

          <a href="#certificates" className="flex items-center gap-2 px-2 py-1 bg-white border border-black shadow-[2px_2px_0_#000] hover:bg-black hover:text-white transition-none">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
              <path d="M4 1h8v2H4V1zm-1 3h10v11H3V4zm1 1v9h8V5H4zm2 2h4v1H6V7zm0 2h4v1H6V9z"/>
            </svg>
            <span>Credentials.bin</span>
          </a>

          <a href="#contact" className="flex items-center gap-2 px-2 py-1 bg-white border border-black shadow-[2px_2px_0_#000] hover:bg-black hover:text-white transition-none">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
              <path d="M1 3h14v10H1V3zm1 1v1.5l6 4.5 6-4.5V4H2zm0 3v5h12V7l-6 4.5L2 7z"/>
            </svg>
            <span>Quick_Message.app</span>
          </a>

          <div className="ml-auto hidden sm:flex items-center gap-2 text-[10px] text-neutral-700 bg-white border border-black px-2 py-1">
            <span>OS: EMIR_V2.6</span>
            <span>•</span>
            <span>SYSTEM 7.0.1</span>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 space-y-8 pt-4">

        {/* ── TOP ROW: README.TXT (HERO) + SYSTEM INSPECTOR ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Main Hero Window: Readme.txt */}
          <section id="readme" className="lg:col-span-8 retro-window">
            {/* Window Header */}
            <div className="border-b-2 border-black flex items-center justify-between px-3 py-1.5 bg-white select-none">
              <div className="flex items-center gap-2">
                <span className="retro-box-handle">
                  <span className="w-1.5 h-1.5 bg-black inline-block"></span>
                </span>
                <span className="font-bold text-xs uppercase tracking-wider">Readme.txt — Emir Kale</span>
              </div>
              <div className="flex-1 mx-4 h-3 retro-striped-title border-y border-black"></div>
              <span className="text-[10px] font-bold text-black border border-black px-1.5 py-0.2 bg-[#f4f4f4]">
                TEXT / UTF-8
              </span>
            </div>

            {/* Window Content */}
            <div className="p-6 sm:p-8 space-y-6 bg-white">
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-none uppercase font-display">
                  MADE TO THINK.<br />BUILT TO LAST.
                </h1>
                <p className="text-base sm:text-lg font-bold text-black border-l-4 border-black pl-3 py-1">
                  {profile.name} — {profile.role[locale]}
                </p>
                <p className="text-sm leading-relaxed text-black max-w-[70ch]">
                  {profile.tagline[locale]}
                </p>
                <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed max-w-[70ch]">
                  {profile.bio[locale]}
                </p>
              </div>

              {/* Status & Quick Specs Box */}
              <div className="border-2 border-black p-3 bg-[#f8f9fa] grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div>
                  <span className="text-neutral-600 block uppercase font-bold text-[10px]">
                    {dict.contact.location[locale]}:
                  </span>
                  <span className="font-bold">{profile.location[locale]}</span>
                </div>
                <div>
                  <span className="text-neutral-600 block uppercase font-bold text-[10px]">
                    {dict.contact.education[locale]}:
                  </span>
                  <span className="font-bold leading-tight block">{profile.university[locale]}</span>
                </div>
                <div>
                  <span className="text-neutral-600 block uppercase font-bold text-[10px]">
                    {dict.contact.statusLabel?.[locale] ?? (locale === 'tr' ? 'DURUM' : 'STATUS')}:
                  </span>
                  <span className="bg-black text-white px-1.5 py-0.5 font-bold inline-block">
                    {dict.contact.statusValue?.[locale] ?? profile.status[locale]}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#contact"
                  className="retro-btn-accent px-4 py-2 text-xs"
                >
                  [ {dict.hero.cta2[locale]} ]
                </a>
                <a
                  href={profile.cv}
                  download
                  className="retro-btn px-4 py-2 text-xs"
                >
                  ↓ {dict.contact.downloadCv[locale]}
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="retro-btn px-4 py-2 text-xs"
                >
                  GitHub ↗
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="retro-btn px-4 py-2 text-xs"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>

            {/* Window Status Bar */}
            <div className="border-t-2 border-black px-3 py-1 bg-[#eeeeee] flex items-center justify-between text-[11px] font-bold text-neutral-700">
              <span>1 item</span>
              <span>2.4K bytes</span>
              <span>READ / WRITE</span>
            </div>
          </section>

          {/* Side Window: System & Profile */}
          <aside className="lg:col-span-4 space-y-6">
            
            {/* System Info Box */}
            <div className="retro-window">
              <div className="border-b-2 border-black flex items-center justify-between px-3 py-1.5 bg-white select-none">
                <span className="font-bold text-xs uppercase">System.log</span>
                <div className="flex-1 mx-3 h-3 retro-striped-title border-y border-black"></div>
                <span className="retro-box-handle">
                  <span className="w-1.5 h-1.5 bg-black inline-block"></span>
                </span>
              </div>
              <div className="p-4 space-y-3 bg-white text-xs">
                <div className="flex justify-between border-b border-black pb-1.5">
                  <span className="text-neutral-600 uppercase font-bold">OPERATOR</span>
                  <span className="font-bold">{profile.name}</span>
                </div>
                <div className="flex justify-between border-b border-black pb-1.5">
                  <span className="text-neutral-600 uppercase font-bold">CONTACT</span>
                  <a href={`mailto:${profile.email}`} className="font-bold underline hover:bg-black hover:text-white">
                    {profile.email}
                  </a>
                </div>
                <div className="flex justify-between border-b border-black pb-1.5">
                  <span className="text-neutral-600 uppercase font-bold">PHONE</span>
                  <span className="font-bold">{profile.phone}</span>
                </div>
                <div className="flex justify-between border-b border-black pb-1.5">
                  <span className="text-neutral-600 uppercase font-bold">ENVIRONMENT</span>
                  <span className="font-bold">.NET 8 / Next.js 15 / AI</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600 uppercase font-bold">ARCHITECTURE</span>
                  <span className="font-bold">x86_64 / Clean Layered</span>
                </div>
              </div>
            </div>

            {/* Metrics Window */}
            <div className="retro-window">
              <div className="border-b-2 border-black flex items-center justify-between px-3 py-1.5 bg-white select-none">
                <span className="font-bold text-xs uppercase">{dict.stats.title[locale]}</span>
                <div className="flex-1 mx-3 h-3 retro-striped-title border-y border-black"></div>
                <span className="text-[10px] font-bold">METRICS</span>
              </div>
              <div className="p-4 grid grid-cols-2 gap-3 bg-white">
                {stats.map((item, idx) => (
                  <div key={idx} className="border-2 border-black p-3 bg-[#f8f9fa] space-y-1">
                    <span className="text-2xl sm:text-3xl font-black font-display text-black block tabular-nums">
                      {item.value}{item.suffix}
                    </span>
                    <span className="text-[10px] font-bold text-neutral-700 uppercase tracking-tight block">
                      {item.label[locale]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Profile Avatar Window (1-bit / high contrast frame) */}
            <div className="retro-window">
              <div className="border-b-2 border-black flex items-center justify-between px-3 py-1.5 bg-white select-none">
                <span className="font-bold text-xs uppercase">Portrait.raw</span>
                <div className="flex-1 mx-3 h-3 retro-striped-title border-y border-black"></div>
                <span className="text-[10px] font-bold">1-BIT MONO</span>
              </div>
              <div className="p-3 bg-white">
                <div className="border-2 border-black bg-black p-0.5">
                  <Image
                    src={profile.avatar}
                    alt={profile.name}
                    width={400}
                    height={400}
                    className="w-full h-auto object-cover grayscale contrast-150 brightness-95"
                    priority
                  />
                </div>
              </div>
            </div>

          </aside>
        </div>

        {/* ── PROJECTS DIRECTORY (CASE STUDIES & APPLICATIONS) ── */}
        <section id="projects" className="retro-window">
          {/* Window Header */}
          <div className="border-b-2 border-black flex items-center justify-between px-3 py-1.5 bg-white select-none">
            <div className="flex items-center gap-2">
              <span className="retro-box-handle">
                <span className="w-1.5 h-1.5 bg-black inline-block"></span>
              </span>
              <span className="font-bold text-xs uppercase">
                Projects/Featured/ — {dict.projects.title[locale]}
              </span>
            </div>
            <div className="flex-1 mx-4 h-3 retro-striped-title border-y border-black"></div>
            <div className="flex items-center gap-2 text-[10px] font-bold">
              <span className="border border-black px-2 py-0.5 bg-white">
                {featuredProjects.length} {dict.projects.recordsListed?.[locale] ?? 'items'}
              </span>
            </div>
          </div>

          {/* Window Sub-Bar with folder breadcrumb */}
          <div className="border-b-2 border-black px-4 py-2 bg-[#f4f4f4] flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-2">
              <span className="font-bold">VIEW:</span>
              <button 
                onClick={() => setActiveFilter('all')}
                className={`px-2 py-0.5 border border-black font-bold ${activeFilter === 'all' ? 'bg-black text-white' : 'bg-white hover:bg-neutral-100'}`}
              >
                Detailed Cases
              </button>
            </div>
            <span className="text-[11px] text-neutral-600">{dict.projects.subtitle[locale]}</span>
          </div>

          {/* Featured Case Studies Grid / List */}
          <div className="p-4 sm:p-6 space-y-8 bg-white divide-y-2 divide-black">
            {featuredProjects.map((proj, idx) => (
              <article key={proj.id} className={`${idx > 0 ? 'pt-8' : ''} space-y-5`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-2 border-black p-3 bg-[#f8f9fa]">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider bg-black text-white px-2 py-0.5 inline-block mb-1">
                      {dict.projects.caseLabel?.[locale] ?? 'CASE'} 0{idx + 1} {'//'} {proj.category[locale]}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black font-display uppercase tracking-tight text-black">
                      {getProjectTitle(proj, locale)}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 text-xs">
                    {proj.links.demo && (
                      <a
                        href={proj.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="retro-btn-accent px-3 py-1.5 text-xs font-bold"
                      >
                        [ {dict.projects.liveDemo[locale]} ↗ ]
                      </a>
                    )}
                    {proj.links.github && (
                      <a
                        href={proj.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="retro-btn px-3 py-1.5 text-xs font-bold"
                      >
                        [ {dict.projects.viewCode[locale]} ↗ ]
                      </a>
                    )}
                  </div>
                </div>

                {/* Screenshot in 1-bit style window container */}
                {proj.cover && (
                  <div className="border-2 border-black p-1 bg-white">
                    <div className="border border-black overflow-hidden bg-black">
                      <Image
                        src={proj.cover}
                        alt={getProjectTitle(proj, locale)}
                        width={1200}
                        height={675}
                        className="w-full h-auto object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-200"
                      />
                    </div>
                  </div>
                )}

                {/* Problem, Solution & Results */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  <div className="border-2 border-black p-3 bg-[#ffffff] space-y-1.5">
                    <span className="font-black uppercase text-[11px] block border-b border-black pb-1">
                      {dict.projects.problem[locale]}
                    </span>
                    <p className="text-black leading-relaxed">
                      {proj.problem ? proj.problem[locale] : proj.description[locale]}
                    </p>
                  </div>

                  <div className="border-2 border-black p-3 bg-[#ffffff] space-y-1.5">
                    <span className="font-black uppercase text-[11px] block border-b border-black pb-1">
                      {dict.projects.solutionArch?.[locale] ?? (locale === 'tr' ? 'Çözüm & Mimari' : 'Solution & Architecture')}
                    </span>
                    <p className="text-black leading-relaxed">
                      {proj.solution ? proj.solution[locale] : (proj.longDescription ? proj.longDescription[locale] : proj.description[locale])}
                    </p>
                  </div>

                  <div className="border-2 border-black p-3 bg-[#ffffff] space-y-1.5">
                    <span className="font-black uppercase text-[11px] block border-b border-black pb-1">
                      {dict.projects.resultsDeliverables?.[locale] ?? (locale === 'tr' ? 'Sonuç & Çıktılar' : 'Results & Deliverables')}
                    </span>
                    {proj.results && proj.results.length > 0 ? (
                      <ul className="space-y-1 text-black">
                        {proj.results.map((res, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="font-bold">•</span>
                            <span>{res[locale]}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-black leading-relaxed">
                        {proj.description[locale]}
                      </p>
                    )}
                  </div>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
                  <span className="font-bold text-[11px] uppercase mr-1">
                    {dict.projects.toolsUsed?.[locale] ?? (locale === 'tr' ? 'Kullanılan Araçlar:' : 'Tools Used:')}
                  </span>
                  {proj.tech.map((t, i) => (
                    <span key={i} className="retro-tag font-bold">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          {/* Window Footer */}
          <div className="border-t-2 border-black px-4 py-1.5 bg-[#eeeeee] flex items-center justify-between text-xs font-bold text-neutral-700">
            <span>{featuredProjects.length} CASE STUDIES PRESENT</span>
            <span>STATUS: VERIFIED</span>
          </div>
        </section>

        {/* ── PROJECT ARCHIVE / FILE MANAGER TABLE ── */}
        {archiveProjects.length > 0 && (
          <section id="archive" className="retro-window">
            <div className="border-b-2 border-black flex items-center justify-between px-3 py-1.5 bg-white select-none">
              <div className="flex items-center gap-2">
                <span className="retro-box-handle">
                  <span className="w-1.5 h-1.5 bg-black inline-block"></span>
                </span>
                <span className="font-bold text-xs uppercase">
                  {dict.projects.archiveTitle?.[locale] ?? 'All Projects & System Archive'}
                </span>
              </div>
              <div className="flex-1 mx-4 h-3 retro-striped-title border-y border-black"></div>
              <span className="text-[10px] font-bold">
                {archiveProjects.length} {dict.projects.recordsListed?.[locale] ?? 'records'}
              </span>
            </div>

            <div className="overflow-x-auto bg-white">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b-2 border-black bg-[#f0f0f0] text-black">
                    <th className="p-3 font-bold border-r border-black">{dict.projects.tableProject?.[locale] ?? 'PROJECT'}</th>
                    <th className="p-3 font-bold border-r border-black">{dict.projects.tableCategory?.[locale] ?? 'CATEGORY'}</th>
                    <th className="p-3 font-bold border-r border-black">{dict.projects.tableTech?.[locale] ?? 'TECHNOLOGIES'}</th>
                    <th className="p-3 font-bold border-r border-black">{dict.projects.tableDescription?.[locale] ?? 'DESCRIPTION'}</th>
                    <th className="p-3 font-bold text-right">{dict.projects.tableLinks?.[locale] ?? 'LINKS'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y border-b-2 border-black divide-black text-black">
                  {archiveProjects.map((p) => (
                    <tr key={p.id} className="hover:bg-[#f8f8f8]">
                      <td className="p-3 font-bold border-r border-black whitespace-nowrap">{getProjectTitle(p, locale)}</td>
                      <td className="p-3 border-r border-black whitespace-nowrap">{p.category[locale]}</td>
                      <td className="p-3 border-r border-black text-neutral-800">{p.tech.join(', ')}</td>
                      <td className="p-3 border-r border-black text-neutral-800 max-w-sm">{p.description[locale]}</td>
                      <td className="p-3 text-right whitespace-nowrap">
                        {p.links.demo && (
                          <a href={p.links.demo} target="_blank" rel="noopener noreferrer" className="font-bold underline hover:bg-black hover:text-white mr-3">
                            Demo ↗
                          </a>
                        )}
                        {p.links.github && (
                          <a href={p.links.github} target="_blank" rel="noopener noreferrer" className="font-bold underline hover:bg-black hover:text-white">
                            Repo ↗
                          </a>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="px-4 py-1.5 bg-[#eeeeee] flex items-center justify-between text-xs font-bold text-neutral-700">
              <span>TABLE VIEW: ACTIVE</span>
              <span>FILTER: NONE</span>
            </div>
          </section>
        )}

        {/* ── TECH STACK & SKILLS (CONTROL PANELS) ── */}
        <section id="skills" className="retro-window">
          <div className="border-b-2 border-black flex items-center justify-between px-3 py-1.5 bg-white select-none">
            <div className="flex items-center gap-2">
              <span className="retro-box-handle">
                <span className="w-1.5 h-1.5 bg-black inline-block"></span>
              </span>
              <span className="font-bold text-xs uppercase">{dict.skills.title[locale]}</span>
            </div>
            <div className="flex-1 mx-4 h-3 retro-striped-title border-y border-black"></div>
            <span className="text-[10px] font-bold">CONTROL_PANEL</span>
          </div>

          <div className="p-4 sm:p-6 bg-white space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
              {techStack.map((cat, idx) => (
                <div key={idx} className="border-2 border-black p-4 space-y-3 bg-[#ffffff]">
                  <div className="flex items-center justify-between border-b-2 border-black pb-2">
                    <span className="font-black uppercase tracking-wider font-display">
                      {cat.title[locale]}
                    </span>
                    <span className="text-[10px] border border-black px-1.5 bg-[#f4f4f4] font-bold">
                      {cat.skills.length} {dict.skills.toolsCount?.[locale] ?? 'tools'}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="retro-tag font-bold"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t-2 border-black px-4 py-1.5 bg-[#eeeeee] flex items-center justify-between text-xs font-bold text-neutral-700">
            <span>TOTAL MODULES: {techStack.reduce((acc, c) => acc + c.skills.length, 0)}</span>
            <span>ALL COMPILERS READY</span>
          </div>
        </section>

        {/* ── CERTIFICATES / CREDENTIALS (INDEX CARDS) ── */}
        <section id="certificates" className="retro-window">
          <div className="border-b-2 border-black flex items-center justify-between px-3 py-1.5 bg-white select-none">
            <div className="flex items-center gap-2">
              <span className="retro-box-handle">
                <span className="w-1.5 h-1.5 bg-black inline-block"></span>
              </span>
              <span className="font-bold text-xs uppercase">{dict.certificates.title[locale]}</span>
            </div>
            <div className="flex-1 mx-4 h-3 retro-striped-title border-y border-black"></div>
            <span className="text-[10px] font-bold">
              {certificates.length} {dict.certificates.countLabel?.[locale] ?? 'credentials'}
            </span>
          </div>

          <div className="bg-white divide-y-2 divide-black text-xs">
            {certificates.map((cert) => (
              <div key={cert.pdf} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-[#fafafa]">
                <div className="space-y-1">
                  <div className="font-bold text-black text-sm">
                    {locale === 'en' && cert.titleEn ? cert.titleEn : cert.title}
                  </div>
                  <div className="text-neutral-700 text-xs">
                    <span className="font-bold">{dict.certificates.issuerLabel?.[locale] ?? 'Issuer'}:</span> {cert.issuer} • {cert.meta[locale]}
                  </div>
                </div>
                <a
                  href={cert.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="retro-btn px-3 py-1.5 text-xs font-bold whitespace-nowrap self-start sm:self-auto"
                >
                  [ {dict.certificates.viewPDF[locale]} ↗ ]
                </a>
              </div>
            ))}
          </div>

          <div className="border-t-2 border-black px-4 py-1.5 bg-[#eeeeee] flex items-center justify-between text-xs font-bold text-neutral-700">
            <span>INTEGRITY CHECK: PASSED</span>
            <span>PDF SIGNATURES VERIFIED</span>
          </div>
        </section>

        {/* ── EXPERIENCE / TIMELINE LOGS (ACTIVITY.LOG) ── */}
        <section id="experience" className="retro-window">
          <div className="border-b-2 border-black flex items-center justify-between px-3 py-1.5 bg-white select-none">
            <div className="flex items-center gap-2">
              <span className="retro-box-handle">
                <span className="w-1.5 h-1.5 bg-black inline-block"></span>
              </span>
              <span className="font-bold text-xs uppercase">Activity.log — {dict.experience.title[locale]}</span>
            </div>
            <div className="flex-1 mx-4 h-3 retro-striped-title border-y border-black"></div>
            <span className="text-[10px] font-bold">TIMESTAMPED</span>
          </div>

          <div className="p-6 bg-white space-y-4 text-xs">
            {journey.map((item, idx) => (
              <div
                key={item.year}
                className="border-2 border-black p-4 space-y-1.5 bg-[#ffffff]"
              >
                <div className="flex items-center justify-between border-b border-black pb-1.5">
                  <span className="bg-black text-white px-2 py-0.5 font-bold font-mono">
                    TIMESTAMP: {item.year}
                  </span>
                  <span className="font-black text-black font-display uppercase tracking-tight">
                    {item.title[locale]}
                  </span>
                </div>
                <p className="text-neutral-800 leading-relaxed pt-1">
                  {item.description[locale]}
                </p>
              </div>
            ))}
          </div>

          <div className="border-t-2 border-black px-4 py-1.5 bg-[#eeeeee] flex items-center justify-between text-xs font-bold text-neutral-700">
            <span>LOG HISTORY: 2024 - 2026</span>
            <span>END OF STREAM</span>
          </div>
        </section>

        {/* ── CONTACT & QUICK NOTE WINDOW ── */}
        <section id="contact" className="retro-window">
          <div className="border-b-2 border-black flex items-center justify-between px-3 py-1.5 bg-white select-none">
            <div className="flex items-center gap-2">
              <span className="retro-box-handle">
                <span className="w-1.5 h-1.5 bg-black inline-block"></span>
              </span>
              <span className="font-bold text-xs uppercase">Quick_Note.app — {dict.contact.title[locale]}</span>
            </div>
            <div className="flex-1 mx-4 h-3 retro-striped-title border-y border-black"></div>
            <span className="retro-box-handle">
              <span className="w-1.5 h-1.5 bg-black inline-block"></span>
            </span>
          </div>

          <div className="p-6 sm:p-8 bg-white space-y-6">
            <div className="space-y-1">
              <h2 className="text-2xl sm:text-3xl font-black uppercase font-display tracking-tight text-black">
                {dict.contact.title[locale]}
              </h2>
              <p className="text-xs sm:text-sm text-neutral-700">
                {dict.contact.subtitle[locale]}
              </p>
            </div>

            {submitSuccess && (
              <div className="p-3 border-2 border-black bg-[#e6ffed] text-black text-xs font-bold">
                ✓ {dict.contact.successMessage[locale]}
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Direct Info */}
              <div className="lg:col-span-5 border-2 border-black p-4 space-y-4 text-xs bg-[#f8f9fa]">
                <div className="font-bold uppercase text-[11px] border-b border-black pb-1">
                  COMMUNICATION PORTS
                </div>

                <div>
                  <span className="text-neutral-600 block uppercase font-bold text-[10px] mb-0.5">
                    {dict.contact.emailLabel[locale]}
                  </span>
                  <a
                    href={`mailto:${profile.email}`}
                    className="font-bold underline text-sm hover:bg-black hover:text-white"
                  >
                    {profile.email}
                  </a>
                </div>

                <div>
                  <span className="text-neutral-600 block uppercase font-bold text-[10px] mb-0.5">
                    {dict.contact.phoneLabel[locale]}
                  </span>
                  <a
                    href={`tel:${profile.phoneHref}`}
                    className="font-bold text-sm hover:underline"
                  >
                    {profile.phone}
                  </a>
                </div>

                <div>
                  <span className="text-neutral-600 block uppercase font-bold text-[10px] mb-0.5">
                    {dict.contact.location[locale]}
                  </span>
                  <span className="font-bold text-sm">{profile.location[locale]}</span>
                </div>

                <div className="pt-3 border-t border-black flex flex-wrap gap-2 text-xs">
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="retro-btn px-2.5 py-1 text-xs"
                  >
                    GitHub ↗
                  </a>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="retro-btn px-2.5 py-1 text-xs"
                  >
                    LinkedIn ↗
                  </a>
                  <a
                    href={profile.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="retro-btn px-2.5 py-1 text-xs"
                  >
                    Instagram ↗
                  </a>
                </div>
              </div>

              {/* Form Input */}
              <div className="lg:col-span-7 border-2 border-black p-5 text-xs bg-white">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <label htmlFor="form-name" className="uppercase font-bold block">
                      {dict.contact.nameLabel[locale]}
                    </label>
                    <input
                      id="form-name"
                      name="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-white border-2 border-black p-2.5 outline-none font-mono focus:bg-[#fffae6]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="form-email" className="uppercase font-bold block">
                      {dict.contact.emailLabel[locale]}
                    </label>
                    <input
                      id="form-email"
                      name="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-white border-2 border-black p-2.5 outline-none font-mono focus:bg-[#fffae6]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="form-message" className="uppercase font-bold block">
                      {dict.contact.messageLabel[locale]}
                    </label>
                    <textarea
                      id="form-message"
                      name="message"
                      rows={4}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full bg-white border-2 border-black p-2.5 outline-none font-mono resize-none focus:bg-[#fffae6]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="retro-btn-accent px-6 py-2.5 text-xs font-bold disabled:opacity-50"
                  >
                    {isSubmitting ? dict.contact.submitting[locale] : `[ ${dict.contact.submitButton[locale]} ]`}
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="border-t-2 border-black px-4 py-1.5 bg-[#eeeeee] flex items-center justify-between text-xs font-bold text-neutral-700">
            <span>PORT 25 / 465 READY</span>
            <span>ENCRYPT: NONE (1-BIT CLEAR)</span>
          </div>
        </section>

        {/* ── FOOTER / SYSTEM SHUTDOWN ── */}
        <footer className="retro-window p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs bg-white">
          <div>
            © {new Date().getFullYear()} {profile.name} — {profile.role[locale]}. {dict.footer.rights[locale]}
          </div>
          <div className="flex items-center gap-4">
            <a href="#readme" className="font-bold underline hover:bg-black hover:text-white px-1">
              ↑ [ {locale === 'tr' ? 'Başa Dön' : 'Return to Top'} ]
            </a>
          </div>
        </footer>

      </main>
    </div>
  );
}

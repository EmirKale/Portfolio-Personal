'use client';

import { projects } from '@/lib/data/projects';
import { useI18n } from '@/components/providers/I18nProvider';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import ArrowIcon from '@/components/ArrowIcon';
import TiltCard from '@/components/TiltCard';

export default function Projects() {
  const { locale, dictionary } = useI18n();
  const dict = dictionary.projects;
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="projects" ref={sectionRef} className="section-border py-24 md:py-32 bg-bg">
      <div className="max-w-container mx-auto px-6 md:px-10">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-cream-muted block mb-4">
              / {dict.title[locale]}
            </span>
            <h2 className="text-display-md font-display font-bold uppercase text-cream">
              {dict.title[locale]}
            </h2>
          </motion.div>
          <motion.p
            className="text-cream-muted text-sm"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {dict.subtitle[locale]}
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <TiltCard className="h-full">
                <div className="group relative overflow-hidden rounded-2xl border border-border-line bg-surface card-glow cursor-pointer h-full flex flex-col">
                  {/* Cover Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={proj.cover}
                      alt={proj.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-bg/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <span className="px-5 py-2.5 bg-cream text-bg text-sm font-semibold uppercase tracking-[0.1em] rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 flex items-center gap-2">
                        {dict.viewProject[locale]}
                        <ArrowIcon variant="dark" className="-mr-1 scale-90" />
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    {/* Category */}
                    <span className="text-xs uppercase tracking-[0.2em] text-cream-muted">
                      {proj.category[locale]}
                    </span>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-display font-bold text-cream mt-2 mb-3 group-hover:text-cream/80 transition-colors">
                      {proj.title}
                    </h3>

                    {/* Description */}
                    <p className="text-cream-muted text-sm leading-relaxed line-clamp-2 mb-4 flex-1">
                      {proj.description[locale]}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                      {proj.tech.slice(0, 4).map((t, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-medium text-cream-muted border border-border-line rounded-full"
                        >
                          {t}
                        </span>
                      ))}
                      {proj.tech.length > 4 && (
                        <span className="px-3 py-1 text-xs font-medium text-cream-muted border border-border-line rounded-full">
                          +{proj.tech.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4 pt-4 border-t border-border-line relative z-10">
                      {proj.links.github && (
                        <a
                          href={proj.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-cream-muted hover:text-cream transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span className="link-underline">{dict.viewCode[locale]}</span>
                          <ArrowIcon variant="light" className="scale-75 -ml-1 opacity-50 group-hover/link:opacity-100 transition-opacity" />
                        </a>
                      )}
                      {proj.links.demo && (
                        <a
                          href={proj.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-cream-muted hover:text-cream transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span className="link-underline">{dict.liveDemo[locale]}</span>
                          <ArrowIcon variant="light" className="scale-75 -ml-1 opacity-50 group-hover/link:opacity-100 transition-opacity" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { certificates } from '@/lib/data/certificates';
import { useI18n } from '@/components/providers/I18nProvider';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Certificates() {
  const { locale, dictionary } = useI18n();
  const dict = dictionary.certificates;
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="certificates" ref={sectionRef} className="section-border py-24 md:py-32 bg-bg">
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
            className="text-cream-muted text-sm max-w-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            {dict.subtitle[locale]}
          </motion.p>
        </div>

        {/* Certificates list */}
        <div className="border-t border-border-line">
          {certificates.map((cert, idx) => (
            <motion.a
              key={cert.title}
              href={cert.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between py-6 md:py-8 border-b border-border-line hover:bg-surface-hover transition-colors duration-300 px-4 md:px-6 rounded-lg -mx-4 md:-mx-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
            >
              <div className="flex items-center gap-4 md:gap-6 flex-1 min-w-0">
                {/* Icon */}
                <span className="text-2xl md:text-3xl flex-shrink-0">{cert.icon}</span>

                {/* Title & Issuer */}
                <div className="min-w-0">
                  <h3 className="text-base md:text-lg font-display font-semibold text-cream group-hover:text-cream/80 transition-colors truncate">
                    {cert.title}
                  </h3>
                  <p className="text-xs md:text-sm text-cream-muted mt-0.5">
                    {cert.issuer}
                  </p>
                </div>
              </div>

              {/* Meta & Arrow */}
              <div className="flex items-center gap-4 flex-shrink-0 ml-4">
                <span className="text-xs text-cream-muted uppercase tracking-wider hidden md:block">
                  {cert.meta[locale]}
                </span>
                <span className="text-cream-muted group-hover:text-cream group-hover:translate-x-1 transition-all duration-300 text-lg">
                  →
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
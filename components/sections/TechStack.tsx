'use client';

import { techStack } from '@/lib/data/techStack';
import { useI18n } from '@/components/providers/I18nProvider';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function TechStack() {
  const { locale, dictionary } = useI18n();
  const dict = dictionary.skills;
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  return (
    <section id="skills" ref={sectionRef} className="section-border py-24 md:py-32 bg-bg">
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

        {/* Accordion Style List */}
        <div className="border-t border-border-line">
          {techStack.map((cat, idx) => (
            <motion.div
              key={idx}
              className="border-b border-border-line"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.08, duration: 0.6 }}
            >
              <button
                onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between py-6 md:py-8 group cursor-pointer"
              >
                <div className="flex items-center gap-4 md:gap-6">
                  <span className="text-xl md:text-2xl">{cat.icon}</span>
                  <h3 className="text-lg md:text-xl font-display font-semibold text-cream group-hover:text-cream/80 transition-colors uppercase tracking-wider">
                    {cat.title[locale]}
                  </h3>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-cream-muted uppercase tracking-wider hidden md:inline">
                    {cat.skills.length} {locale === 'tr' ? 'beceri' : 'skills'}
                  </span>
                  <motion.span
                    className="text-cream-muted text-xl"
                    animate={{ rotate: expandedIdx === idx ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    +
                  </motion.span>
                </div>
              </button>

              {/* Expanded content */}
              <motion.div
                initial={false}
                animate={{
                  height: expandedIdx === idx ? 'auto' : 0,
                  opacity: expandedIdx === idx ? 1 : 0,
                }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="pb-8 pl-12 md:pl-16">
                  <div className="flex flex-wrap gap-3">
                    {cat.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 text-sm font-medium text-cream border border-border-line rounded-full hover:bg-surface-hover hover:border-cream/20 transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

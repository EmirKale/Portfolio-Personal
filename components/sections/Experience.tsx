'use client';

import { journey } from '@/lib/data/profile';
import { useI18n } from '@/components/providers/I18nProvider';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Experience() {
  const { locale, dictionary } = useI18n();
  const dict = dictionary.experience;
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="experience" ref={sectionRef} className="section-border py-24 md:py-32 bg-bg">
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

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] md:left-[23px] top-0 bottom-0 w-[1px] bg-border-line" />

          <div className="space-y-0">
            {journey.map((item, idx) => (
              <motion.div
                key={item.year}
                className="relative flex items-start gap-6 md:gap-10 group"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: idx * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Timeline dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-border-line bg-bg flex items-center justify-center group-hover:border-cream/30 transition-colors duration-300">
                    <div className="w-2.5 h-2.5 rounded-full bg-cream group-hover:scale-125 transition-transform duration-300" />
                  </div>
                </div>

                {/* Content card */}
                <div className="flex-1 pb-12 md:pb-16">
                  <div className="border border-border-line rounded-xl p-6 md:p-8 hover:bg-surface-hover hover:border-cream/10 transition-all duration-300">
                    <span className="text-xs font-medium uppercase tracking-[0.3em] text-cream-muted">
                      {item.year}
                    </span>
                    <h3 className="text-lg md:text-xl font-display font-bold text-cream mt-2 mb-3">
                      {item.title[locale]}
                    </h3>
                    <p className="text-cream-muted text-sm leading-relaxed">
                      {item.description[locale]}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
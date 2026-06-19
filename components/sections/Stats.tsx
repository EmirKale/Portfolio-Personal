'use client';

import { stats } from '@/lib/data/stats';
import { useI18n } from '@/components/providers/I18nProvider';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const startTime = Date.now();

    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  const { locale, dictionary } = useI18n();
  const dict = dictionary.stats;
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="stats" ref={sectionRef} className="section-border py-20 bg-bg">
      <div className="max-w-container mx-auto px-6 md:px-10">
        {/* Section label */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-cream-muted">
            / {dict.title[locale]}
          </span>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border border-border-line rounded-2xl overflow-hidden">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className={`p-8 md:p-10 text-center ${
                idx < stats.length - 1 ? 'border-r border-border-line' : ''
              } ${idx < 2 ? 'max-lg:border-b max-lg:border-border-line' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
            >
              <div className="text-display-lg font-display font-bold text-cream mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm uppercase tracking-[0.15em] text-cream-muted">
                {stat.label[locale]}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
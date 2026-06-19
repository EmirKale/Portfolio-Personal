'use client';

import { useI18n } from '@/components/providers/I18nProvider';
import { profile } from '@/lib/data/profile';
import { motion } from 'framer-motion';
import Scene3DWrapper from '@/components/three/Scene3DWrapper';
import ArrowIcon from '@/components/ArrowIcon';
import MagneticButton from '@/components/MagneticButton';

export default function Hero() {
  const { locale, dictionary } = useI18n();
  const dict = dictionary.hero;

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-end overflow-hidden grid-bg">
      {/* 3D Scene — Background */}
      <div className="absolute inset-0 z-0 opacity-60">
        <Scene3DWrapper />
      </div>

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-bg via-bg/40 to-transparent pointer-events-none" />

      {/* Top badge */}
      <motion.div
        className="absolute top-28 left-6 md:left-10 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <span className="text-xs font-medium uppercase tracking-[0.3em] text-cream-muted">
          {dict.since[locale]}
        </span>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 max-w-container mx-auto w-full px-6 md:px-10 pb-16 md:pb-24">
        {/* Big Title */}
        <motion.h1
          className="text-display-xl font-display font-bold uppercase text-cream leading-[0.9] mb-6"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {dict.role[locale].split('\n').map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </motion.h1>

        {/* Subtitle Row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-t border-border-line pt-6">
          <motion.div
            className="max-w-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <p className="text-sm md:text-base font-medium uppercase tracking-[0.15em] text-cream-dim mb-3">
              {dict.subtitle[locale]}
            </p>
            <p className="text-sm text-cream-muted leading-relaxed">
              {dict.tagline[locale]}
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <MagneticButton
              href="#projects"
              className="group flex items-center gap-2 px-6 py-3 bg-cream text-bg text-sm font-semibold uppercase tracking-[0.1em] rounded-full hover:bg-cream/90 transition-colors duration-300"
            >
              {dict.cta1[locale]}
              <ArrowIcon variant="dark" className="ml-1 -mr-2" />
            </MagneticButton>
            <MagneticButton
              href="#contact"
              className="group flex items-center gap-2 px-6 py-3 border border-cream/20 text-cream text-sm font-semibold uppercase tracking-[0.1em] rounded-full hover:border-cream/50 transition-colors duration-300"
            >
              {dict.cta2[locale]}
              <ArrowIcon variant="light" className="ml-1 -mr-2" />
            </MagneticButton>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-12 flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="w-[1px] h-12 bg-cream/20 relative overflow-hidden">
            <motion.div
              className="w-full bg-cream absolute top-0"
              initial={{ height: '0%' }}
              animate={{ height: '100%' }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
            />
          </div>
          <span className="text-xs uppercase tracking-[0.3em] text-cream-muted">
            {dict.scroll[locale]}
          </span>
        </motion.div>
      </div>
    </section>
  );
}

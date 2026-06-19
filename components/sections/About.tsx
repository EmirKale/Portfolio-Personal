'use client';

import { profile } from '@/lib/data/profile';
import { useI18n } from '@/components/providers/I18nProvider';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import ArrowIcon from '@/components/ArrowIcon';

export default function About() {
  const { locale, dictionary } = useI18n();
  const dict = dictionary.about;
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={sectionRef} className="section-border py-24 md:py-32 bg-bg">
      <div className="max-w-container mx-auto px-6 md:px-10">
        {/* Section label */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-cream-muted">
            / {dict.title[locale]}
          </span>
        </motion.div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — Statement & Bio */}
          <div>
            <motion.h2
              className="text-display-lg font-display font-bold uppercase text-cream mb-8 leading-[0.95]"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {dict.statement[locale].split('\n').map((line, i) => (
                <span key={i} className="block">
                  {i === 1 ? <span className="text-cream-muted">{line}</span> : line}
                </span>
              ))}
            </motion.h2>

            <motion.p
              className="text-cream-muted text-base md:text-lg leading-relaxed mb-8 max-w-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {profile.bio[locale]}
            </motion.p>

            <motion.div
              className="flex items-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <a
                href="#contact"
                className="group flex items-center gap-2 px-6 py-3 bg-cream text-bg text-sm font-semibold uppercase tracking-[0.1em] rounded-full hover:bg-cream/90 transition-all duration-300 hover:scale-105"
              >
                {dict.cta[locale]}
                <ArrowIcon variant="dark" className="ml-1 -mr-2" />
              </a>
              <a
                href={profile.cv}
                download
                className="text-sm font-medium uppercase tracking-[0.15em] text-cream-muted hover:text-cream transition-colors link-underline"
              >
                {dictionary.contact.downloadCv[locale]} ↓
              </a>
            </motion.div>
          </div>

          {/* Right — Profile Image + Info Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {/* Profile image */}
            <div className="relative mb-8 overflow-hidden rounded-2xl border border-border-line">
              <Image
                src={profile.avatar}
                alt={profile.name}
                width={600}
                height={600}
                className="w-full object-cover aspect-[4/5]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent" />
            </div>

            {/* Info grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: dictionary.contact.location[locale], value: profile.location[locale], delay: 0 },
                { label: dictionary.contact.education[locale], value: profile.university[locale].split('—')[0].trim(), delay: 0.1 },
                { 
                  label: 'Email', 
                  value: profile.email,
                  isLink: true, 
                  href: `mailto:${profile.email}`, 
                  delay: 0.2 
                },
                { 
                  label: 'GitHub', 
                  value: '@emirkale', 
                  isLink: true, 
                  href: profile.github, 
                  target: "_blank", 
                  delay: 0.3 
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="border border-border-line rounded-xl p-4 bg-surface hover:bg-surface-hover transition-colors"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    repeatType: "reverse", 
                    ease: "easeInOut",
                    delay: item.delay
                  }}
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-cream-muted mb-1">
                    {item.label}
                  </p>
                  {item.isLink ? (
                    <a 
                      href={item.href} 
                      target={item.target}
                      rel={item.target ? "noopener noreferrer" : undefined}
                      className="text-cream text-sm font-medium hover:underline block"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-cream text-sm font-medium">{item.value}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

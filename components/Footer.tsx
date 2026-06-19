'use client';

import { useI18n } from '@/components/providers/I18nProvider';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const quickLinks = [
  { href: '#hero', key: 'home' },
  { href: '#about', key: 'about' },
  { href: '#projects', key: 'projects' },
  { href: '#skills', key: 'skills' },
  { href: '#contact', key: 'contact' },
];

export default function Footer() {
  const { locale, dictionary } = useI18n();
  const dict = dictionary.footer;
  const nav = dictionary.nav;
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, margin: '-50px' });

  return (
    <footer ref={footerRef} className="section-border py-16 md:py-20 bg-bg">
      <div className="max-w-container mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-display font-bold text-cream mb-4">
              Emir Kale<span className="text-cream-muted">.</span>
            </h3>
            <p className="text-cream-muted text-sm leading-relaxed max-w-xs">
              {dict.built[locale]}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h4 className="text-xs uppercase tracking-[0.2em] text-cream-muted mb-6">
              {dict.quickLinks[locale]}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-sm text-cream-dim hover:text-cream transition-colors duration-300 link-underline"
                  >
                    {(nav as any)[link.key][locale]}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h4 className="text-xs uppercase tracking-[0.2em] text-cream-muted mb-6">
              {dict.social[locale]}
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://github.com/emirkale"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-cream-dim hover:text-cream transition-colors duration-300 link-underline"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/emir-kale-7b8b4830b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-cream-dim hover:text-cream transition-colors duration-300 link-underline"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:emirkale03@gmail.com"
                  className="text-sm text-cream-dim hover:text-cream transition-colors duration-300 link-underline"
                >
                  emirkale03@gmail.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border-line pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream-muted">
            © {new Date().getFullYear()} Emir Kale. {dict.rights[locale]}
          </p>
          <p className="text-xs text-cream-muted">
            İstanbul, Türkiye
          </p>
        </div>
      </div>
    </footer>
  );
}
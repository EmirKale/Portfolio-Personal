'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useI18n } from '@/components/providers/I18nProvider';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '#hero', key: 'home' },
  { href: '#about', key: 'about' },
  { href: '#projects', key: 'projects' },
  { href: '#skills', key: 'skills' },
  { href: '#certificates', key: 'certificates' },
  { href: '#experience', key: 'experience' },
  { href: '#contact', key: 'contact' },
];

export default function Navbar() {
  const { locale, toggleLocale, dictionary } = useI18n();
  const dict = dictionary.nav;
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when menu open on mobile
  useEffect(() => {
    if (window.innerWidth < 768) {
      document.body.style.overflow = isOpen ? 'hidden' : '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-[380px]">
      <motion.div
        className="bg-cream text-bg overflow-hidden shadow-2xl border border-bg/10"
        animate={{
          borderRadius: isOpen ? 32 : 9999,
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        initial={false}
      >
        {/* Top bar (always visible) */}
        <div className="h-16 px-6 flex items-center justify-between">
          <Link 
            href="#hero" 
            className="font-display font-bold text-2xl tracking-tight hover:opacity-70 transition-opacity"
            onClick={() => setIsOpen(false)}
          >
            Emir.
          </Link>
          
          <div className="flex items-center gap-3">
            <button
              onClick={toggleLocale}
              className="text-xs font-bold uppercase tracking-widest text-bg/50 hover:text-bg transition-colors"
            >
              {locale === 'tr' ? 'EN' : 'TR'}
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 rounded-xl bg-bg text-cream flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 1L13 13M1 13L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              ) : (
                <div className="flex gap-[3px]">
                  <span className="w-1 h-1 rounded-full bg-cream" />
                  <span className="w-1 h-1 rounded-full bg-cream" />
                  <span className="w-1 h-1 rounded-full bg-cream" />
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Expanded content */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="px-6 pb-6 pt-2 flex flex-col items-start gap-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.key}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="inline-block px-5 py-2.5 rounded-full bg-bg/5 hover:bg-bg hover:text-cream text-bg font-medium text-sm transition-colors"
                    >
                      {(dict as any)[link.key][locale]}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  className="mt-4 pt-4 border-t border-bg/10 w-full flex items-center gap-4 text-xs font-medium text-bg/60"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <a href="https://github.com/emirkale" target="_blank" rel="noopener noreferrer" className="hover:text-bg transition-colors">
                    GitHub
                  </a>
                  <a href="https://www.linkedin.com/in/emirkale/" target="_blank" rel="noopener noreferrer" className="hover:text-bg transition-colors">
                    LinkedIn
                  </a>
                  <a href="https://www.instagram.com/lemirkl/" target="_blank" rel="noopener noreferrer" className="hover:text-bg transition-colors">
                    Instagram
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

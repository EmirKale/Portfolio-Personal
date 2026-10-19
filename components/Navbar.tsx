'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useI18n } from '@/components/providers/I18nProvider';

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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-[#090d16]/95 backdrop-blur-none font-mono">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* Sol: Sistem Kimliği */}
        <div className="flex items-center gap-3">
          <Link
            href="#hero"
            className="flex items-center gap-2 font-bold text-slate-100 hover:text-emerald-400 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" aria-hidden="true" />
            <span>emir_kale.sys</span>
          </Link>
          <span className="text-slate-600 text-xs hidden sm:inline" aria-hidden="true">/</span>
          <span className="text-xs text-slate-400 hidden sm:inline">.NET & AI Full-Stack</span>
        </div>

        {/* Masaüstü Navigasyon */}
        <nav className="hidden lg:flex items-center gap-5 text-xs text-slate-400" aria-label="Ana Navigasyon">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="hover:text-slate-100 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm px-1 py-0.5"
            >
              [{(dict as Record<string, Record<string, string>>)[link.key]?.[locale] || link.key}]
            </a>
          ))}
        </nav>

        {/* Sağ: Dil Değiştirici ve Mobil Menü Butonu */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleLocale}
            className="text-xs px-2.5 py-1 border border-slate-700 hover:border-emerald-400 text-slate-300 hover:text-emerald-400 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm"
            aria-label="Dili Değiştir"
          >
            {locale === 'tr' ? 'EN' : 'TR'}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-1.5 text-slate-400 hover:text-slate-200 focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm border border-slate-800"
            aria-label="Menüyü aç/kapat"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobil Açılır Menü */}
      {isOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-[#0d1424] px-4 py-4 space-y-2 text-xs">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-1.5 text-slate-300 hover:text-emerald-400 transition-colors"
            >
              [{(dict as Record<string, Record<string, string>>)[link.key]?.[locale] || link.key}]
            </a>
          ))}
          <div className="pt-3 border-t border-slate-800 flex items-center gap-4 text-slate-400">
            <a href="https://github.com/emirkale" target="_blank" rel="noopener noreferrer" className="hover:text-slate-200">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/emirkale/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-200">LinkedIn ↗</a>
          </div>
        </div>
      )}
    </header>
  );
}

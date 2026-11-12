'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useI18n } from '@/components/providers/I18nProvider';

const navLinks = [
  { href: '#readme', key: 'home' },
  { href: '#projects', key: 'projects' },
  { href: '#archive', key: 'about' },
  { href: '#skills', key: 'skills' },
  { href: '#certificates', key: 'certificates' },
  { href: '#experience', key: 'experience' },
  { href: '#contact', key: 'contact' },
];

export default function Navbar() {
  const { locale, toggleLocale, dictionary } = useI18n();
  const dict = dictionary?.nav;
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString(locale === 'tr' ? 'tr-TR' : 'en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        })
      );
    };
    update();
    const interval = setInterval(update, 10000);
    return () => clearInterval(interval);
  }, [locale]);

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-black bg-white font-mono text-xs select-none">
      <div className="max-w-7xl mx-auto px-3 h-9 flex items-center justify-between">
        {/* Sol: Menü Çubuğu (Apple / System Bar) */}
        <div className="flex items-center gap-4">
          <Link
            href="#readme"
            className="flex items-center gap-1.5 font-bold text-black hover:bg-black hover:text-white px-2 py-0.5 transition-none"
          >
            {/* Retro Apple/Computer Symbol */}
            <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor">
              <path d="M2 2h12v10H2V2zm1 1v8h10V3H3zm-3 11h16v1H0v-1z" />
            </svg>
            <span className="tracking-tight font-black">EMIR_OS</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1 text-black" aria-label="Desktop Menu">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="px-2 py-0.5 font-medium hover:bg-black hover:text-white transition-none"
              >
                {(dict as Record<string, Record<string, string>>)[link.key]?.[locale] || link.key}
              </a>
            ))}
          </nav>
        </div>

        {/* Sağ: Durum / Saat / Dil Değiştirici */}
        <div className="flex items-center gap-3 font-mono">
          <button
            onClick={toggleLocale}
            className="border border-black px-2 py-0.5 font-bold hover:bg-black hover:text-white transition-none"
            aria-label="Switch Language"
          >
            [{locale === 'tr' ? 'EN' : 'TR'}]
          </button>

          <span className="hidden sm:inline border-l border-black pl-3 text-black">
            MEM: 640K FREE
          </span>

          <span className="border-l border-black pl-3 font-bold text-black tabular-nums min-w-[70px] inline-block text-right">
            {time || '09:41 AM'}
          </span>
        </div>
      </div>
    </header>
  );
}

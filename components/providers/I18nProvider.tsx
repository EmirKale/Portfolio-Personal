'use client';
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Locale } from '@/lib/data/projects';
import { Dictionary } from '@/lib/i18n/dictionary';
import defaultDict from '@/data/dictionary.json';

interface I18nContextProps {
  locale: Locale;
  toggleLocale: () => void;
  dictionary: Dictionary;
}

const I18nContext = createContext<I18nContextProps | undefined>(undefined);

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
};

export default function I18nProvider({ children, initialDictionary }: { children: ReactNode, initialDictionary?: Dictionary }) {
  const [locale, setLocale] = useState<Locale>('tr');
  const dict = initialDictionary || (defaultDict as unknown as Dictionary);

  // Persist choice in localStorage after mounting (hydration-safe)
  useEffect(() => {
    try {
      const stored = localStorage.getItem('locale') as Locale | null;
      if (stored === 'tr' || stored === 'en') setLocale(stored);
    } catch {
      // localStorage may fail in private mode
    }
  }, []);

  const toggleLocale = () => {
    setLocale(prev => {
      const next = prev === 'tr' ? 'en' : 'tr';
      try {
        localStorage.setItem('locale', next);
      } catch {}
      return next;
    });
  };

  return (
    <I18nContext.Provider value={{ locale, toggleLocale, dictionary: dict }}>
      {children}
    </I18nContext.Provider>
  );
}

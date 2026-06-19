'use client';
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Locale } from '@/lib/data/projects';
import { Dictionary } from '@/lib/i18n/dictionary';

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

export default function I18nProvider({ children, initialDictionary }: { children: ReactNode, initialDictionary: Dictionary }) {
  const [locale, setLocale] = useState<Locale>('tr');

  // Persist choice in localStorage
  useEffect(() => {
    const stored = localStorage.getItem('locale') as Locale | null;
    if (stored) setLocale(stored);
  }, []);

  const toggleLocale = () => {
    setLocale(prev => {
      const next = prev === 'tr' ? 'en' : 'tr';
      localStorage.setItem('locale', next);
      return next;
    });
  };

  return (
    <I18nContext.Provider value={{ locale, toggleLocale, dictionary: initialDictionary }}>
      {children}
    </I18nContext.Provider>
  );
}

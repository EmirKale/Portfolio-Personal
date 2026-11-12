import './globals.css';
import type { Metadata } from 'next';
import { JetBrains_Mono, Space_Grotesk } from 'next/font/google';
import I18nProvider from '@/components/providers/I18nProvider';
import { getDictionary } from '@/app/actions/settings';

const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });
const display = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' });

export const metadata: Metadata = {
  title: 'Emir Kale — Software Engineer & AI Developer',
  description: 'AI-powered .NET & Full-Stack developer portfolio. Building scalable web applications with cutting-edge technology.',
  openGraph: {
    title: 'Emir Kale — Software Engineer',
    description: 'AI-powered .NET & Full-Stack developer portfolio',
    images: ['/profile.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emir Kale — Software Engineer',
    description: 'AI-powered .NET & Full-Stack developer portfolio',
    images: ['/profile.png'],
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const dictionary = await getDictionary();

  return (
    <html lang="en" className={`${mono.variable} ${display.variable}`} suppressHydrationWarning>
      <body className="bg-[#c3c7cb] text-[#000000] font-mono antialiased selection:bg-[#000000] selection:text-[#ffffff]">
        <I18nProvider initialDictionary={dictionary}>
          <div className="min-h-screen flex flex-col">{children}</div>
        </I18nProvider>
      </body>
    </html>
  );
}

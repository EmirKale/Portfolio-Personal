import './globals.css';
import type { Metadata } from 'next';
import { Inter, Sora } from 'next/font/google';
import ClientLenisWrapper from '@/components/providers/ClientLenisWrapper';
import I18nProvider from '@/components/providers/I18nProvider';
import CustomCursor from '@/components/CustomCursor';
import { getDictionary } from '@/app/actions/settings';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const sora = Sora({ subsets: ['latin'], weight: ['400', '600', '700'], variable: '--font-sora' });

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
    <html lang="en" className={`${inter.variable} ${sora.variable}`} suppressHydrationWarning>
      <body className="bg-bg text-cream font-sans antialiased">
        <ClientLenisWrapper>
          <I18nProvider initialDictionary={dictionary}>
            <CustomCursor />
            <main>{children}</main>
          </I18nProvider>
        </ClientLenisWrapper>
      </body>
    </html>
  );
}

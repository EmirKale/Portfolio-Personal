'use client';

import LenisProvider from './LenisProvider';

export default function ClientLenisWrapper({ children }: { children: React.ReactNode }) {
  return <LenisProvider>{children}</LenisProvider>;
}

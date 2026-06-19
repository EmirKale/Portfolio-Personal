'use client';

import { techMarquee } from '@/lib/data/techStack';

export default function Marquee() {
  const items = [...techMarquee, ...techMarquee];

  return (
    <div className="w-full overflow-hidden border-y border-border-line py-5 bg-bg">
      <div className="marquee-track">
        {items.map((item, i) => (
          <span
            key={i}
            className="flex items-center whitespace-nowrap px-8 text-sm md:text-base font-medium uppercase tracking-[0.2em] text-cream-muted"
          >
            {item}
            <span className="ml-8 inline-block w-1.5 h-1.5 rounded-full bg-cream-muted opacity-50" />
          </span>
        ))}
      </div>
    </div>
  );
}

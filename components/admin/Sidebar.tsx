'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const menuItems = [
  { name: 'Dashboard', path: '/admin', icon: 'M3 3h7v7H3z M14 3h7v7h-7z M14 14h7v7h-7z M3 14h7v7H3z' },
  { name: 'Projeler', path: '/admin/projects', icon: 'M2 12h4l2-9 4 18 2-9h4' },
  { name: 'CV & Insights', path: '/admin/cv', icon: 'M12 20h9 M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z' },
  { name: 'Ayarlar', path: '/admin/settings', icon: 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z' },
  { name: 'Siteye Dön', path: '/', icon: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M9 22V12h6v10' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <motion.aside 
      initial={{ x: -250 }}
      animate={{ x: 0 }}
      className="w-64 h-screen border-r border-cream/5 bg-bg/60 backdrop-blur-3xl flex flex-col p-6 fixed left-0 top-0 z-40"
    >
      <div className="mb-10 flex items-center gap-3 group cursor-pointer">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cream to-cream-dim text-bg flex items-center justify-center font-bold text-xl shadow-[0_0_20px_rgba(255,255,255,0.2)] group-hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all duration-500">
          E.
        </div>
        <span className="font-display font-bold text-lg text-cream tracking-wide group-hover:text-white transition-colors">Admin</span>
      </div>

      <nav className="flex-1 flex flex-col gap-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.path || (item.path !== '/admin' && item.path !== '/' && pathname.startsWith(item.path));
          return (
            <Link key={item.path} href={item.path}>
              <div className={`relative flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 overflow-hidden group ${isActive ? 'bg-cream/10 text-cream border border-cream/10' : 'text-cream-muted hover:bg-white/5 hover:text-cream border border-transparent'}`}>
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-cream/5 to-transparent pointer-events-none" />
                )}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10">
                  <path d={item.icon} />
                </svg>
                <span className="font-medium text-sm relative z-10">{item.name}</span>
                {isActive && (
                  <motion.div 
                    layoutId="active-indicator" 
                    className="absolute left-0 w-1 h-8 bg-cream rounded-r-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                  />
                )}
              </div>
            </Link>
          );
        })}
      </nav>

      <div className="pt-6 border-t border-cream/5 mt-auto">
        <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-surface/30 border border-cream/5 hover:border-cream/20 transition-colors cursor-pointer group">
          <div className="w-8 h-8 rounded-full bg-cream/10 flex items-center justify-center group-hover:bg-cream/20 transition-colors">
            <span className="text-xs text-cream">EK</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-cream group-hover:text-white transition-colors">Emir Kale</span>
            <span className="text-[10px] text-cream-muted">Developer</span>
          </div>
        </div>
      </div>
    </motion.aside>
  );
}

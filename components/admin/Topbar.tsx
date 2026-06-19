'use client';

import { motion } from 'framer-motion';

export default function Topbar() {
  return (
    <motion.header 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="h-20 border-b border-cream/5 bg-bg/40 backdrop-blur-2xl flex items-center justify-between px-8 sticky top-0 z-30 ml-64 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
    >
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-display font-bold text-cream">Yönetim Paneli</h1>
        <span className="px-3 py-1 bg-cream/10 text-cream text-xs font-bold uppercase tracking-wider rounded-full border border-cream/20 shadow-[0_0_10px_rgba(255,255,255,0.05)]">
          Dev Mode
        </span>
      </div>

      <div className="flex items-center gap-4">
        {/* Search Bar */}
        <div className="relative hidden md:block group">
          <input 
            type="text" 
            placeholder="Projelerde veya CV'de ara..." 
            className="w-64 bg-surface/30 border border-cream/5 rounded-full py-2 px-4 pl-10 text-sm text-cream placeholder-cream-muted focus:outline-none focus:border-cream/30 focus:bg-surface/50 transition-all duration-300"
          />
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-cream-muted group-focus-within:text-cream transition-colors duration-300" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
        </div>
        
        {/* Notifications */}
        <button className="w-10 h-10 rounded-full border border-cream/10 bg-surface/30 hover:bg-surface/60 hover:border-cream/30 flex items-center justify-center relative transition-all duration-300">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cream">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
          <span className="absolute top-2 right-2 w-2 h-2 bg-cream rounded-full animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
        </button>
      </div>
    </motion.header>
  );
}

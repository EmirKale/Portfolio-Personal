'use client';

import { motion } from 'framer-motion';

export default function CVInsightsPage() {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h2 className="text-3xl font-display font-bold text-cream mb-2">CV ve Kariyer Tavsiyeleri</h2>
        <p className="text-cream-muted">Özgeçmişini AI ile analiz et ve sektöre uygun öneriler al.</p>
      </motion.div>

      <div className="space-y-6">
        {/* Upload/Current CV Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-surface border border-border-line rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-cream/5 flex items-center justify-center border border-cream/10 text-cream">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-cream mb-1">Mevcut Özgeçmiş</h3>
              <p className="text-sm text-cream-muted">CV.pdf (Son Güncelleme: Dün)</p>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-cream border border-border-line rounded-full hover:bg-surface-hover">
              İndir
            </button>
            <button className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider bg-cream text-bg rounded-full hover:bg-cream/90">
              Yeni Yükle
            </button>
          </div>
        </motion.div>

        {/* AI Analysis Button */}
        <motion.button 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="w-full py-6 rounded-3xl border-2 border-dashed border-cream/20 hover:border-cream/50 bg-surface/30 hover:bg-surface/50 transition-colors flex flex-col items-center justify-center gap-3 text-cream group"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:scale-110 transition-transform duration-500">
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
          <span className="font-bold uppercase tracking-widest">Yapay Zeka ile Analiz Et</span>
          <span className="text-xs text-cream-muted font-normal lowercase tracking-normal">Gelişmiş geri bildirimler almak için çalıştırın.</span>
        </motion.button>
      </div>
    </div>
  );
}

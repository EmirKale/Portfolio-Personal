'use client';

import { motion } from 'framer-motion';

export default function AdminDashboard() {
  return (
    <div className="max-w-6xl mx-auto py-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h2 className="text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-cream to-cream-muted mb-2">Hoş Geldin, Emir!</h2>
        <p className="text-cream-muted">İşte portfolyonun bugünkü özeti ve kariyer içgörülerin.</p>
      </motion.div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Stats Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="col-span-1 md:col-span-2 bg-surface/30 border border-cream/5 rounded-[2rem] p-8 relative overflow-hidden group hover:border-cream/20 transition-all duration-500 backdrop-blur-xl"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-cream/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 group-hover:bg-cream/10 transition-colors duration-700 pointer-events-none" />
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-cream-muted mb-8 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cream animate-pulse" />
            Genel Bakış
          </h3>
          
          <div className="grid grid-cols-3 gap-6 relative z-10">
            <div className="space-y-3">
              <span className="text-5xl font-display font-bold text-cream drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">12</span>
              <p className="text-[10px] text-cream-muted uppercase tracking-[0.2em]">Aktif Proje</p>
            </div>
            <div className="space-y-3">
              <span className="text-5xl font-display font-bold text-cream drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">8</span>
              <p className="text-[10px] text-cream-muted uppercase tracking-[0.2em]">Yetenek Etiketi</p>
            </div>
            <div className="space-y-3">
              <span className="text-5xl font-display font-bold text-cream drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">2</span>
              <p className="text-[10px] text-cream-muted uppercase tracking-[0.2em]">Yeni Mesaj</p>
            </div>
          </div>
        </motion.div>

        {/* CV Score Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="col-span-1 bg-gradient-to-br from-surface/40 to-surface/10 border border-cream/5 rounded-[2rem] p-8 flex flex-col justify-between hover:border-cream/20 transition-all duration-500 backdrop-blur-xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-cream/5 via-transparent to-transparent opacity-50" />
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-cream-muted mb-4 relative z-10">CV Sağlığı</h3>
          <div className="flex items-end gap-2 mb-6 relative z-10">
            <span className="text-6xl font-display font-bold text-cream">85</span>
            <span className="text-sm text-cream-muted mb-2 font-medium">/ 100</span>
          </div>
          <div className="w-full bg-black/40 rounded-full h-2 mb-6 relative z-10 overflow-hidden">
            <div className="bg-gradient-to-r from-cream-muted to-cream h-2 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" style={{ width: '85%' }} />
          </div>
          <p className="text-xs text-cream-muted leading-relaxed relative z-10">
            Profili biraz daha yapay zeka araçlarıyla zenginleştirirsen mükemmel olacak.
          </p>
        </motion.div>

        {/* AI Insights (Gemini) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="col-span-1 md:col-span-3 bg-gradient-to-br from-surface/60 to-bg/80 border border-cream/10 rounded-[2rem] p-10 relative overflow-hidden backdrop-blur-xl hover:border-cream/20 transition-all duration-500 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
        >
          <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none transform rotate-12 scale-150">
            <svg width="160" height="160" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          
          <div className="flex items-center gap-4 mb-8 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cream to-cream-dim text-bg flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <h3 className="text-2xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-cream to-cream-dim">Gemini Kariyer Tavsiyesi</h3>
          </div>

          <div className="space-y-4 relative z-10">
            <div className="p-6 bg-black/20 rounded-2xl border border-cream/5 hover:bg-black/30 transition-colors duration-300">
              <p className="text-sm text-cream-muted leading-relaxed">
                <strong className="text-cream mr-2">Insight 1:</strong> ".NET Core" ve "AI Entegrasyonu" anahtar kelimeleri sektörde çok popüler. "Yummy Restaurant System" projendeki OpenAI entegrasyonunu CV'nde biraz daha öne çıkarmanı tavsiye ederim.
              </p>
            </div>
            <div className="p-6 bg-black/20 rounded-2xl border border-cream/5 hover:bg-black/30 transition-colors duration-300">
              <p className="text-sm text-cream-muted leading-relaxed">
                <strong className="text-cream mr-2">Insight 2:</strong> ViCareerAI projesi harika bir SaaS örneği. Ancak "Eğitim" kısmında "İleri Düzey Mühendislik" ifadesini kaldırdığını fark ettim, bu yerine "Full Stack Development & AI Solutions" gibi daha spesifik bir hedef ekleyebilirsin.
              </p>
            </div>
          </div>
          
          <button className="mt-8 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest text-cream transition-all duration-300 flex items-center gap-3 group relative z-10">
            Yeni Analiz İste 
            <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </motion.div>

      </div>
    </div>
  );
}

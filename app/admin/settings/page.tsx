'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useI18n } from '@/components/providers/I18nProvider';
import { updateDictionary } from '@/app/actions/settings';
import { Dictionary } from '@/lib/i18n/dictionary';

export default function SettingsPage() {
  const { dictionary } = useI18n();
  const [formData, setFormData] = useState<Dictionary>(JSON.parse(JSON.stringify(dictionary)));
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleHeroChange = (field: keyof Dictionary['hero'], locale: 'tr' | 'en', value: string) => {
    setFormData(prev => ({
      ...prev,
      hero: {
        ...prev.hero,
        [field]: {
          ...prev.hero[field],
          [locale]: value
        }
      }
    }));
  };

  const handleSave = async () => {
    setIsSaving(true);
    setSaveStatus('idle');
    const result = await updateDictionary(formData);
    if (result.success) {
      setSaveStatus('success');
      // Briefly show success before resetting
      setTimeout(() => setSaveStatus('idle'), 3000);
    } else {
      setSaveStatus('error');
    }
    setIsSaving(false);
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 flex items-center justify-between"
      >
        <div>
          <h2 className="text-3xl font-display font-bold text-cream mb-2">Site Ayarları</h2>
          <p className="text-cream-muted">Sitedeki başlıkları ve açıklamaları buradan yönetebilirsiniz.</p>
        </div>
        <button
          onClick={handleSave}
          disabled={isSaving}
          className={`px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300 ${
            isSaving ? 'bg-surface-hover text-cream-muted' : 
            saveStatus === 'success' ? 'bg-green-500/20 text-green-400 border border-green-500/50' :
            saveStatus === 'error' ? 'bg-red-500/20 text-red-400 border border-red-500/50' :
            'bg-cream text-bg hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]'
          }`}
        >
          {isSaving ? 'Kaydediliyor...' : 
           saveStatus === 'success' ? 'Kaydedildi!' : 
           saveStatus === 'error' ? 'Hata Oluştu' : 'Değişiklikleri Kaydet'}
        </button>
      </motion.div>

      <div className="space-y-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-surface/30 border border-cream/5 rounded-[2rem] p-8 backdrop-blur-xl"
        >
          <h3 className="text-xl font-display font-bold text-cream mb-6">Hero Bölümü</h3>
          
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-cream-muted">Rol (Türkçe)</label>
                <textarea 
                  value={formData.hero.role.tr}
                  onChange={(e) => handleHeroChange('role', 'tr', e.target.value)}
                  className="w-full bg-black/20 border border-cream/10 rounded-xl p-4 text-cream focus:outline-none focus:border-cream/30 min-h-[100px]"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-cream-muted">Role (English)</label>
                <textarea 
                  value={formData.hero.role.en}
                  onChange={(e) => handleHeroChange('role', 'en', e.target.value)}
                  className="w-full bg-black/20 border border-cream/10 rounded-xl p-4 text-cream focus:outline-none focus:border-cream/30 min-h-[100px]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-cream-muted">Alt Başlık (Türkçe)</label>
                <input 
                  type="text"
                  value={formData.hero.subtitle.tr}
                  onChange={(e) => handleHeroChange('subtitle', 'tr', e.target.value)}
                  className="w-full bg-black/20 border border-cream/10 rounded-xl p-4 text-cream focus:outline-none focus:border-cream/30"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-cream-muted">Subtitle (English)</label>
                <input 
                  type="text"
                  value={formData.hero.subtitle.en}
                  onChange={(e) => handleHeroChange('subtitle', 'en', e.target.value)}
                  className="w-full bg-black/20 border border-cream/10 rounded-xl p-4 text-cream focus:outline-none focus:border-cream/30"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-cream-muted">Açıklama (Türkçe)</label>
                <textarea 
                  value={formData.hero.tagline.tr}
                  onChange={(e) => handleHeroChange('tagline', 'tr', e.target.value)}
                  className="w-full bg-black/20 border border-cream/10 rounded-xl p-4 text-cream focus:outline-none focus:border-cream/30 min-h-[80px]"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-cream-muted">Tagline (English)</label>
                <textarea 
                  value={formData.hero.tagline.en}
                  onChange={(e) => handleHeroChange('tagline', 'en', e.target.value)}
                  className="w-full bg-black/20 border border-cream/10 rounded-xl p-4 text-cream focus:outline-none focus:border-cream/30 min-h-[80px]"
                />
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* We can add other sections (About, Projects) similarly here */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-surface/30 border border-cream/5 rounded-[2rem] p-8 backdrop-blur-xl"
        >
          <div className="text-center py-8">
            <h3 className="text-xl font-display font-bold text-cream mb-2">Daha fazla ayar yakında</h3>
            <p className="text-cream-muted text-sm">Hakkımda, projeler ve iletişim bölümlerinin ayarları yakında eklenecek.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

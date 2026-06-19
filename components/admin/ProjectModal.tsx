'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '@/lib/data/projects';
import { createProjectAction, updateProjectAction } from '@/app/actions/projects';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project?: Project | null;
}

const emptyProject: Project = {
  id: '',
  title: '',
  category: { tr: '', en: '' },
  tags: [],
  description: { tr: '', en: '' },
  longDescription: { tr: '', en: '' },
  tech: [],
  cover: '',
  gallery: [],
  links: { github: '', demo: '' },
  problem: { tr: '', en: '' },
  solution: { tr: '', en: '' },
  results: []
};

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  const [formData, setFormData] = useState<Project>(emptyProject);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (project) {
      setFormData(project);
    } else {
      setFormData(emptyProject);
    }
    setError('');
  }, [project, isOpen]);

  const handleChange = (field: string, value: any) => {
    setFormData(prev => {
      const keys = field.split('.');
      if (keys.length === 1) return { ...prev, [field]: value };
      return {
        ...prev,
        [keys[0]]: {
          ...(prev[keys[0] as keyof Project] as any),
          [keys[1]]: value
        }
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Ensure ID format
    const formattedData = { ...formData, id: formData.id.toLowerCase().replace(/\s+/g, '-') };

    let res;
    if (project) {
      res = await updateProjectAction(formattedData);
    } else {
      res = await createProjectAction(formattedData);
    }

    setIsSubmitting(false);

    if (res?.success) {
      onClose();
    } else {
      setError(res?.error || 'Bir hata oluştu.');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-bg/80 backdrop-blur-sm"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-3xl bg-surface border border-border-line rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
          >
            <div className="p-6 border-b border-border-line flex justify-between items-center bg-surface/50">
              <h3 className="text-xl font-display font-bold text-cream">
                {project ? 'Projeyi Düzenle' : 'Yeni Proje Ekle'}
              </h3>
              <button onClick={onClose} className="p-2 text-cream-muted hover:text-cream rounded-full hover:bg-bg transition-colors">
                ✕
              </button>
            </div>

            <div className="p-6 overflow-y-auto flex-1 custom-scrollbar">
              {error && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
                  {error}
                </div>
              )}

              <form id="projectForm" onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-[0.2em] text-cream-muted mb-2">Proje ID</label>
                    <input 
                      required
                      disabled={!!project}
                      value={formData.id}
                      onChange={e => handleChange('id', e.target.value)}
                      className="w-full bg-bg border border-border-line rounded-xl py-3 px-4 text-cream focus:border-cream/50 outline-none disabled:opacity-50" 
                      placeholder="orn-proje"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-[0.2em] text-cream-muted mb-2">Başlık</label>
                    <input 
                      required
                      value={formData.title}
                      onChange={e => handleChange('title', e.target.value)}
                      className="w-full bg-bg border border-border-line rounded-xl py-3 px-4 text-cream focus:border-cream/50 outline-none" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-[0.2em] text-cream-muted mb-2">Kategori (TR)</label>
                    <input 
                      required
                      value={formData.category.tr}
                      onChange={e => handleChange('category.tr', e.target.value)}
                      className="w-full bg-bg border border-border-line rounded-xl py-3 px-4 text-cream focus:border-cream/50 outline-none" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-[0.2em] text-cream-muted mb-2">Kategori (EN)</label>
                    <input 
                      required
                      value={formData.category.en}
                      onChange={e => handleChange('category.en', e.target.value)}
                      className="w-full bg-bg border border-border-line rounded-xl py-3 px-4 text-cream focus:border-cream/50 outline-none" 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] text-cream-muted mb-2">Kapak Resmi Yolu (Cover)</label>
                  <input 
                    required
                    value={formData.cover}
                    onChange={e => handleChange('cover', e.target.value)}
                    className="w-full bg-bg border border-border-line rounded-xl py-3 px-4 text-cream focus:border-cream/50 outline-none" 
                    placeholder="/Resimler/ornek.png"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] text-cream-muted mb-2">Kısa Açıklama (TR)</label>
                  <textarea 
                    required
                    rows={2}
                    value={formData.description.tr}
                    onChange={e => handleChange('description.tr', e.target.value)}
                    className="w-full bg-bg border border-border-line rounded-xl py-3 px-4 text-cream focus:border-cream/50 outline-none resize-none" 
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] text-cream-muted mb-2">Kısa Açıklama (EN)</label>
                  <textarea 
                    required
                    rows={2}
                    value={formData.description.en}
                    onChange={e => handleChange('description.en', e.target.value)}
                    className="w-full bg-bg border border-border-line rounded-xl py-3 px-4 text-cream focus:border-cream/50 outline-none resize-none" 
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] text-cream-muted mb-2">Teknolojiler (Virgülle ayırın)</label>
                  <input 
                    required
                    value={formData.tech.join(', ')}
                    onChange={e => handleChange('tech', e.target.value.split(',').map(t => t.trim()).filter(Boolean))}
                    className="w-full bg-bg border border-border-line rounded-xl py-3 px-4 text-cream focus:border-cream/50 outline-none" 
                    placeholder="React, Next.js, Tailwind..."
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-[0.2em] text-cream-muted mb-2">GitHub Linki</label>
                    <input 
                      value={formData.links.github || ''}
                      onChange={e => handleChange('links.github', e.target.value)}
                      className="w-full bg-bg border border-border-line rounded-xl py-3 px-4 text-cream focus:border-cream/50 outline-none" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-[0.2em] text-cream-muted mb-2">Demo Linki</label>
                    <input 
                      value={formData.links.demo || ''}
                      onChange={e => handleChange('links.demo', e.target.value)}
                      className="w-full bg-bg border border-border-line rounded-xl py-3 px-4 text-cream focus:border-cream/50 outline-none" 
                    />
                  </div>
                </div>

              </form>
            </div>

            <div className="p-6 border-t border-border-line bg-surface/50 flex justify-end gap-4">
              <button 
                type="button" 
                onClick={onClose}
                className="px-6 py-3 rounded-full text-sm font-bold text-cream hover:bg-bg border border-transparent hover:border-border-line transition-colors"
              >
                İptal
              </button>
              <button 
                type="submit"
                form="projectForm"
                disabled={isSubmitting}
                className="px-6 py-3 rounded-full text-sm font-bold bg-cream text-bg hover:bg-cream/90 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'Kaydediliyor...' : 'Kaydet'}
              </button>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

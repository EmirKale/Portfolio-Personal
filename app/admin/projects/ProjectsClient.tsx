'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/lib/data/projects';
import Image from 'next/image';
import ProjectModal from '@/components/admin/ProjectModal';
import { deleteProjectAction } from '@/app/actions/projects';

export default function ProjectsClient({ initialProjects }: { initialProjects: Project[] }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = initialProjects.filter(p => p.title.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleEdit = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCreate = () => {
    setSelectedProject(null);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Bu projeyi silmek istediğinize emin misiniz?')) {
      await deleteProjectAction(id);
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-8">
      <div className="flex items-end justify-between mb-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-3xl font-display font-bold text-cream mb-2">Projeler</h2>
          <p className="text-cream-muted">Portfolyondaki tüm projeleri buradan yönet.</p>
        </motion.div>
        
        <motion.button 
          onClick={handleCreate}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="px-6 py-3 bg-cream text-bg text-sm font-semibold uppercase tracking-[0.1em] rounded-full hover:bg-cream/90 transition-colors"
        >
          + Yeni Proje Ekle
        </motion.button>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-surface border border-border-line rounded-3xl overflow-hidden"
      >
        <div className="p-6 border-b border-border-line flex items-center justify-between bg-surface/50">
          <input 
            type="text" 
            placeholder="Proje ara..." 
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-64 bg-bg border border-border-line rounded-full py-2 px-4 text-sm text-cream placeholder-cream-muted focus:outline-none focus:border-cream/50 transition-colors"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border-line text-xs uppercase tracking-widest text-cream-muted bg-surface/30">
                <th className="p-4 font-medium pl-6">Proje</th>
                <th className="p-4 font-medium">Kategori</th>
                <th className="p-4 font-medium">Teknolojiler</th>
                <th className="p-4 font-medium text-right pr-6">İşlemler</th>
              </tr>
            </thead>
            <tbody>
              {filteredProjects.map((proj) => (
                <tr key={proj.id} className="border-b border-border-line/50 hover:bg-surface-hover transition-colors group">
                  <td className="p-4 pl-6">
                    <div className="flex items-center gap-4">
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-border-line">
                        <Image src={proj.cover} alt={proj.title} fill className="object-cover" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-cream">{proj.title}</p>
                        <p className="text-xs text-cream-muted line-clamp-1 max-w-xs">{proj.description.tr}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="px-3 py-1 bg-cream/10 text-cream text-[10px] font-bold uppercase tracking-widest rounded-full border border-cream/20">
                      {proj.category.tr}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex flex-wrap gap-1 max-w-[200px]">
                      {proj.tech.slice(0, 3).map((t, i) => (
                        <span key={i} className="text-[10px] text-cream-muted border border-border-line rounded px-1.5 py-0.5">
                          {t}
                        </span>
                      ))}
                      {proj.tech.length > 3 && <span className="text-[10px] text-cream-muted">+{proj.tech.length - 3}</span>}
                    </div>
                  </td>
                  <td className="p-4 pr-6 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button onClick={() => handleEdit(proj)} className="p-2 text-cream-muted hover:text-cream bg-bg rounded-lg border border-border-line">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
                        </svg>
                      </button>
                      <button onClick={() => handleDelete(proj.id)} className="p-2 text-red-400 hover:text-red-300 bg-bg rounded-lg border border-border-line">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"></path>
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="p-12 text-center text-cream-muted">
            <p>Arama kriterlerine uygun proje bulunamadı.</p>
          </div>
        )}
      </motion.div>

      <ProjectModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        project={selectedProject} 
      />
    </div>
  );
}

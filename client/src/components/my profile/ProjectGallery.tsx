// components/profile/ProjectGallery.tsx
'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { fadeUp, staggerContainerProfile } from '@/utils/animations';
import { ProjectItem } from '@/types';

type FilterType = 'All' | 'Residential' | 'Commercial' | 'Interior' | 'Landscape' | 'Thesis';
const filterCategories: FilterType[] = ['All', 'Residential', 'Commercial', 'Interior', 'Landscape', 'Thesis'];

export default function ProjectGallery({ initialProjects }: { initialProjects: ProjectItem[] }) {
  const [activeTab, setActiveTab] = useState<FilterType>('All');

  const filteredProjects = initialProjects.filter(p => 
    activeTab === 'All' ? true : p.category === activeTab
  );

  return (
    <div className="space-y-6">
      {/* Category Tab Selector Rail */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-2 overflow-x-auto scrollbar-none">
        <div className="flex gap-1.5 shrink-0">
          {filterCategories.map((tab) => {
            const isSelected = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-xs font-semibold px-4 py-2 rounded-xl transition-all relative ${
                  isSelected ? 'text-blue-600' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {isSelected && (
                  <motion.span layoutId="galleryIndicator" className="absolute inset-0 bg-blue-50 border border-blue-100 rounded-xl -z-0" />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Production Project Grid Execution */}
      <motion.div variants={staggerContainerProfile} initial="initial" whileInView="animate" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12 border border-dashed border-slate-200 rounded-2xl bg-slate-50/50">
          <p className="text-xs font-medium text-slate-400">No layout metrics found for this structural branch.</p>
        </div>
      )}
    </div>
  );
}
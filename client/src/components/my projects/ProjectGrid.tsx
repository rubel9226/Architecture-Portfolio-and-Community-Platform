// components/projects/ProjectGrid.tsx
'use client';
import { motion, AnimatePresence } from 'framer-motion'; 
import { containerStaggerMyProject } from '@/utils/animations';
import { useProjects } from '@/hooks/MyProjectsContext';
import EmptyState from './EmptyState';
import ProjectTable from './ProjectTable';
import ProjectCard from './ProjectCard';

export default function ProjectGrid() {
  const { projects, viewMode } = useProjects();

  if (projects.length === 0) return <EmptyState />;

  if (viewMode === 'table') return <ProjectTable />;

  return (
    <motion.div 
      variants={containerStaggerMyProject}
      initial="initial"
      animate="animate"
      className={
        viewMode === 'grid' 
          ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' 
          : 'flex flex-col gap-4'
      }
    >
      <AnimatePresence mode="popLayout">
        {projects.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            layoutMode={viewMode} 
          />
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
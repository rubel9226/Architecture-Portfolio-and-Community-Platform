// components/profile/ProjectCard.tsx
'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Eye, Heart, MapPin, Calendar } from 'lucide-react';
import { ProjectItem } from '@/types';

export default function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-3xs hover:shadow-xs transition-all duration-300 flex flex-col h-full"
    >
      {/* Visual Anchor Frame */}
      <div className="relative aspect-video w-full bg-slate-100 overflow-hidden shrink-0">
        <Image 
          src={project.image} 
          alt={project.title} 
          fill 
          sizes="(max-w-7xl) 33vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-104" 
        />
        <div className="absolute top-3 left-3 bg-white/80 backdrop-blur-md border border-slate-150 px-2 py-0.5 rounded-md text-[9px] font-bold text-slate-800 uppercase tracking-wide">
          {project.category}
        </div>
      </div>

      {/* Narrative Metadata block */}
      <div className="p-4 flex flex-col justify-between flex-1 space-y-3">
        <div className="space-y-1">
          <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight line-clamp-1">{project.title}</h4>
          <div className="flex items-center justify-between text-[11px] text-slate-400 font-medium">
            <span className="flex items-center gap-0.5"><MapPin size={11} /> {project.location}</span>
            <span className="flex items-center gap-0.5"><Calendar size={11} /> {project.year}</span>
          </div>
        </div>

        {/* Dynamic Tool Tags map */}
        <div className="flex flex-wrap gap-1">
          {project.software.map((sw, i) => (
            <span key={i} className="text-[9px] font-medium bg-slate-50 text-slate-500 px-1.5 py-0.5 rounded border border-slate-100">
              {sw}
            </span>
          ))}
        </div>

        {/* Analytics Summary */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-[11px] text-slate-400 font-semibold">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1"><Eye size={13} /> {project.views}</span>
            <span className="flex items-center gap-1"><Heart size={13} /> {project.likes}</span>
          </div>
          <button className="text-blue-600 hover:underline font-bold text-[10px] uppercase tracking-wide">Explore Deck</button>
        </div>
      </div>
    </motion.div>
  );
}
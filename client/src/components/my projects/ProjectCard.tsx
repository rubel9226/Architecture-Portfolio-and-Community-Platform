// components/projects/ProjectCard.tsx
'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion'; 
import { Eye, Heart, Bookmark, Trash2, Copy, Pin, Archive, MoreVertical, Globe, Lock, EyeOff } from 'lucide-react';
import { fadeUpMyProject } from '@/utils/animations';
import { DashboardViewMode, Project } from '@/types/myProject';
import { useProjects } from '@/hooks/MyProjectsContext';

export default function ProjectCard({ project, layoutMode }: { project: Project; layoutMode: DashboardViewMode }) {
    const { selectedIds, toggleSelectProject, pinProject, duplicateProject, archiveProject, setDeleteId } = useProjects();
    const [menuOpen, setMenuOpen] = useState(false);

    const isChecked = selectedIds.includes(project.id);

    const visibilityStyles = {
        PUBLIC: 'bg-blue-50 text-blue-600 border-blue-100',
        PRIVATE: 'bg-slate-100 text-slate-600 border-slate-200',
        DRAFT: 'bg-orange-50 text-orange-600 border-orange-100'
    };

    const visibilityIcons = {
        PUBLIC: Globe,
        PRIVATE: Lock,
        DRAFT: EyeOff
    };

    const VIcon = visibilityIcons[project.visibility];

    return (
        <motion.div
            variants={fadeUpMyProject}
            layout
            whileHover={layoutMode === 'grid' ? { y: -4 } : {}}
            className={`bg-slate-800 border rounded-2xl relative group overflow-hidden shadow-3xs transition-all ${
                isChecked ? 'border-blue-500 ring-1 ring-blue-500/20' : 'border-slate-500 hover:border-slate-300'
            } ${layoutMode === 'list' ? 'flex flex-col sm:flex-row gap-4 p-4' : ''}`}
        >
        {/* Top Overlay Context Tags */}
            <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5">
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => toggleSelectProject(project.id)}
                    className="w-3.5 h-3.5 rounded border-slate-300 text-blue-600 focus:ring-blue-500 bg-white cursor-pointer"
                />
                {project.isPinned && (
                    <span className="p-1 bg-amber-50 border border-amber-100 text-amber-600 rounded-md shadow-3xs">
                        <Pin size={10} className="fill-amber-600" />
                    </span>
                )}
            </div>

            {/* Primary Image Vector Canvas Box */}
            <div className={`relative bg-slate-100 overflow-hidden ${layoutMode === 'grid' ? 'aspect-video w-full' : 'w-full sm:w-48 aspect-video sm:aspect-square rounded-xl'}`}>
                <Image src={project.coverImage} alt={project.title} fill className="object-cover group-hover:scale-102 transition-transform duration-500" />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Text Context Structural Segment */}
            <div className={`p-4 flex-1 flex flex-col justify-between space-y-3 ${layoutMode === 'list' ? 'p-0' : ''}`}>
                <div className="space-y-1.5">
                <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{project.category}</span>
                    <span className={`inline-flex items-center gap-1 px-1.5 py-0.5 border text-[9px] font-bold rounded ${visibilityStyles[project.visibility]}`}>
                    <VIcon size={9} /> {project.visibility}
                    </span>
                </div>

                <h3 className="text-xs font-bold text-slate-900 tracking-tight line-clamp-1 group-hover:text-blue-600 transition-colors">
                    {project.title}
                </h3>
                <p className="text-[11px] text-slate-400 font-light leading-relaxed line-clamp-2">{project.description}</p>
                </div>

                {/* Dynamic Software Metadata Vector Stream */}
                <div className="flex flex-wrap gap-1">
                {project.software.map((sw, idx) => (
                    <span key={idx} className="text-[9px] font-medium bg-slate-50 text-slate-500 border border-slate-100 px-1.5 py-0.5 rounded">
                    {sw}
                    </span>
                ))}
                </div>

                {/* Card Engagement Metrics Data Strip */}
                <div className="flex items-center justify-between border-t border-slate-100 pt-3 text-[10px] text-slate-400 font-semibold">
                <div className="flex items-center gap-3">
                    <span className="flex items-center gap-0.5"><Eye size={11} /> {project.views}</span>
                    <span className="flex items-center gap-0.5"><Heart size={11} /> {project.likes}</span>
                    <span className="flex items-center gap-0.5"><Bookmark size={11} /> {project.bookmarks}</span>
                </div>
                <span className="font-light text-slate-400 text-[9px]">{project.createdAt}</span>
                </div>
            </div>

            {/* Floating Operational Context Dropdown Menu Anchor */}
            <div className="absolute top-2 right-2 z-20">
                <button
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-1 bg-white/90 backdrop-blur-md border border-slate-200/60 rounded-lg text-slate-500 hover:text-slate-900 shadow-3xs"
                >
                <MoreVertical size={12} />
                </button>

                {menuOpen && (
                <>
                    <div className="fixed inset-0 z-10" onClick={() => setMenuOpen(false)} />
                    <div className="absolute right-0 mt-1 w-36 bg-white border border-slate-200 rounded-xl shadow-md p-1 z-20 text-[11px] font-semibold text-slate-600 space-y-0.5">
                    <button onClick={() => { pinProject(project.id); setMenuOpen(false); }} className="w-full flex items-center gap-1.5 px-2 py-1.5 hover:bg-slate-50 rounded-lg text-left"><Pin size={11} /> Pin Block</button>
                    <button onClick={() => { duplicateProject(project.id); setMenuOpen(false); }} className="w-full flex items-center gap-1.5 px-2 py-1.5 hover:bg-slate-50 rounded-lg text-left"><Copy size={11} /> Duplicate</button>
                    <button onClick={() => { archiveProject(project.id); setMenuOpen(false); }} className="w-full flex items-center gap-1.5 px-2 py-1.5 hover:bg-slate-50 rounded-lg text-left"><Archive size={11} /> Archive</button>
                    <div className="border-t border-slate-100 my-1" />
                    <button onClick={() => { setDeleteId(project.id); setMenuOpen(false); }} className="w-full flex items-center gap-1.5 px-2 py-1.5 hover:bg-red-50 text-red-600 rounded-lg text-left"><Trash2 size={11} /> Permanent Purge</button>
                    </div>
                </>
                )}
            </div>
        </motion.div>
    );
}
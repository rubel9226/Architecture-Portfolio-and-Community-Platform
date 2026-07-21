"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Eye, Heart, Bookmark, Share2, Sparkles, GraduationCap, MapPin } from "lucide-react";
import { Project } from "@/types/publicProject";


interface ProjectCardProps {
  project: Project;
  onPreviewClick: (project: Project) => void;
  isSaved: boolean;
  onSaveToggle: (id: string, e: React.MouseEvent) => void;
  onShareClick: (project: Project, e: React.MouseEvent) => void;
  layoutView: "grid" | "compact" | "masonry";
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onPreviewClick,
  isSaved,
  onSaveToggle,
  onShareClick,
  layoutView
}) => {
  const isCompact = layoutView === "compact";

    return (
        <motion.article 
            layout
            className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-neutral-900 bg-neutral-950 hover:border-neutral-800 hover:shadow-2xl transition-all duration-350`}
        >
            <div 
                onClick={() => onPreviewClick(project)} 
                className="relative cursor-pointer overflow-hidden aspect-[4/3] w-full"
            >
                <Image 
                    src={project.coverImage} 
                    alt={project.title}
                    fill
                    className="object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-neutral-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="px-4 py-2 bg-black/80 backdrop-blur-md rounded-full text-white text-xs font-semibold scale-90 group-hover:scale-100 transition-all duration-350 shadow-lg border border-neutral-850">
                        Preview Workspace
                    </div>
                </div>

                <div className="absolute top-4 left-4 flex flex-col gap-1.5 pointer-events-none">
                    <span className="px-2.5 py-0.5 bg-black/70 backdrop-blur-md border border-neutral-800 text-[10px] font-bold tracking-wider text-neutral-300 rounded-md uppercase">
                        {project.category}
                    </span>
                    {project.isEditorsChoice && (
                        <span className="px-2.5 py-0.5 bg-amber-500/10 backdrop-blur-md border border-amber-500/30 text-[10px] font-bold tracking-wider text-amber-400 rounded-md uppercase flex items-center gap-1">
                        <Sparkles size={8} /> Editor&apos;s choice
                        </span>
                    )}
                    {project.isNew && (
                        <span className="px-2.5 py-0.5 bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 text-[10px] font-bold tracking-wider text-emerald-400 rounded-md uppercase">
                        New
                        </span>
                    )}
                </div>

                <div className="absolute bottom-4 right-4 flex items-center gap-1.5">
                    <button 
                        onClick={(e) => onSaveToggle(project.id, e)}
                        className={`p-2 rounded-xl backdrop-blur-md border transition-all cursor-pointer ${
                        isSaved 
                            ? "bg-white border-white text-black" 
                            : "bg-black/60 border-neutral-800 text-white hover:bg-neutral-900"
                        }`}
                    >
                        <Bookmark size={14} className={isSaved ? "fill-current" : ""} />
                    </button>
                    <button 
                        onClick={(e) => onShareClick(project, e)}
                        className="p-2 rounded-xl bg-black/60 backdrop-blur-md border border-neutral-800 text-white hover:bg-neutral-900 transition-all cursor-pointer"
                    >
                        <Share2 size={14} />
                    </button>
                </div>
            </div>

            <div className="p-5 flex-grow flex flex-col justify-between">
                <div className="space-y-2 mb-4">
                    <h3 className="text-base font-bold text-white tracking-tight leading-snug line-clamp-1">
                        {project.title}
                    </h3>
                    {!isCompact && (
                        <p className="text-xs text-neutral-400 font-light leading-relaxed line-clamp-2">
                        {project.description}
                        </p>
                    )}
                    <div className="flex flex-wrap gap-1 pt-1.5">
                        {project.software.slice(0, 3).map((soft) => (
                        <span key={soft} className="text-[10px] px-2 py-0.5 bg-neutral-900 text-neutral-400 border border-neutral-850 rounded-full font-medium">
                            {soft}
                        </span>
                        ))}
                    </div>
                </div>

                <div className="border-t border-neutral-900 pt-4 mt-auto">
                    <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2.5 min-w-0">
                            <div className="relative h-7 w-7 rounded-full overflow-hidden shrink-0 bg-neutral-800 border border-neutral-800">
                                <Image src={project.creator.avatar} alt={project.creator.name} fill className="object-cover" />
                            </div>
                            <div className="min-w-0">
                                <p className="text-xs font-bold text-white truncate">{project.creator.name}</p>
                                <p className="text-[10px] text-neutral-400 truncate flex items-center gap-1 font-light">
                                    <GraduationCap size={10} /> {project.university}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 text-[11px] text-neutral-500 font-mono font-medium shrink-0">
                            <div className="flex items-center gap-1">
                                <Eye size={12} />
                                <span>{project.views >= 1000 ? `${(project.views/1000).toFixed(1)}k` : project.views}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Heart size={12} />
                                <span>{project.likes}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.article>
    );
};
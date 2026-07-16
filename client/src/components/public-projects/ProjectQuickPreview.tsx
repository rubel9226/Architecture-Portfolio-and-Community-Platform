"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, GraduationCap, MapPin, ExternalLink, Calendar, AppWindow, Cpu } from "lucide-react";
import { Project } from "@/types/project";

interface ProjectQuickPreviewProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectQuickPreview: React.FC<ProjectQuickPreviewProps> = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black"
                />

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="relative bg-neutral-950 border border-neutral-800 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto z-15 shadow-2xl flex flex-col md:flex-row"
                    >
                    <button 
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 border border-neutral-800 text-neutral-400 hover:text-white transition-all z-20 cursor-pointer"
                    >
                        <X size={18} />
                    </button>

                    <div className="relative w-full md:w-1/2 aspect-[4/3] md:aspect-auto md:min-h-[500px]">
                        <Image 
                        src={project.coverImage} 
                        alt={project.title}
                        fill
                        className="object-cover"
                        />
                    </div>

                    <div className="p-6 md:p-10 w-full md:w-1/2 flex flex-col justify-between">
                        <div className="space-y-6">
                            <div className="flex items-center gap-2">
                                <span className="px-3 py-1 bg-neutral-900 border border-neutral-800 text-[10px] font-bold tracking-widest text-neutral-300 rounded-full uppercase">
                                {project.category}
                                </span>
                                <span className="text-xs text-neutral-500 font-mono flex items-center gap-1">
                                <Calendar size={12} /> {project.year}
                                </span>
                            </div>

                            <div className="space-y-3">
                                <h3 className="text-2xl font-bold text-white tracking-tight">
                                {project.title}
                                </h3>
                                <p className="text-sm text-neutral-400 font-light leading-relaxed">
                                {project.description}
                                </p>
                            </div>

                            <div className="border-t border-neutral-900 pt-5 space-y-4">
                                <div className="flex items-center gap-3">
                                <div className="relative h-10 w-10 rounded-full overflow-hidden bg-neutral-800">
                                    <Image src={project.creator.avatar} alt={project.creator.name} fill className="object-cover" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-white">{project.creator.name}</h4>
                                    <p className="text-xs text-neutral-400 flex items-center gap-1 font-light">
                                    <GraduationCap size={12} /> {project.university}
                                    </p>
                                </div>
                                </div>

                                <div className="flex items-center gap-1.5 text-xs text-neutral-400">
                                <MapPin size={12} className="text-neutral-500" />
                                <span>{project.country}</span>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <h5 className="text-[11px] font-semibold uppercase tracking-wider text-neutral-500 flex items-center gap-1.5">
                                <Cpu size={12} /> Computational Tools
                                </h5>
                                <div className="flex flex-wrap gap-1.5">
                                {project.software.map((tool) => (
                                    <span key={tool} className="text-xs px-2.5 py-1 bg-neutral-900 text-neutral-300 border border-neutral-850 rounded-lg">
                                    {tool}
                                    </span>
                                ))}
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 mt-auto">
                            <button className="w-full py-4 bg-white hover:bg-neutral-100 text-black rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg">
                                Examine Documentation <ExternalLink size={14} />
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};
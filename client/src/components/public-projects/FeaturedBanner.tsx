"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Trophy } from "lucide-react";
import { Project } from "@/types/publicProject";


interface FeaturedBannerProps {
    featuredProject: Project;
    onExplore: () => void;
}

export const FeaturedBanner: React.FC<FeaturedBannerProps> = ({ featuredProject, onExplore }) => {
    return (
        <div className="max-w-[2100px] mx-auto px-4 md:px-8 py-8">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 aspect-[21/9] min-h-[350px] flex items-end group"
            >
                <Image 
                    src={featuredProject.coverImage} 
                    alt={featuredProject.title}
                    fill
                    priority
                    className="object-cover object-center opacity-60 transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />
                
                <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                        <span className="flex items-center gap-1.5 px-3 bg-amber-500/10 backdrop-blur-md border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider rounded-full py-1">
                            <Trophy size={12} /> Project of the week
                        </span>
                        <span className="flex items-center gap-1.5 px-3 bg-neutral-950/80 backdrop-blur-md border border-neutral-800 text-neutral-200 text-xs font-semibold uppercase tracking-wider rounded-full py-1">
                            <Sparkles size={12} /> Editor&apos;s choice
                        </span>
                </div>

                <div className="relative z-10 p-6 md:p-12 max-w-3xl space-y-4">
                        <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                            {featuredProject.category}
                        </span>
                        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
                            {featuredProject.title}
                        </h2>
                        <p className="text-sm md:text-lg text-neutral-300 font-light leading-relaxed line-clamp-2">
                            {featuredProject.description}
                        </p>
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                            <button 
                            onClick={onExplore}
                            className="px-6 py-3 bg-white text-black hover:bg-neutral-100 rounded-lg font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2 group/btn cursor-pointer"
                            >
                            Examine Structure 
                            <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                            </button>
                            <button className="px-6 py-3 border border-neutral-700 hover:border-neutral-500 hover:bg-neutral-900/50 text-white rounded-lg font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer">
                            View Creator Portfolio
                            </button>
                        </div>
                </div>
            </motion.div>
        </div>
    );
};
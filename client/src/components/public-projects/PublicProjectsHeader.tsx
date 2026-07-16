"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Building2 } from "lucide-react";

interface PublicProjectsHeaderProps {
  totalCount: number;
}

export const PublicProjectsHeader: React.FC<PublicProjectsHeaderProps> = ({ totalCount }) => {
    return (
        <header className="w-full bg-neutral-950 border-b border-neutral-900 py-10">
            <div className="max-w-[2100px] mx-auto px-4 md:px-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-3"
                >
                    <div className="flex items-center gap-2">
                        <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-xs font-semibold tracking-wider text-emerald-500 uppercase">Live Database</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white font-sans">
                        Explore Architecture <span className="text-neutral-400">Projects</span>
                    </h1>
                    <p className="text-sm md:text-base text-neutral-400 max-w-2xl font-light leading-relaxed">
                        Discover and analyze highly detailed architectural concepts, competition schemes, and thesis works curated globally.
                    </p>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="bg-neutral-900/50 backdrop-blur-md border border-neutral-800 rounded-xl p-4 flex items-center gap-4 self-start md:self-auto"
                >
                    <div className="p-3 bg-neutral-800/80 rounded-lg text-neutral-300">
                        <Building2 size={20} />
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-white tabular-nums">
                        {totalCount.toLocaleString()}
                        </div>
                        <div className="text-xs text-neutral-400 font-medium">Global Submissions</div>
                    </div>
                </motion.div>
            </div>
        </header>
    );
};
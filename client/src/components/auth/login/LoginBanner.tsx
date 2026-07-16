"use client";

import React from "react";
import { motion } from "framer-motion";
import { StatItem } from "@/types/auth";

const stats: StatItem[] = [
  { value: "10K+", label: "Portfolios" },
  { value: "5K+", label: "Architects" },
  { value: "100+", label: "Academies" },
];

export const LoginBanner: React.FC = () => {
    return (
        <div className="hidden lg:flex flex-col justify-between relative w-1/2 min-h-screen bg-slate-950 p-16 text-white overflow-hidden">
            {/* Structural Geometry Background Overlay */}
            <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
            <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-blue-600/20 blur-3xl" />
            <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-teal-600/20 blur-3xl" />

            {/* Header Logo */}
            <div className="relative z-10 flex items-center gap-2">
                <div className="h-8 w-8 bg-blue-600 flex items-center justify-center rounded-lg font-bold text-sm tracking-tighter">
                    A
                </div>
                <span className="font-bold tracking-tight text-lg">ArchiFolio</span>
            </div>

            {/* Main Narrative */}
            <div className="relative z-10 my-auto max-w-lg space-y-6">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-4xl xl:text-5xl font-light tracking-tight leading-tight"
                >
                    Showcase Your <br />
                    <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                        Architecture Journey
                    </span>
                </motion.h1>
                
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                    className="text-slate-400 text-sm leading-relaxed font-light"
                >
                    Join a global guild of architectural professionals, researchers, and students displaying spatial concepts, blueprint schematics, and high-fidelity renders.
                </motion.p>

                {/* Dynamic Metric Blocks */}
                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-800">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                            className="space-y-1"
                        >
                            <h3 className="text-xl font-mono font-bold text-white">{stat.value}</h3>
                            <p className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Platform Meta Details */}
            <div className="relative z-10 text-[10px] text-slate-500 font-light flex justify-between">
                <span>© 2026 ArchiFolio Global.</span>
                <span>Version 4.1.0-Release</span>
            </div>
        </div>
    );
};
"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { StatItem } from "@/types";

const stats: StatItem[] = [
  { value: "15K+", label: "Shared Portfolios" },
  { value: "6K+", label: "Active Creators" },
  { value: "120+", label: "Academies" },
  { value: "40+", label: "Countries" },
];

export const RegisterBanner: React.FC = () => {
    return (
        <div className="hidden lg:flex flex-col justify-between relative w-5/12 min-h-screen bg-slate-950 p-16 text-white overflow-hidden border-r border-slate-900">

            <div className="absolute inset-0 opacity-[0.12] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]" />
            <div className="absolute -left-24 -top-24 w-96 h-96 rounded-full bg-blue-600/15 blur-[100px]" />
            <div className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-teal-600/15 blur-[100px]" />


            <div className="relative z-10 flex items-center gap-2.5">
                <div className="h-9 w-9 bg-blue-600 flex items-center justify-center rounded-xl font-extrabold text-base tracking-tighter text-white shadow-lg shadow-blue-500/20">
                    A
                </div>
                <span className="font-bold tracking-tight text-lg text-white">ArchiFolio</span>
            </div>


            <div className="relative z-10 my-auto max-w-md space-y-8">
                <div className="space-y-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="text-4xl xl:text-5xl font-light tracking-tight leading-[1.15]"
                    >
                        Build Your <br />
                        <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-teal-400">
                            Architecture Portfolio
                        </span>
                    </motion.h1>
                    
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
                        className="text-slate-400 text-xs xl:text-sm leading-relaxed font-light"
                    >
                        Join the premier global community where next-generation designers render blueprint ideas, submit spatial proposals, and find executive career placements.
                    </motion.p>
                </div>


                <div className="space-y-3 pt-2">
                    {["Parametric blueprint metadata synchronization", "Instant live-sharing sandbox domains", "Secure academic validation networks"].map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -15 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                            className="flex items-center gap-2.5 text-xs text-slate-300 font-light"
                        >
                        <CheckCircle2 size={14} className="text-blue-400 shrink-0" />
                            <span>{item}</span>
                        </motion.div>
                    ))}
                </div>


                <div className="grid grid-cols-2 gap-4 pt-8 border-t border-slate-900">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.45 + idx * 0.08 }}
                            className="p-3 bg-slate-900/40 border border-slate-900/60 rounded-xl"
                        >
                            <h3 className="text-lg font-mono font-bold text-white">{stat.value}</h3>
                            <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>


            <div className="relative z-10 flex items-center gap-2 text-[10px] text-slate-500 font-light">
                <ShieldCheck size={12} className="text-teal-500" />
                <span>Enterprise Encrypted Space Architecture Portal</span>
            </div>
        </div>
    );
};
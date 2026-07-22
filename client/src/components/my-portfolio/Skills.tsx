"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface SkillsProps {
    skills: string[];
}

export default function Skills({ skills }: SkillsProps) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
            },
        },
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 25,
            scale: 0.95,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.4,
            },
        },
    };

    return (
        <section
            id="skills"
            className="relative py-24 px-6 overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:40px_40px]" />

            <div className="relative max-w-6xl mx-auto">

                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-blue-400 text-sm uppercase tracking-[0.3em] font-semibold">
                        My Stack
                    </span>

                    <h2 className="text-5xl font-bold text-white mt-3">
                        Skills & Technologies
                    </h2>

                    <p className="text-slate-400 mt-5 max-w-2xl mx-auto">
                        Technologies, frameworks and tools that I use to build
                        modern, scalable and high-performance web applications.
                    </p>
                </motion.div>

                {/* Card */}

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 md:p-10 shadow-[0_0_80px_rgba(255,255,255,0.04)]"
                >
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">

                        {skills.map((skill, index) => (

                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{
                                    y: -6,
                                    scale: 1.03,
                                }}
                                className="group rounded-2xl border border-white/10 bg-white/[0.02] hover:border-blue-500/40 hover:bg-blue-500/10 transition-all duration-300 p-5"
                            >

                                <div className="flex items-center gap-3">

                                    <div className="w-10 h-10 rounded-xl bg-blue-500/15 flex items-center justify-center group-hover:bg-blue-500/20 transition">

                                        <CheckCircle2 className="w-5 h-5 text-blue-400" />

                                    </div>

                                    <div>

                                        <h3 className="text-white font-semibold capitalize">

                                            {skill}

                                        </h3>

                                        <span className="text-xs text-slate-400">

                                            Technology

                                        </span>

                                    </div>

                                </div>

                            </motion.div>

                        ))}

                    </div>
                </motion.div>
            </div>
        </section>
    );
}
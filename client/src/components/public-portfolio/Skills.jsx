import React from 'react';
import { motion } from 'framer-motion';
import SectionActions from '../my-portfolio/SectionActions';

const Skills = () => {
    // Animation container configurations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
        visible: { 
            opacity: 1, 
            y: 0, 
            filter: "blur(0px)",
            transition: { type: "spring", stiffness: 60, damping: 15 } 
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -10 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
    };

    const frontendSkills = [
        { name: "HTML", level: "Expert" },
        { name: "CSS", level: "Expert" },
        { name: "Tailwind", level: "Intermediate" },
        { name: "JavaScript", level: "Expert" },
        { name: "TypeScript", level: "Expert" },
        { name: "React.js", level: "Expert" },
        { name: "Next.js", level: "Expert" }
    ];

    const backendSkills = [
        { name: "Node.js", level: "Expert" },
        { name: "Express.js", level: "Expert" },
        { name: "MongoDB", level: "Expert" },
        { name: "PostgreSQL", level: "Intermediate" },
        { name: "Next.js", level: "Expert" }
    ];

    return ( 
        <section className="py-24 px-6 relative overflow-hidden" id="skills">
            {/* Subtle interactive background glow grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

            <div className="max-w-7xl mx-auto text-center mb-16 relative z-10">
                <motion.h2 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold mb-2 tracking-tight"
                >
                    Skills
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-slate-400 text-xs tracking-widest uppercase font-semibold"
                >
                    My Technical Level
                </motion.p>
            </div>

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10"
            >
                {/* Frontend Developer Card */}
                <motion.div 
                    variants={cardVariants}
                    whileHover={{ y: -6, scale: 1.01, borderColor: "rgba(59, 130, 246, 0.3)" }}
                    className="glass-card p-8 sm:p-10 rounded-3xl flex flex-col items-center bg-white/[0.01] border border-white/10 backdrop-blur-md transition-colors duration-300 shadow-2xl"
                >
                    <h3 className="text-xl font-bold text-slate-100 mb-10 text-center relative group cursor-default">
                        Frontend Developer
                        <span className="absolute bottom-[-6px] left-0 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300" />
                    </h3>
                    <div className="grid grid-cols-2 gap-x-6 sm:gap-x-12 gap-y-6 w-full">
                        {frontendSkills.map((skill, idx) => (
                        <motion.div 
                            key={idx} 
                            variants={itemVariants}
                            whileHover={{ x: 4 }}
                            className="flex gap-3 items-start group"
                        >
                            <svg className="w-5 h-5 text-white/60 group-hover:text-blue-400 flex-shrink-0 mt-0.5 transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div>
                                <h4 className="font-bold text-white text-base leading-tight group-hover:text-blue-400 transition-colors duration-300">{skill.name}</h4>
                                <span className="text-xs text-slate-400 font-medium">{skill.level}</span>
                            </div>
                        </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Backend Developer Card */}
                <motion.div 
                    variants={cardVariants}
                    whileHover={{ y: -6, scale: 1.01, borderColor: "rgba(236, 72, 153, 0.3)" }}
                    className="glass-card p-8 sm:p-10 rounded-3xl flex flex-col items-center bg-white/[0.01] border border-white/10 backdrop-blur-md transition-colors duration-300 shadow-2xl"
                >
                    <h3 className="text-xl font-bold text-slate-100 mb-10 text-center relative group cursor-default">
                        Backend Developer
                        <span className="absolute bottom-[-6px] left-0 w-0 h-[2px] bg-pink-500 group-hover:w-full transition-all duration-300" />
                    </h3>
                    <div className="grid grid-cols-2 gap-x-6 sm:gap-x-12 gap-y-6 w-full">
                        {backendSkills.map((skill, idx) => (
                        <motion.div 
                            key={idx} 
                            variants={itemVariants}
                            whileHover={{ x: 4 }}
                            className="flex gap-3 items-start group"
                        >
                            <svg className="w-5 h-5 text-white/60 group-hover:text-pink-400 flex-shrink-0 mt-0.5 transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div>
                                <h4 className="font-bold text-white text-base leading-tight group-hover:text-pink-400 transition-colors duration-300">{skill.name}</h4>
                                <span className="text-xs text-slate-400 font-medium">{skill.level}</span>
                            </div>
                        </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
            <SectionActions
                section="skills"
            />
        </section>
    );
};

export default Skills;
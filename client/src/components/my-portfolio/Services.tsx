import React from 'react';
import { motion } from 'framer-motion';
import SectionActions from './SectionActions';

const Services = () => {
    // Parent container variant to handle staggered reveals of child elements
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08, // Subtle cascading entry effect
            }
        }
    };

    // Individual item entry slide up animation
    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { type: "spring", stiffness: 70, damping: 14 } 
        }
    };

    const serviceData = [
        { icon: "💻", title: "Full-Stack Web Development", desc: "End-to-end web applications using React, Node.js, Express, and MongoDB with clean and scalable code." },
        { icon: "🎨", title: "Frontend Development", desc: "Fast, responsive, and user-friendly interfaces built with React and modern UI libraries like Tailwind CSS." },
        { icon: "⚙️", title: "Backend & API Development", desc: "Secure and efficient RESTful APIs using Node.js and Express, optimized for performance and scalability." },
        { icon: "📊", title: "Database Design & Management", desc: "Well-structured MongoDB databases with optimized queries for speed, reliability, and data integrity." },
        { icon: "🔐", title: "Authentication & Authorization", desc: "Implementation of secure login systems using JWT, role-based access control and best security practices." },
        { icon: "🛒", title: "E-Commerce Development", desc: "Product listings, cart systems, checkout flows, and payment gateway integrations for demo or real projects." },
        { icon: "⚡", title: "Performance Optimization", desc: "Improving load times, API response speed, and overall application performance for better user experience." },
        { icon: "☁️", title: "Deployment & Hosting Support", desc: "Deploying applications on cloud platforms with proper environment setup and production-ready configuration." },
    ];

    return (
        <section className="py-24 px-6 bg-slate-900/20 relative overflow-hidden" id="services">
            {/* Ambient subtle background blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto text-center mb-16 relative z-10">
                <motion.h2 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold mb-4 tracking-tight text-slate-100"
                >
                    Services I Provide
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-slate-400 max-w-2xl mx-auto text-sm"
                >
                    I offer design and development services focused on building fast, modern, and user-friendly digital experiences.
                </motion.p>
            </div>

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10"
            >
                {serviceData.map((svc, i) => (
                    <motion.div
                        key={i}
                        variants={cardVariants}
                        whileHover={{ 
                            y: -6, 
                            scale: 1.02, 
                            borderColor: "rgba(59, 130, 246, 0.25)",
                            boxShadow: "0 20px 40px -15px rgba(0,0,0,0.5)"
                        }}
                        whileTap={{ scale: 0.98 }}
                        className="p-6 rounded-xl border border-white/5 bg-slate-800/40 hover:bg-slate-800/60 transition-colors relative group cursor-pointer overflow-hidden"
                    >
                        {/* Interactive Hover radial gradient glow layout */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-blue-600/0 group-hover:from-blue-600/5 group-hover:to-transparent transition-all duration-500 pointer-events-none" />

                        <motion.div 
                            whileHover={{ scale: 1.15, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 300, damping: 15 }}
                            className="mb-4 text-blue-400 text-2xl inline-block"
                        >
                            {svc.icon}
                        </motion.div>
                        
                        <h4 className="font-bold mb-2 text-slate-100 group-hover:text-blue-400 transition-colors duration-300">
                            {svc.title}
                        </h4>
                        <p className="text-xs text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                            {svc.desc}
                        </p>
                    </motion.div>
                ))}
            </motion.div>

            <SectionActions
                section="services"
            />
        </section>
    );
};

export default Services;
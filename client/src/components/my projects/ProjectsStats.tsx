// components/projects/ProjectStats.tsx
'use client';
import { motion } from 'framer-motion'; 
import { FolderOpen, Globe, Lock, FileText } from 'lucide-react';
import { containerStaggerMyProject, fadeUpMyProject } from '@/utils/animations';

export default function ProjectStats() {
    // const totals = {
    //     all: mockProjects.length,
    //     public: mockProjects.filter(p => p.visibility === 'PUBLIC').length,
    //     private: mockProjects.filter(p => p.visibility === 'PRIVATE').length,
    //     draft: mockProjects.filter(p => p.visibility === 'DRAFT').length,
    // };

    // const metricalCards = [
    //     { label: 'Total Metrics', value: totals.all, desc: 'All uploaded design matrices', icon: FolderOpen, color: 'text-slate-200 bg-slate-700' },
    //     { label: 'Public Tier', value: totals.public, desc: 'Discoverable design nodes', icon: Globe, color: 'text-blue-100 bg-indigo-500/40' },
    //     { label: 'Private Vault', value: totals.private, desc: 'Restricted access frames', icon: Lock, color: 'text-teal-50 bg-teal-600' },
    //     { label: 'Draft Schemes', value: totals.draft, desc: 'Unfinished schematic works', icon: FileText, color: 'text-orange-50 bg-orange-600/40' }
    // ];

    return (
        <motion.div variants={containerStaggerMyProject} initial="initial" whileInView="animate" viewport={{ once: true }} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {/* {metricalCards.map((card, i) => (
                <motion.div key={i} variants={fadeUpMyProject} whileHover={{ y: -3 }} className="bg-slate-900 border border-slate-700 p-4 rounded-2xl shadow-3xs flex items-center gap-4 transition-all">
                    <div className={`p-3 rounded-xl border border-black/5 ${card.color}`}>
                        <card.icon size={16} />
                    </div>
                    <div>
                        <h4 className="text-xl font-black text-slate-200 tracking-tight">{card.value}</h4>
                        <p className="text-[11px] font-bold text-slate-300 tracking-tight">{card.label}</p>
                        <p className="text-[10px] text-slate-400 font-light tracking-normal">{card.desc}</p>
                    </div>
                </motion.div>
            ))} */}
        </motion.div>
    );
}
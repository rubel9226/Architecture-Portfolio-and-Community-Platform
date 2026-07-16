// components/projects/ProjectsHeader.tsx
'use client';
import { motion } from 'framer-motion';
import { Plus, Download } from 'lucide-react';
import { fadeUpMyProject } from '@/utils/animations';
import Link from 'next/link';

export default function ProjectsHeader() {
    return (
        <motion.header {...fadeUpMyProject} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div className="space-y-0.5">
                <h1 className="text-2xl font-black text-gray-300 tracking-tight">My Projects</h1>
                <p className="text-xs text-gray-400 font-light">View, structure, inspect, and route your digital design portfolio catalogs.</p>
            </div>
            <div className="flex items-center gap-2">
                <Link href={'/dashboard/add-projects'} type="button" className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-xs font-semibold shadow-3xs transition-colors">
                    <Plus size={14} /> Create New Project
                </Link>
            </div>
        </motion.header>
    );
}
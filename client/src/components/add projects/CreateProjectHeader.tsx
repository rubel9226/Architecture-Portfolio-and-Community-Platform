// components/projects/create/CreateProjectHeader.tsx
'use client';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { fadeUp } from '@/utils/animations';

export default function CreateProjectHeader() {
    return (
        <motion.header {...fadeUp} className="space-y-2 pb-6 border-b border-slate-700">
            <div className="flex items-center gap-2 text-xs font-medium text-slate-100">
                <span>Dashboard</span>
                <ChevronRight size={12} />
                <span>Projects</span>
                <ChevronRight size={12} />
                <span className="text-slate-200">Create</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-0.5">
                    <h1 className="text-2xl font-black text-slate-300 tracking-tight">Create New Project</h1>
                    <p className="text-xs text-slate-400 font-light">Share your architectural layouts and generative tectonics with the global ecosystem.</p>
                </div>
                <button type="button" className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 border border-slate-100 px-3 py-2 rounded-md transition-all w-fit">
                    <ArrowLeft size={14} className='bg-slate-200' /> Back to Dashboard
                </button>
            </div>
        </motion.header>
    );
}
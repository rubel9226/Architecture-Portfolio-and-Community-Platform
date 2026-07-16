// components/profile/CTA.tsx
'use client';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { fadeUpProfile } from '@/utils/animations';

export default function CTA() {
  return (
    <motion.section {...fadeUpProfile} className="p-8 bg-white border border-slate-200 rounded-2xl shadow-3xs text-center space-y-4">
      <div className="max-w-md mx-auto space-y-1">
        <h3 className="text-xl font-bold tracking-tight text-slate-900">Want to showcase your architecture journey?</h3>
        <p className="text-xs text-slate-400 font-light leading-relaxed">Join thousands of structural designers, student computational theorists, and ecosystem researchers mapping portfolios globally.</p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl shadow-xs transition-colors">Create Your Portfolio</button>
        <button className="inline-flex items-center gap-1.5 px-4 py-2 border border-slate-200 hover:bg-slate-50 text-slate-600 text-xs font-semibold rounded-xl transition-colors">Explore Projects <ArrowUpRight size={13}/></button>
      </div>
    </motion.section>
  );
}
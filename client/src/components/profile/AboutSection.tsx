// components/profile/AboutSection.tsx
'use client';
import { motion } from 'framer-motion';
import { fadeUpProfile } from '@/utils/animations';
import { AboutDetails } from '@/types';

export default function AboutSection({ details }: { details: AboutDetails }) {
  return (
    <motion.section {...fadeUpProfile} className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-3xs space-y-6">
      <h3 className="text-sm font-black uppercase tracking-widest text-slate-400">Architectural Thesis & Intent</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-slate-900 mb-1">About Me</h4>
            <p className="text-slate-600 font-light leading-relaxed">{details.me}</p>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-1">Professional Summary</h4>
            <p className="text-slate-600 font-light leading-relaxed">{details.summary}</p>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-slate-900 mb-1">Design Philosophy</h4>
            <p className="text-slate-600 font-light leading-relaxed italic border-l-2 border-slate-200 pl-3">{details.philosophy}</p>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-1">Career Trajectory Goals</h4>
            <p className="text-slate-600 font-light leading-relaxed">{details.goals}</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
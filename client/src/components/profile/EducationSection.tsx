// components/profile/EducationSection.tsx
'use client';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { fadeUpProfile } from '@/utils/animations';
import { EducationItem } from '@/types';

export default function EducationSection({ history }: { history: EducationItem[] }) {
  return (
    <motion.section {...fadeUpProfile} className="space-y-4">
      <h3 className="text-sm font-black uppercase tracking-widest text-slate-400">Institutional Foundation</h3>
      {history.map((edu) => (
        <div key={edu.id} className="p-5 bg-white border border-slate-200 rounded-2xl shadow-3xs flex flex-col sm:flex-row gap-4 items-start">
          <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-slate-600">
            <GraduationCap size={20} />
          </div>
          <div className="space-y-2 flex-1">
            <div>
              <h4 className="text-sm font-bold text-slate-900 tracking-tight">{edu.university}</h4>
              <p className="text-xs font-medium text-slate-500">{edu.department} • <span className="text-slate-400 font-light">{edu.batch}</span></p>
            </div>
            <ul className="space-y-1.5 pl-4 list-disc text-xs text-slate-500 font-light">
              {edu.achievements.map((ach, i) => <li key={i}>{ach}</li>)}
            </ul>
          </div>
        </div>
      ))}
    </motion.section>
  );
}
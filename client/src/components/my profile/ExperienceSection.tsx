// components/profile/ExperienceSection.tsx
'use client';
import { motion } from 'framer-motion';
import { TimelineItem } from '@/types/profile';
import { Briefcase } from 'lucide-react';
import { fadeUpProfile, staggerContainerProfile } from '@/utils/animations';

export default function ExperienceSection({ timeline }: { timeline: TimelineItem[] }) {
  return (
    <motion.section {...fadeUpProfile} className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-3xs space-y-6">
      <h3 className="text-sm font-black uppercase tracking-widest text-slate-400">Professional Log Timeline</h3>
      <motion.div variants={staggerContainerProfile} initial="initial" whileInView="animate" className="relative border-l-2 border-slate-100 pl-5 space-y-6 ml-2">
        {timeline.map((item) => (
          <motion.div key={item.id} variants={fadeUpProfile} className="relative">
            <span className="absolute -left-[27px] top-0 p-1 bg-white border-2 border-blue-600 rounded-full text-blue-600">
              <Briefcase size={10} />
            </span>
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{item.date}</span>
              <h4 className="text-sm font-bold text-slate-900 tracking-tight">{item.title}</h4>
              <p className="text-xs font-medium text-blue-600">{item.organization}</p>
              <p className="text-xs text-slate-500 font-light leading-relaxed max-w-2xl">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
// components/profile/SkillsSection.tsx
'use client';
import { motion } from 'framer-motion';
import { DynamicIcon } from './DynamicIcon';
import { fadeUpProfile, staggerContainerProfile } from '@/utils/animations';
import { SkillItem } from '@/types';

export default function SkillsSection({ list }: { list: SkillItem[] }) {
  const getChroma = (lvl: string) => {
    if (lvl === 'Advanced') return 'bg-teal-50 text-teal-700 border-teal-200';
    if (lvl === 'Intermediate') return 'bg-blue-50 text-blue-700 border-blue-200';
    return 'bg-slate-50 text-slate-600 border-slate-200';
  };

  return (
    <motion.section {...fadeUpProfile} className="space-y-4">
      <h3 className="text-sm font-black uppercase tracking-widest text-slate-400">Ecosystem Competencies</h3>
      <motion.div variants={staggerContainerProfile} initial="initial" whileInView="animate" viewport={{ once: true }} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {list.map((skill) => (
          <motion.div 
            key={skill.id}
            variants={fadeUpProfile}
            whileHover={{ y: -2 }}
            className="p-3.5 bg-white border border-slate-200 rounded-xl flex items-center justify-between shadow-3xs"
          >
            <div className="flex items-center gap-2.5">
              <DynamicIcon name={skill.iconName} className="w-4 h-4 text-slate-400" />
              <span className="text-xs font-semibold text-slate-800">{skill.name}</span>
            </div>
            <span className={`text-[9px] font-bold tracking-wide uppercase px-2 py-0.5 rounded border ${getChroma(skill.level)}`}>
              {skill.level}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
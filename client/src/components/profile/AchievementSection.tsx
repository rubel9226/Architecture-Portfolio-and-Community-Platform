// components/profile/AchievementSection.tsx
'use client';
import { motion } from 'framer-motion';
import { AchievementItem } from '@/types/profile';
import { DynamicIcon } from './DynamicIcon';
import { fadeUpProfile, staggerContainerProfile } from '@/utils/animations';

export default function AchievementSection({ list }: { list: AchievementItem[] }) {
  return (
    <motion.section {...fadeUpProfile} className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-3xs space-y-5">
      <h3 className="text-sm font-black uppercase tracking-widest text-slate-400">Honors & Accolades</h3>
      <motion.div variants={staggerContainerProfile} initial="initial" whileInView="animate" className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {list.map((item) => (
          <motion.div key={item.id} variants={fadeUpProfile} className="p-4 border border-slate-100 rounded-xl bg-slate-50/50 space-y-2">
            <div className="text-orange-500"><DynamicIcon name={item.iconName} className="w-5 h-5" /></div>
            <div>
              <h4 className="text-xs font-bold text-slate-900 tracking-tight leading-snug">{item.title}</h4>
              <p className="text-[11px] text-slate-400 font-medium mt-0.5">{item.issuer} • {item.date}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
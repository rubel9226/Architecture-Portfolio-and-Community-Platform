// components/profile/ProfileStats.tsx
'use client';
import { motion } from 'framer-motion';
import { StatisticItem } from '@/types/profile';
import { DynamicIcon } from './DynamicIcon';
import { staggerContainerProfile } from '@/utils/animations';

export default function ProfileStats({ stats }: { stats: StatisticItem[] }) {
  return (
    <motion.div variants={staggerContainerProfile} initial="initial" whileInView="animate" viewport={{ once: true }} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
      {stats.map((stat) => (
        <motion.div 
          key={stat.id}
          whileHover={{ y: -4, scale: 1.015 }}
          className="p-5 bg-white border border-slate-200 rounded-2xl shadow-3xs flex items-center gap-4 transition-all hover:border-slate-300"
        >
          <div className="p-2.5 bg-slate-50 text-slate-600 rounded-xl border border-slate-100">
            <DynamicIcon name={stat.iconName} className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xl font-black text-slate-900 tracking-tight">{stat.value}</h4>
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{stat.label}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
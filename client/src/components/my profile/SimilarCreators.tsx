// components/profile/SimilarCreators.tsx
'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CreatorNode } from '@/types/profile';
import { fadeUpProfile, staggerContainerProfile } from '@/utils/animations';

export default function SimilarCreators({ creators }: { creators: CreatorNode[] }) {
  return (
    <motion.section {...fadeUpProfile} className="space-y-4">
      <h3 className="text-sm font-black uppercase tracking-widest text-slate-400">Recommended Practitioners</h3>
      <motion.div variants={staggerContainerProfile} initial="initial" whileInView="animate" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {creators.map((creator) => (
          <motion.div key={creator.id} variants={fadeUpProfile} className="p-4 bg-white border border-slate-200 rounded-xl flex items-center justify-between gap-4 shadow-3xs">
            <div className="flex items-center gap-3 min-w-0">
              <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-slate-100 shrink-0">
                <Image src={creator.avatar} alt={creator.name} fill className="object-cover" />
              </div>
              <div className="min-w-0">
                <h4 className="text-xs font-bold text-slate-900 tracking-tight truncate">{creator.name}</h4>
                <p className="text-[10px] text-slate-400 font-medium truncate">{creator.university}</p>
                <div className="flex gap-1 mt-1 overflow-hidden">
                  {creator.skills.slice(0, 2).map((sk, i) => (
                    <span key={i} className="text-[8px] bg-slate-50 text-slate-500 px-1 rounded border border-slate-100 shrink-0">{sk}</span>
                  ))}
                </div>
              </div>
            </div>
            <button className="text-[11px] font-bold text-blue-600 border border-blue-100 hover:bg-blue-50 px-2.5 py-1.5 rounded-lg shrink-0 transition-colors">Portfolio</button>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
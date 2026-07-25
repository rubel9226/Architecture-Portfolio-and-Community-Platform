'use client';
import { motion } from 'framer-motion';
import { ProjectData } from '@/types/project';
import { fadeUp } from '@/utils/animations';

export default function ProjectOverview({ data }: { data: ProjectData }) {
  return (
    <motion.div 
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-100px' }}
      variants={fadeUp}
      className="space-y-8 bg-white p-6 sm:p-10 rounded-3xl border border-slate-100 shadow-xs"
    >
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">The Architectural Intent</h2>
        <p className="text-slate-600 font-light leading-relaxed text-lg">{data.overview}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-slate-100">
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-teal-700 mb-3">Core Framework Goals</h4>
          <ul className="space-y-2.5">
            {data.tags.map((goal, i) => (
              <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0" />
                <span>{goal}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-orange-600 mb-3">Design Morphology</h4>
          <p className="text-slate-600 text-sm leading-relaxed">{data.designConcept}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-slate-100">
        <div>
          <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-2">Technical Challenges</h4>
          <p className="text-slate-600 text-sm leading-relaxed">{data.softwareUsed}</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-2">Applied Engineering</h4>
          <p className="text-slate-600 text-sm leading-relaxed">{data.softwareUsed}</p>
        </div>
      </div>
    </motion.div>
  );
}
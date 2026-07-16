'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { RelatedProject } from '@/types/project';
import { hoverLift } from '@/utils/animations';
import { ArrowUpRight } from 'lucide-react';

export default function RelatedProjects({ items }: { items: RelatedProject[] }) {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold tracking-tight text-slate-900">Explore Peer Masterpieces</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((proj) => (
          <motion.div
            key={proj.id}
            variants={hoverLift}
            whileHover="whileHover"
            className="group block bg-white rounded-2xl overflow-hidden border border-slate-150 shadow-2xs cursor-pointer"
          >
            <div className="relative aspect-4/3 bg-slate-100 overflow-hidden">
              <Image
                src={proj.image}
                alt={proj.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-4 space-y-1">
              <span className="text-[10px] font-bold tracking-wider text-blue-600 uppercase">{proj.category}</span>
              <h4 className="text-sm font-bold text-slate-900 line-clamp-1 group-hover:text-blue-600 transition-colors flex items-center justify-between">
                {proj.title} <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </h4>
              <p className="text-xs text-slate-400 font-medium">By {proj.designerName}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
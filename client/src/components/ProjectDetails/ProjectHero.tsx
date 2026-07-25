'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, Bookmark, ExternalLink } from 'lucide-react';
import { ProjectData } from '@/types/project';
import { fadeUp } from '@/utils/animations';

export default function ProjectHero({ data }: { data: ProjectData }) {
  return (
    <section className="relative w-full h-[65vh] md:h-[80vh] flex items-end overflow-hidden bg-zinc-950">
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=90"
          alt={data.title}
          fill
          priority
          className="object-cover opacity-80 scale-102 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-12 sm:pb-20">
        <motion.div variants={staggerContainer} initial="initial" animate="animate" className="max-w-3xl space-y-4">
          <motion.span variants={fadeUp} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-600 text-white shadow-lg shadow-blue-600/20">
            {data.category}
          </motion.span>
          <motion.h1 variants={fadeUp} className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-sans">
            {data.title}
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed max-w-2xl">
            {data.overview}
          </motion.p>
          
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3 pt-4 md:hidden">
            <button className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-5 rounded-xl transition-all shadow-md active:scale-98">
              <ExternalLink size={18} /> View Platform
            </button>
            <button className="p-3 bg-white/10 backdrop-blur-md rounded-xl text-white hover:bg-white/20 transition-all">
              <Heart size={20} />
            </button>
            <button className="p-3 bg-white/10 backdrop-blur-md rounded-xl text-white hover:bg-white/20 transition-all">
              <Bookmark size={20} />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
import { staggerContainer } from '@/utils/animations';
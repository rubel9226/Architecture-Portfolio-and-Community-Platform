// components/profile/ProfileHero.tsx
'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, MessageCircle, Share2, Plus } from 'lucide-react';
import { socialLinks } from '@/data/profileData';
import { DynamicIcon } from './DynamicIcon';
import { ProfileInfo } from '@/types';

export default function ProfileHero({ info }: { info: ProfileInfo }) {
  return (
    <section className="relative bg-white border-b border-slate-200 overflow-hidden">
      {/* Immersive Cover Canvas */}
      <div className="relative h-48 sm:h-72 w-full bg-slate-900 overflow-hidden">
        <Image src={info.coverImage} alt="Cover Architecture" fill priority className="object-cover opacity-70 scale-102" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      {/* Hero Bio Node Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end gap-5 -mt-16 sm:-mt-24 mb-6">
          {/* Avatar Anchor */}
          <motion.div initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5, ease: 'easeOut' }} className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-2xl bg-white border-4 border-white shadow-md overflow-hidden shrink-0">
            <Image src={info.avatar} alt={info.name} fill className="object-cover" />
          </motion.div>

          {/* Title Meta block */}
          <div className="space-y-2 flex-1 pt-2 md:pt-0">
            <div className="flex flex-wrap items-center gap-2">
              {info.badges.map((badge, idx) => (
                <span key={idx} className="bg-blue-50 text-blue-600 border border-blue-100 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md">
                  {badge}
                </span>
              ))}
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">{info.name}</h1>
            <p className="text-sm font-medium text-slate-600 flex items-center gap-2">
              <span className="flex items-center gap-1"><GraduationCap size={15} className="text-slate-400" /> {info.university}</span>
            </p>
            <p className="text-xs text-slate-400 font-medium flex items-center gap-1">
              <MapPin size={13} /> {info.location}
            </p>
          </div>

          {/* Primary Operations Rail */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto pt-3 md:pt-0">
            <button className="flex-1 md:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl shadow-xs transition-colors"><Plus size={15}/> Follow</button>
            <button className="flex-1 md:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold rounded-xl transition-colors"><MessageCircle size={15}/> Message</button>
            <button className="p-2 border border-slate-200 hover:bg-slate-50 text-slate-500 rounded-xl transition-colors"><Share2 size={15}/></button>
          </div>
        </div>

        {/* Detailed Description Grid Block */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-slate-100 items-center">
          <p className="md:col-span-2 text-sm text-slate-600 font-light leading-relaxed max-w-2xl">{info.bio}</p>
          <div className="flex items-center gap-3 md:justify-end">
            {socialLinks.map((link) => (
              <a key={link.id} href={link.url} className="p-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl text-slate-500 hover:text-slate-900 transition-all" title={link.name}>
                <DynamicIcon name={link.iconName} className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
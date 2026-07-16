// components/profile/ContactSection.tsx
'use client';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Globe, ArrowRight } from 'lucide-react';
import { fadeUpProfile } from '@/utils/animations';

export default function ContactSection() {
  const vectors = [
    { icon: Mail, value: 'r.hossen@archifolio.platform' },
    { icon: Phone, value: '+880 1711 000000' },
    { icon: MapPin, value: 'Dhaka, Bangladesh Node' },
    { icon: Globe, value: 'rubelhossen.design' }
  ];

  return (
    <motion.section {...fadeUpProfile} className="p-6 sm:p-8 bg-linear-to-b from-slate-900 to-slate-950 text-white rounded-2xl shadow-md grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      <div className="space-y-2">
        <h3 className="text-xl font-bold tracking-tight">Initiate Project Collaboration</h3>
        <p className="text-xs text-slate-400 font-light max-w-sm leading-relaxed">Available for elite parametric consultations, competitive design assemblies, and visualization mandates worldwide.</p>
      </div>
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-light text-slate-300">
          {vectors.map((vec, idx) => (
            <div key={idx} className="flex items-center gap-2 bg-white/5 border border-white/10 p-2.5 rounded-xl">
              <vec.icon size={14} className="text-blue-400 shrink-0" />
              <span className="truncate">{vec.value}</span>
            </div>
          ))}
        </div>
        <button type="button" className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md transition-colors">
          Transmit Brief RFP <ArrowRight size={13} />
        </button>
      </div>
    </motion.section>
  );
}
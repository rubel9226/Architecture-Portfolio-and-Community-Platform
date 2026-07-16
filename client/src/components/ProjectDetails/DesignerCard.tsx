import Image from 'next/image';
import { GraduationCap, MapPin, ArrowRight } from 'lucide-react';
import { Designer } from '@/types/project';

export default function DesignerCard({ designer }: { designer: Designer }) {
  return (
    <div className="p-6 bg-white border border-slate-200/80 shadow-xs rounded-2xl space-y-5">
      <div className="flex items-center gap-4">
        <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white ring-4 ring-slate-100">
          <Image src={designer.avatar} alt={designer.name} fill className="object-cover" />
        </div>
        <div>
          <h4 className="text-base font-bold text-slate-900">{designer.name}</h4>
          <div className="flex items-center gap-1 text-xs text-slate-500 font-medium">
            <MapPin size={12} /> {designer.country}
          </div>
        </div>
      </div>

      <div className="space-y-2 text-xs">
        <div className="flex items-start gap-2 text-slate-600">
          <GraduationCap size={15} className="text-slate-400 shrink-0 mt-0.5" />
          <span>{designer.university}</span>
        </div>
      </div>

      <p className="text-xs text-slate-500 font-light leading-relaxed">{designer.about}</p>

      <div className="flex gap-2 pt-2">
        <button className="flex-1 text-center bg-slate-900 hover:bg-slate-800 text-white font-medium py-2.5 px-4 rounded-xl text-xs transition-colors">
          Follow
        </button>
        <button className="flex-1 inline-flex items-center justify-center gap-1 border border-slate-200 hover:bg-slate-50 text-slate-700 font-medium py-2.5 px-4 rounded-xl text-xs transition-colors">
          Portfolio <ArrowRight size={12} />
        </button>
      </div>
    </div>
  );
}
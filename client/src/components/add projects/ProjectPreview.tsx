// components/projects/create/ProjectPreview.tsx
'use client';
import { useFormContext } from 'react-hook-form';
import Image from 'next/image';
import { Eye, MapPin, Calendar, Layers } from 'lucide-react'; 
import { ProjectFormData } from '@/types/addProject';

export default function ProjectPreview() {
    const { watch } = useFormContext<ProjectFormData>();
    
    const values = watch();
    
    const coverSrc = values.coverImage instanceof File 
        ? URL.createObjectURL(values.coverImage) 
        : 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80';

    return (
        <div className="sticky top-6 border border-slate-200 rounded-2xl bg-white shadow-3xs overflow-hidden hidden lg:block">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
            <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
            <Eye size={14} className="text-slate-400" /> Live Matrix Preview
            </span>
            <span className="text-[10px] bg-slate-200 text-slate-700 px-2 py-0.5 rounded-md font-bold uppercase tracking-wider">
            {values.visibility || 'PUBLIC'}
            </span>
        </div>

        {/* Hero Exhibition frame */}
        <div className="relative aspect-video w-full bg-slate-100">
            <Image src={coverSrc} alt="Preview Canvas Image" fill className="object-cover" unoptimized={values.coverImage instanceof File} />
            {values.category && (
            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2 py-0.5 rounded border border-slate-200 text-[9px] font-bold text-slate-800 uppercase tracking-wide">
                {values.category}
            </div>
            )}
        </div>

        {/* Structural Data Track */}
        <div className="p-5 space-y-4">
            <div className="space-y-1">
            <h2 className="text-base font-black text-slate-900 tracking-tight line-clamp-1">
                {values.title || 'Untitled Architectural Matrix'}
            </h2>
            <div className="flex items-center justify-between text-[11px] text-slate-400 font-medium">
                <span className="flex items-center gap-0.5"><MapPin size={11} /> {values.location || 'Location Context'}</span>
                <span className="flex items-center gap-0.5"><Calendar size={11} /> {values.year || '2026'}</span>
            </div>
            </div>

            <div className="space-y-1.5">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Overview Draft</span>
            <p className="text-xs text-slate-500 font-light leading-relaxed line-clamp-3">
                {values.overview || 'Provide an overview statement within the form array blocks to preview the core text layout execution.'}
            </p>
            </div>

            {values.softwareUsed && values.softwareUsed.length > 0 && (
            <div className="space-y-1.5">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Software Vector Stack</span>
                <div className="flex flex-wrap gap-1">
                {values.softwareUsed.map((sw, i) => (
                    <span key={i} className="text-[9px] font-medium bg-slate-50 text-slate-500 border border-slate-100 px-1.5 py-0.5 rounded">
                    {sw}
                    </span>
                ))}
                </div>
            </div>
            )}
        </div>
        </div>
    );
}
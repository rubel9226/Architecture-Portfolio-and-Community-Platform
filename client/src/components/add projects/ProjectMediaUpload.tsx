// components/projects/create/ProjectMediaUpload.tsx
'use client';
import { useState, useRef } from 'react';
import { useFormContext } from 'react-hook-form';
import Image from 'next/image';
import { Upload, X, Image as ImageIcon } from 'lucide-react';
import ProjectGallery from './ProjectGallery';
import { ProjectFormData } from '@/types/addProject';

export default function ProjectMediaUpload() {
    const { setValue, watch, formState: { errors } } = useFormContext<ProjectFormData>();
    const [coverPreview, setCoverPreview] = useState<string>('');
    const coverInputRef = useRef<HTMLInputElement>(null);
    
    const coverImage = watch('coverImage');

    const handleCoverChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
        setValue('coverImage', file, { shouldValidate: true });
        setCoverPreview(URL.createObjectURL(file));
        }
    };

    const clearCover = () => {
        setValue('coverImage', '', { shouldValidate: true });
        setCoverPreview('');
        if (coverInputRef.current) coverInputRef.current.value = '';
    };

    return (
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-3xs space-y-6">
        <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">2. Project Canvas Media</h3>
            <label className="text-xs font-bold text-slate-700 block">Primary Project Hero Deck Image *</label>
            
            {!coverPreview ? (
            <div 
                onClick={() => coverInputRef.current?.click()}
                className="border-2 border-dashed border-slate-200 hover:border-blue-500 transition-colors rounded-2xl p-6 flex flex-col items-center text-center justify-center cursor-pointer bg-slate-50/40 space-y-2"
            >
                <div className="p-3 bg-white border border-slate-100 rounded-xl text-slate-400 shadow-3xs">
                <Upload size={18} />
                </div>
                <div>
                <p className="text-xs font-bold text-slate-800">Drop primary canvas frame or browse</p>
                <p className="text-[10px] text-slate-400 font-light mt-0.5">Supports PNG, JPG, WEBP. Max 8MB. Recommended 1920x1080.</p>
                </div>
                <input 
                type="file" 
                ref={coverInputRef} 
                onChange={handleCoverChange} 
                accept="image/*" 
                className="hidden" 
                />
            </div>
            ) : (
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-50">
                <Image src={coverPreview} alt="Primary Canvas Deck Preview" fill className="object-cover" />
                <button 
                type="button" 
                onClick={clearCover}
                className="absolute top-3 right-3 p-1.5 bg-slate-900/80 backdrop-blur-md text-white hover:bg-slate-900 rounded-xl transition-colors"
                >
                <X size={14} />
                </button>
            </div>
            )}
            {errors.coverImage && <p className="text-[11px] font-medium text-red-500">{errors.coverImage.message}</p>}
        </div>

        <div className="border-t border-slate-100 pt-4">
            <ProjectGallery />
        </div>
        </div>
    );
}
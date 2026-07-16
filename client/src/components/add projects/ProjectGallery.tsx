// components/projects/create/ProjectGallery.tsx
'use client';
import { useState, useRef } from 'react';
import { useFormContext } from 'react-hook-form';
import Image from 'next/image';
import { Images, Trash2, Plus } from 'lucide-react';
import { ProjectFormData } from '@/types/addProject';

export default function ProjectGallery() {
    const { setValue, watch } = useFormContext<ProjectFormData>();
    const [previews, setPreviews] = useState<string[]>([]);
    const galleryInputRef = useRef<HTMLInputElement>(null);

    const currentGallery = watch('galleryImages') || [];

    const handleGalleryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);
        if (files.length > 0) {
        const updatedFiles = [...currentGallery, ...files];
        setValue('galleryImages', updatedFiles);
        
        const newPreviews = files.map(file => URL.createObjectURL(file));
        setPreviews(prev => [...prev, ...newPreviews]);
        }
    };

    const removeGalleryImage = (index: number) => {
        const updatedFiles = currentGallery.filter((_, i) => i !== index);
        setValue('galleryImages', updatedFiles);
        
        const updatedPreviews = previews.filter((_, i) => i !== index);
        setPreviews(updatedPreviews);
    };

    return (
        <div className="space-y-3">
        <div>
            <label className="text-xs font-bold text-slate-700">Project Support Exhibits Grid (Masonry / Gallery)</label>
            <p className="text-[10px] text-slate-400 font-light">Append detailed cross sections, site vectors, high-end visualization renders, or structural diagrams.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {previews.map((src, idx) => (
            <div key={idx} className="relative aspect-square border border-slate-200 rounded-xl overflow-hidden group bg-slate-50">
                <Image src={src} alt={`Exhibit Artifact ${idx + 1}`} fill className="object-cover" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button
                    type="button"
                    onClick={() => removeGalleryImage(idx)}
                    className="p-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors"
                >
                    <Trash2 size={14} />
                </button>
                </div>
            </div>
            ))}
            
            <button
            type="button"
            onClick={() => galleryInputRef.current?.click()}
            className="aspect-square border-2 border-dashed border-slate-200 hover:border-blue-500 rounded-xl flex flex-col items-center justify-center text-center p-4 bg-slate-50/30 transition-colors space-y-1"
            >
            <Images size={16} className="text-slate-400" />
            <span className="text-[11px] font-bold text-slate-700">Add Artifacts</span>
            <input 
                type="file" 
                ref={galleryInputRef} 
                onChange={handleGalleryChange} 
                multiple 
                accept="image/*" 
                className="hidden" 
            />
            </button>
        </div>
        </div>
    );
}
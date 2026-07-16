"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Images, Plus, Trash2, ArrowLeftRight } from "lucide-react";

interface GalleryEditorProps {
  images: string[];
  onChange: (images: string[]) => void;
}

export const GalleryEditor: React.FC<GalleryEditorProps> = ({ images, onChange }) => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleAddImages = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
        const fileUrls = Array.from(e.target.files).map(file => URL.createObjectURL(file));
        onChange([...images, ...fileUrls]);
        }
    };

    const handleRemove = (indexToRemove: number) => {
        onChange(images.filter((_, idx) => idx !== indexToRemove));
    };

    return (
        <section className="bg-neutral-950 border border-neutral-900 rounded-2xl p-6 md:p-8 space-y-4">
        <div className="flex items-center justify-between border-b border-neutral-900 pb-3">
            <h3 className="text-sm font-bold tracking-wider uppercase text-neutral-400 flex items-center gap-2">
            <Images size={16} /> 3. Architectural Blueprint Sheets & Media Portfolio
            </h3>
            <span className="text-xs font-mono text-neutral-500">{images.length} Loaded Assets</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {images.map((img, idx) => (
            <div key={idx} className="relative aspect-square bg-neutral-900 rounded-xl overflow-hidden border border-neutral-850 group">
                <Image src={img} alt={`Gallery index ${idx}`} fill className="object-cover" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5">
                <button
                    type="button"
                    onClick={() => handleRemove(idx)}
                    className="p-2 bg-neutral-950 text-rose-400 hover:bg-neutral-900 rounded-lg border border-neutral-850 transition-colors cursor-pointer"
                    title="Remove Entry"
                >
                    <Trash2 size={12} />
                </button>
                <button
                    type="button"
                    onClick={() => alert("Drag reorder positioning logic sequence (UI Hooked).")}
                    className="p-2 bg-neutral-950 text-neutral-300 hover:bg-neutral-900 rounded-lg border border-neutral-850 transition-colors cursor-pointer"
                    title="Reorder Element"
                >
                    <ArrowLeftRight size={12} />
                </button>
                </div>
                <div className="absolute bottom-2 left-2 px-1.5 py-0.5 bg-black/70 text-[9px] font-mono text-neutral-400 rounded border border-neutral-800">
                #{idx + 1}
                </div>
            </div>
            ))}
            
            <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="aspect-square bg-neutral-900/40 hover:bg-neutral-900 border-2 border-dashed border-neutral-850 hover:border-neutral-700 rounded-xl flex flex-col items-center justify-center text-center p-4 transition-all group cursor-pointer"
            >
            <Plus size={20} className="text-neutral-500 group-hover:text-neutral-300 transition-colors mb-1" />
            <span className="text-[11px] font-medium text-neutral-400 group-hover:text-neutral-200">Append Media</span>
            </button>
        </div>

        <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleAddImages} 
            multiple 
            accept="image/*" 
            className="hidden" 
        />
        </section>
    );
};
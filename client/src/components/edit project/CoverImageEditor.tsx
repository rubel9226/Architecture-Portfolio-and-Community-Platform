"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Image as ImageIcon, Upload, Trash2, Sliders } from "lucide-react";

interface CoverImageEditorProps {
    value: string;
    onChange: (url: string) => void;
}

export const CoverImageEditor: React.FC<CoverImageEditorProps> = ({ value, onChange }) => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
        const simulatedUrl = URL.createObjectURL(e.target.files[0]);
        onChange(simulatedUrl);
        }
    };

    return (
        <section className="bg-neutral-950 border border-neutral-900 rounded-2xl p-6 md:p-8 space-y-4">
        <h3 className="text-sm font-bold tracking-wider uppercase text-neutral-400 border-b border-neutral-900 pb-3 flex items-center gap-2">
            <ImageIcon size={16} /> 2. Hero Presentation Render
        </h3>

        <div className="relative aspect-[21/9] w-full bg-neutral-900 rounded-xl overflow-hidden group border border-neutral-850">
            {value ? (
            <>
                <Image src={value} alt="Cover Preview" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 backdrop-blur-xs">
                <button 
                    type="button" 
                    onClick={() => fileInputRef.current?.click()}
                    className="p-2.5 bg-neutral-900/90 text-white rounded-xl text-xs font-medium border border-neutral-800 hover:bg-neutral-800 transition-all flex items-center gap-1.5 cursor-pointer"
                >
                    <Upload size={14} /> Replace File
                </button>
                <button 
                    type="button" 
                    onClick={() => alert("Crop spatial mechanics visualization active (UI Demo Only).")}
                    className="p-2.5 bg-neutral-900/90 text-white rounded-xl text-xs font-medium border border-neutral-800 hover:bg-neutral-800 transition-all flex items-center gap-1.5 cursor-pointer"
                >
                    <Sliders size={14} /> Reframe Matrix
                </button>
                <button 
                    type="button" 
                    onClick={() => onChange("")}
                    className="p-2.5 bg-rose-950/90 text-rose-400 rounded-xl text-xs font-medium border border-rose-900/50 hover:bg-rose-900 transition-all flex items-center gap-1.5 cursor-pointer"
                >
                    <Trash2 size={14} /> Evict Image
                </button>
                </div>
            </>
            ) : (
            <div 
                onClick={() => fileInputRef.current?.click()}
                className="absolute inset-0 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-neutral-900/50 transition-colors p-6 border-2 border-dashed border-neutral-800 rounded-xl"
            >
                <Upload size={28} className="text-neutral-600 mb-2" />
                <span className="text-xs font-medium text-neutral-300">Submit Primary Architectural Render</span>
                <span className="text-[10px] text-neutral-500 mt-1">Recomended index metrics: 21:9 aspect ratio or 1920x820px</span>
            </div>
            )}
        </div>
        <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleFileChange} 
            accept="image/*" 
            className="hidden" 
        />
        </section>
    );
};
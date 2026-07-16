"use client";

import React from "react";
import Image from "next/image";
import { Eye, GraduationCap, MapPin, Cpu, Hash } from "lucide-react";

interface ProjectPreviewProps {
  formData: any;
}

export const ProjectPreview: React.FC<ProjectPreviewProps> = ({ formData }) => {
    const { title, shortDescription, category, coverImage, software = [], tags = [], visibility, university, location } = formData;

    return (
        <aside className="w-full xl:w-[380px] shrink-0 bg-neutral-950 border border-neutral-900 rounded-2xl p-5 space-y-5 h-fit sticky top-28">
            <div className="flex items-center justify-between border-b border-neutral-900 pb-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
                <Eye size={14} /> Pipeline Live Matrix View
                </h3>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-neutral-900 text-neutral-400 border border-neutral-850">
                {visibility || "draft"}
                </span>
            </div>

            <div className="relative aspect-[4/3] w-full bg-neutral-900 rounded-xl overflow-hidden border border-neutral-850">
                {coverImage ? (
                    <Image src={coverImage} alt="Realtime Preview" fill className="object-cover" />
                    ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-neutral-600 text-xs">
                        Awaiting Frame Asset...
                    </div>
                )}
                <div className="absolute top-3 left-3">
                    <span className="px-2 py-0.5 bg-black/80 border border-neutral-800 text-[9px] uppercase font-bold text-neutral-300 rounded">
                        {category || "Unassigned"}
                    </span>
                </div>
            </div>

            <div className="space-y-3">
                <h4 className="text-sm font-bold text-white tracking-tight line-clamp-2">
                    {title || "Untitled Architecture Asset"}
                </h4>
                <p className="text-xs text-neutral-400 font-light leading-relaxed line-clamp-3">
                    {shortDescription || "No overview narrative bound to validation layout hooks yet."}
                </p>
            </div>

            <div className="border-t border-neutral-900 pt-4 space-y-2.5 text-[11px] text-neutral-400 font-light">
                {university && (
                    <div className="flex items-center gap-2">
                        <GraduationCap size={12} className="text-neutral-600" />
                        <span className="truncate">{university}</span>
                    </div>
                )}
                {location && (
                    <div className="flex items-center gap-2">
                        <MapPin size={12} className="text-neutral-600" />
                        <span>{location}</span>
                    </div>
                )}
            </div>

            {software.length > 0 && (
                <div className="border-t border-neutral-900 pt-3 space-y-1.5">
                    <div className="text-[10px] font-bold tracking-wider text-neutral-500 uppercase flex items-center gap-1">
                        <Cpu size={10} /> Active Tools
                    </div>
                    <div className="flex flex-wrap gap-1">
                        {software.slice(0, 4).map((soft: string) => (
                        <span key={soft} className="text-[9px] px-1.5 py-0.5 bg-neutral-900 text-neutral-300 border border-neutral-850 rounded">
                            {soft}
                        </span>
                        ))}
                    </div>
                </div>
            )}

            {tags.length > 0 && (
                <div className="border-t border-neutral-900 pt-3 space-y-1.5">
                    <div className="text-[10px] font-bold tracking-wider text-neutral-500 uppercase flex items-center gap-1">
                        <Hash size={10} /> Classifiers
                    </div>
                    <div className="flex flex-wrap gap-1">
                        {tags.slice(0, 3).map((tag: string) => (
                            <span key={tag} className="text-[9px] text-neutral-400">
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </aside>
    );
};
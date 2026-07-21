"use client";

import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { MapPin, Calendar, Compass, Layers } from "lucide-react";
import { EditProjectFormData } from "@/types/editProject";

export default function EditProjectLivePreview() {
    const { watch } = useFormContext<EditProjectFormData>();
    const values = watch();
    const [coverUrl, setCoverUrl] = useState<string>("");

    useEffect(() => {
        if (values.coverImage instanceof File) {
        const url = URL.createObjectURL(values.coverImage);
        setCoverUrl(url);
        return () => URL.revokeObjectURL(url);
        } else if (typeof values.coverImage === "string") {
        setCoverUrl(values.coverImage);
        } else {
        setCoverUrl("");
        }
    }, [values.coverImage]);

    return (
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 backdrop-blur-sm space-y-4">
        <h3 className="text-sm font-semibold tracking-wide text-zinc-400 uppercase">Realtime Preview Render</h3>

        <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 shadow-2xl">
            <div className="relative aspect-video w-full bg-zinc-900">
            {coverUrl ? (
                <img src={coverUrl} alt="Preview Display" className="h-full w-full object-cover" />
            ) : (
                <div className="flex h-full w-full items-center justify-center text-xs text-zinc-600">
                No canvas layer selected
                </div>
            )}
            <span className="absolute top-3 right-3 rounded bg-zinc-950/80 px-2 py-0.5 text-[10px] uppercase tracking-wider text-emerald-400 border border-zinc-800 font-bold">
                {values.category || "Unclassified Asset"}
            </span>
            </div>

            <div className="p-4 space-y-3">
            <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                {values.projectType || "Type Specification"}
                </span>
                <h4 className="text-base font-bold text-zinc-100 truncate mt-0.5">
                {values.title || "Untitled Blueprint"}
                </h4>
            </div>

            <div className="flex flex-wrap items-center gap-y-1.5 gap-x-3 text-xs text-zinc-400 border-t border-b border-zinc-900 py-2.5">
                <span className="flex items-center gap-1">
                <MapPin className="h-3 w-3 text-zinc-500" />
                {values.location || "Undisclosed Location"}
                </span>
                <span className="flex items-center gap-1">
                <Calendar className="h-3 w-3 text-zinc-500" />
                {values.year || "----"}
                </span>
            </div>

            <p className="text-xs text-zinc-500 line-clamp-3 leading-relaxed">
                {values.overview || "Provide project metrics within the form module to build real-time descriptive copy layers."}
            </p>

            {values.softwareUsed && values.softwareUsed.length > 0 && (
                <div className="pt-1">
                <div className="flex flex-wrap gap-1">
                    {values.softwareUsed.slice(0, 3).map((sw, i) => (
                    <span key={i} className="rounded bg-zinc-900 px-1.5 py-0.5 text-[9px] text-zinc-400 border border-zinc-800">
                        {sw}
                    </span>
                    ))}
                    {values.softwareUsed.length > 3 && (
                    <span className="text-[9px] text-zinc-600 self-center">+{values.softwareUsed.length - 3} more</span>
                    )}
                </div>
                </div>
            )}
            </div>
        </div>
        </div>
    );
}
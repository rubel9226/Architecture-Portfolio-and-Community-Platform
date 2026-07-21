"use client";

import React, { useRef, useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { Images, Plus, X, CloudLightning } from "lucide-react";
import { EditProjectFormData } from "@/types/editProject";

export default function EditProjectGallery() {
    const { setValue, watch } = useFormContext<EditProjectFormData>();
    const fileInputRef = useRef<HTMLInputElement>(null);
    const galleryItems = watch("galleryImages") || [];
    const [objectUrls, setObjectUrls] = useState<string[]>([]);

    useEffect(() => {
        const urls = galleryItems.map((item) => {
        if (item instanceof File) {
            return URL.createObjectURL(item);
        }
        return item; // Cloudinary URL
        });
        setObjectUrls(urls);

        return () => {
        urls.forEach((url) => {
            if (url.startsWith("blob:")) URL.revokeObjectURL(url);
        });
        };
    }, [galleryItems]);

    const handleGalleryUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
        const filesArray = Array.from(e.target.files);
        setValue("galleryImages", [...galleryItems, ...filesArray], { shouldValidate: true });
        }
    };

    const removeGalleryItem = (indexToRemove: number) => {
        setValue("galleryImages", galleryItems.filter((_, i) => i !== indexToRemove), { shouldValidate: true });
    };

    return (
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-sm space-y-4">
        <div className="flex items-center gap-2 border-b border-zinc-800 pb-4">
            <Images className="h-5 w-5 text-emerald-500" />
            <h2 className="text-lg font-semibold text-zinc-100">Project Blueprint & Media Gallery</h2>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {objectUrls.map((url, idx) => {
            const isRemote = typeof galleryItems[idx] === "string";
            return (
                <div key={idx} className="group relative aspect-square overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950">
                <img src={url} alt={`Gallery grid item ${idx}`} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                <button
                    type="button"
                    onClick={() => removeGalleryItem(idx)}
                    className="absolute top-1.5 right-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-zinc-950/80 border border-zinc-800 text-zinc-400 hover:text-zinc-100 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity"
                >
                    <X className="h-3.5 w-3.5" />
                </button>
                {isRemote && (
                    <span className="absolute bottom-1.5 left-1.5 flex items-center gap-0.5 rounded bg-zinc-950/80 px-1 py-0.5 text-[9px] text-zinc-400 border border-zinc-800">
                    <CloudLightning className="h-2 w-2 text-blue-400" /> CDN
                    </span>
                )}
                </div>
            );
            })}

            <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="flex aspect-square flex-col items-center justify-center rounded-lg border border-dashed border-zinc-800 bg-zinc-950/50 hover:bg-zinc-950 hover:border-zinc-700 text-zinc-500 hover:text-zinc-300 transition-all"
            >
            <Plus className="h-6 w-6 mb-1" />
            <span className="text-xs font-medium">Add Media</span>
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleGalleryUpload}
                multiple
                accept="image/*"
                className="hidden"
            />
            </button>
        </div>
        </div>
    );
}
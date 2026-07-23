"use client";

import React, { useRef, useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { ImagePlus, CloudLightning, Eye } from "lucide-react";
import { EditProjectFormData } from "@/types";

interface EditProjectMediaUploadProps {
  existingCover?: string;
}

export default function EditProjectMediaUpload({ existingCover }: EditProjectMediaUploadProps) {
    const { setValue, watch, formState: { errors } } = useFormContext<EditProjectFormData>();
    const fileInputRef = useRef<HTMLInputElement>(null);
    const currentCover = watch("coverImage");
    const [previewUrl, setPreviewUrl] = useState<string>("");

    useEffect(() => {
        if (!currentCover && existingCover) {
        setPreviewUrl(existingCover);
        } else if (currentCover instanceof File) {
        const objectUrl = URL.createObjectURL(currentCover);
        setPreviewUrl(objectUrl);
        return () => URL.revokeObjectURL(objectUrl);
        } else if (typeof currentCover === "string") {
        setPreviewUrl(currentCover);
        }
    }, [currentCover, existingCover]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
        const file = e.target.files[0];
        setValue("coverImage", file, { shouldValidate: true });
        }
    };

    return (
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-sm space-y-4">
        <div className="flex items-center gap-2 border-b border-zinc-800 pb-4">
            <ImagePlus className="h-5 w-5 text-emerald-500" />
            <h2 className="text-lg font-semibold text-zinc-100">Cover Hero Asset</h2>
        </div>

        <div 
            onClick={() => fileInputRef.current?.click()}
            className="group relative flex min-h-[220px] cursor-pointer flex-col items-center justify-center overflow-hidden rounded-xl border border-dashed border-zinc-800 bg-zinc-950 p-4 text-center hover:border-zinc-700 transition-all"
        >
            <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            className="hidden"
            />

            {previewUrl ? (
            <>
                <img src={previewUrl} alt="Cover Preview" className="absolute inset-0 h-full w-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-zinc-950/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all backdrop-blur-xs">
                <span className="flex items-center gap-2 rounded-lg bg-zinc-900/90 px-4 py-2 text-xs font-medium text-zinc-200 border border-zinc-700">
                    <Eye className="h-3.5 w-3.5" /> Modify Cover Image
                </span>
                </div>
                {typeof currentCover === "string" && (
                <span className="absolute bottom-3 right-3 flex items-center gap-1 rounded bg-zinc-950/80 px-2 py-0.5 text-[10px] tracking-wide text-zinc-400 border border-zinc-800">
                    <CloudLightning className="h-2.5 w-2.5 text-blue-400" /> Remote CDN
                </span>
                )}
            </>
            ) : (
            <div className="space-y-2">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 group-hover:text-zinc-200 transition-colors">
                <ImagePlus className="h-5 w-5" />
                </div>
                <p className="text-sm font-medium text-zinc-300">Upload primary visual asset</p>
                <p className="text-xs text-zinc-500">Supports high-res JPG, PNG, WEBP metrics</p>
            </div>
            )}
        </div>
        {errors.coverImage && <p className="text-xs text-red-500 mt-1">{errors.coverImage.message as string}</p>}
        </div>
    );
}
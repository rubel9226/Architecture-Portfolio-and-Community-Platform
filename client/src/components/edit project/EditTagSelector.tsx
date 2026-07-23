"use client";

import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import { Hash, Plus, X } from "lucide-react";
import { EditProjectFormData } from "@/types";

export default function EditTagSelector() {
    const { setValue, watch } = useFormContext<EditProjectFormData>();
    const [tagInput, setTagInput] = useState("");
    const tags = watch("tags") || [];

    const addTag = () => {
        let clean = tagInput.trim().replace(/^#/, "");
        if (clean && !tags.includes(clean)) {
        setValue("tags", [...tags, clean], { shouldValidate: true });
        setTagInput("");
        }
    };

    const removeTag = (idx: number) => {
        setValue("tags", tags.filter((_, i) => i !== idx), { shouldValidate: true });
    };

    return (
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-sm space-y-4">
        <div className="flex items-center gap-2 border-b border-zinc-800 pb-4">
            <Hash className="h-5 w-5 text-emerald-500" />
            <h2 className="text-lg font-semibold text-zinc-100">Metadata Keywords & Indexing</h2>
        </div>

        <div className="flex gap-2">
            <input
            type="text"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); addTag(); } }}
            className="flex-1 rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-2 text-zinc-100 placeholder-zinc-500 focus:border-emerald-500 focus:outline-none text-sm"
            placeholder="e.g., parametric-facade"
            />
            <button
            type="button"
            onClick={addTag}
            className="flex items-center justify-center rounded-lg bg-zinc-800 hover:bg-zinc-700 px-4 text-zinc-200 transition-colors"
            >
            <Plus className="h-4 w-4" />
            </button>
        </div>

        <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag, i) => (
            <span key={i} className="flex items-center gap-1 rounded-md bg-zinc-950 px-2.5 py-1 text-xs text-emerald-400 border border-zinc-800/80">
                #{tag}
                <button type="button" onClick={() => removeTag(i)} className="text-zinc-600 hover:text-zinc-400 ml-1">
                <X className="h-3 w-3" />
                </button>
            </span>
            ))}
        </div>
        </div>
    );
}
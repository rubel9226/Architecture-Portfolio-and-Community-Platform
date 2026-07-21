"use client";

import React, { KeyboardEvent } from "react";
import { useFormContext } from "react-hook-form";
import { X } from "lucide-react";

export default function TagSelector() {
  const { setValue, watch, formState: { errors } } = useFormContext();
  const tags: string[] = watch("tags") || [];

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      const input = e.currentTarget;
      const val = input.value.trim().toLowerCase();
      
      if (val && !tags.includes(val)) {
        setValue("tags", [...tags, val], { shouldValidate: true });
      }
      input.value = "";
    }
  };

  const removeTag = (index: number) => {
    setValue("tags", tags.filter((_, i) => i !== index), { shouldValidate: true });
  };

  return (
    <section className="bg-white p-6 rounded-lg border border-neutral-200 space-y-4">
      <div>
        <h2 className="text-lg font-medium text-neutral-800">Indexing Tags *</h2>
        <p className="text-xs text-neutral-400 mt-0.5">Press Enter or comma to insert distinct design tags</p>
      </div>
      
      <div className="space-y-3">
        <input
          type="text"
          onKeyDown={handleKeyDown}
          placeholder="e.g., minimalist, sustainable, timber structure"
          className="w-full px-3 py-2 border border-neutral-300 rounded text-sm focus:outline-none focus:border-neutral-900"
        />
        
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag, i) => (
              <span key={tag} className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-neutral-100 border border-neutral-200 text-xs text-neutral-700 font-medium">
                #{tag}
                <button type="button" onClick={() => removeTag(i)} className="text-neutral-400 hover:text-neutral-600 transition">
                  <X className="h-3 w-3" />
                </button>
              </span>
            ))}
          </div>
        )}
      </div>
      {errors.tags && <p className="text-xs text-red-500 mt-1">{String(errors.tags.message)}</p>}
    </section>
  );
}
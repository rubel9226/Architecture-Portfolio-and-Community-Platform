"use client";

import React from "react";
import { useFormContext } from "react-hook-form";
import { Layers } from "lucide-react";
import { EditProjectFormData } from "@/types";

const ARCHITECTURE_CATEGORIES = [
  "Residential Architecture",
  "Commercial & Office",
  "Institutional & Cultural",
  "Industrial Design",
  "Landscape & Urban Planning",
  "Interior Architecture",
  "Sustainable & Green Design",
  "Renovation & Restoration"
];

export default function EditCategorySelector() {
    const { register, watch, setValue, formState: { errors } } = useFormContext<EditProjectFormData>();
    const activeCategory = watch("category");

    return (
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-sm space-y-4">
        <div className="flex items-center gap-2 border-b border-zinc-800 pb-4">
            <Layers className="h-5 w-5 text-emerald-500" />
            <h2 className="text-lg font-semibold text-zinc-100">Classification Category</h2>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {ARCHITECTURE_CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
                <button
                key={cat}
                type="button"
                onClick={() => setValue("category", cat, { shouldValidate: true })}
                className={`flex items-center justify-between rounded-lg p-3.5 border text-left transition-all ${
                    isSelected
                    ? "border-emerald-500 bg-emerald-950/20 text-emerald-400 font-medium"
                    : "border-zinc-800 bg-zinc-950 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
                }`}
                >
                <span className="text-sm">{cat}</span>
                <input
                    type="radio"
                    value={cat}
                    checked={isSelected}
                    {...register("category")}
                    className="sr-only"
                />
                {isSelected && <span className="h-2 w-2 rounded-full bg-emerald-400" />}
                </button>
            );
            })}
        </div>
        {errors.category && <p className="text-xs text-red-500 mt-1">{errors.category.message}</p>}
        </div>
    );
}
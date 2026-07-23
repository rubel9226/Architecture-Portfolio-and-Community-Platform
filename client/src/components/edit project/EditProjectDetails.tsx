"use client";

import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import { Sliders, Plus, X } from "lucide-react";
import { EditProjectFormData } from "@/types";

export default function EditProjectDetails() {
    const { register, setValue, watch, formState: { errors } } = useFormContext<EditProjectFormData>();
    const [materialInput, setMaterialInput] = useState("");
    const materialsUsed = watch("materialsUsed") || [];

    const addMaterial = () => {
        if (materialInput.trim() && !materialsUsed.includes(materialInput.trim())) {
        setValue("materialsUsed", [...materialsUsed, materialInput.trim()], { shouldValidate: true });
        setMaterialInput("");
        }
    };

    const removeMaterial = (idx: number) => {
        setValue("materialsUsed", materialsUsed.filter((_, i) => i !== idx), { shouldValidate: true });
    };

    return (
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-sm space-y-6">
        <div className="flex items-center gap-2 border-b border-zinc-800 pb-4">
            <Sliders className="h-5 w-5 text-emerald-500" />
            <h2 className="text-lg font-semibold text-zinc-100">Specifications & Context</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-300">Project Year *</label>
            <input
                {...register("year", { valueAsNumber: true })}
                type="number"
                className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-2.5 text-zinc-100 focus:border-emerald-500 focus:outline-none text-sm"
            />
            {errors.year && <p className="text-xs text-red-500">{errors.year.message}</p>}
            </div>

            <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-300">Location Space *</label>
            <input
                {...register("location")}
                type="text"
                className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-2.5 text-zinc-100 focus:border-emerald-500 focus:outline-none text-sm"
                placeholder="e.g., Kyoto, Japan"
            />
            {errors.location && <p className="text-xs text-red-500">{errors.location.message}</p>}
            </div>

            <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-300">University / Center</label>
            <input
                {...register("university")}
                type="text"
                className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-2.5 text-zinc-100 focus:border-emerald-500 focus:outline-none text-sm"
                placeholder="Academic alignment if any"
            />
            </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-300">Client / Institution Name</label>
            <input
                {...register("clientName")}
                type="text"
                className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-2.5 text-zinc-100 focus:border-emerald-500 focus:outline-none text-sm"
                placeholder="e.g., Mori Building Co."
            />
            </div>

            <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-300">Design Concept Paradigm</label>
            <input
                {...register("designConcept")}
                type="text"
                className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-2.5 text-zinc-100 focus:border-emerald-500 focus:outline-none text-sm"
                placeholder="e.g., Parametric Minimalism"
            />
            </div>
        </div>

        <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-300">Materials Configured</label>
            <div className="flex gap-2">
            <input
                type="text"
                value={materialInput}
                onChange={(e) => setMaterialInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); addMaterial(); } }}
                className="flex-1 rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-2.5 text-zinc-100 placeholder-zinc-500 focus:border-emerald-500 focus:outline-none text-sm"
                placeholder="e.g., Cross-Laminated Timber (CLT)"
            />
            <button
                type="button"
                onClick={addMaterial}
                className="flex items-center justify-center rounded-lg bg-zinc-800 hover:bg-zinc-700 px-4 text-zinc-200 transition-colors"
            >
                <Plus className="h-4 w-4" />
            </button>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
            {/* {materialsUsed.map((mat, i) => (
                <span key={i} className="flex items-center gap-1.5 rounded-md bg-zinc-800/40 px-2.5 py-1 text-xs text-zinc-300 border border-zinc-800">
                {mat}
                <button type="button" onClick={() => removeMaterial(i)} className="text-zinc-500 hover:text-zinc-300">
                    <X className="h-3 w-3" />
                </button>
                </span>
            ))} */}
            </div>
        </div>
        </div>
    );
}
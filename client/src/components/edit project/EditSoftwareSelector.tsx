"use client";

import React from "react";
import { useFormContext } from "react-hook-form";
import { Cpu } from "lucide-react";
import { EditProjectFormData } from "@/types/editProject";

const SOFTWARE_OPTIONS = [
  "Autodesk AutoCAD",
  "Rhinoceros 3D",
  "Trimble SketchUp",
  "Autodesk Revit",
  "ArchiCAD",
  "Lumion",
  "V-Ray",
  "Blender",
  "Adobe Photoshop",
  "Enscape"
];

export default function EditSoftwareSelector() {
    const { setValue, watch, formState: { errors } } = useFormContext<EditProjectFormData>();
    const activeSoftware = watch("softwareUsed") || [];

    const toggleSoftware = (software: string) => {
        if (activeSoftware.includes(software)) {
        setValue("softwareUsed", activeSoftware.filter((s) => s !== software), { shouldValidate: true });
        } else {
        setValue("softwareUsed", [...activeSoftware, software], { shouldValidate: true });
        }
    };

    return (
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-sm space-y-4">
        <div className="flex items-center gap-2 border-b border-zinc-800 pb-4">
            <Cpu className="h-5 w-5 text-emerald-500" />
            <h2 className="text-lg font-semibold text-zinc-100">Software Suite Pipeline</h2>
        </div>

        <div className="flex flex-wrap gap-2">
            {SOFTWARE_OPTIONS.map((software) => {
            const isSelected = activeSoftware.includes(software);
            return (
                <button
                key={software}
                type="button"
                onClick={() => toggleSoftware(software)}
                className={`rounded-lg px-4 py-2 text-xs border font-medium transition-all ${
                    isSelected
                    ? "border-emerald-500 bg-emerald-950/30 text-emerald-400"
                    : "border-zinc-800 bg-zinc-950 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
                }`}
                >
                {software}
                </button>
            );
            })}
        </div>
        {errors.softwareUsed && <p className="text-xs text-red-500 mt-1">{errors.softwareUsed.message}</p>}
        </div>
    );
}
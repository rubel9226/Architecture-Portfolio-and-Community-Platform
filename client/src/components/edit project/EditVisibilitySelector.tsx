"use client";

import React from "react";
import { useFormContext } from "react-hook-form";
import { Eye, ShieldAlert, Lock } from "lucide-react";
import { EditProjectFormData, ProjectVisibility } from "@/types";

const VISIBILITY_MODES = [
  { value: "public", label: "Public Portfolio", desc: "Visible globally across search rankings.", icon: Eye },
  { value: "unlisted", label: "Unlisted Access", desc: "Accessible only via structural workspace links.", icon: ShieldAlert },
  { value: "private", label: "Restricted Private", desc: "Visible exclusively to internal authenticated nodes.", icon: Lock }
];

export default function EditVisibilitySelector() {
    const { setValue, watch } = useFormContext<EditProjectFormData>();
    const currentVisibility = watch("visibility");

    return (
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 backdrop-blur-sm space-y-4">
        <h3 className="text-sm font-semibold tracking-wide text-zinc-400 uppercase">System Policy</h3>
        
        <div className="space-y-2.5">
            {VISIBILITY_MODES.map((mode) => {
            const Icon = mode.icon;
            const isSelected = currentVisibility === mode.value;

            return (
                <button
                key={mode.value}
                type="button"
                onClick={() => setValue("visibility", mode.value as ProjectVisibility)}
                className={`flex w-full items-start gap-3 rounded-lg p-3 text-left border transition-all ${
                    isSelected
                    ? "border-emerald-500 bg-emerald-950/10 text-zinc-100"
                    : "border-zinc-800 bg-zinc-950 text-zinc-400 hover:border-zinc-700"
                }`}
                >
                <Icon className={`mt-0.5 h-4 w-4 shrink-0 ${isSelected ? "text-emerald-400" : "text-zinc-500"}`} />
                <div>
                    <p className="text-xs font-semibold">{mode.label}</p>
                    <p className="text-[11px] text-zinc-500 mt-0.5 leading-normal">{mode.desc}</p>
                </div>
                </button>
            );
            })}
        </div>
        </div>
    );
}
"use client";

import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import { Plus, X, FolderKanban, Users } from "lucide-react";
import { EditProjectFormData } from "@/types";

export default function EditProjectInformation() {
    const { register, setValue, watch, formState: { errors } } = useFormContext<EditProjectFormData>();
    const [memberInput, setMemberInput] = useState("");
    const teamMembers = watch("teamMembers") || [];

    const addTeamMember = () => {
        if (memberInput.trim() && !teamMembers.includes(memberInput.trim())) {
        setValue("teamMembers", [...teamMembers, memberInput.trim()], { shouldValidate: true });
        setMemberInput("");
        }
    };

    const removeTeamMember = (indexToRemove: number) => {
        setValue("teamMembers", teamMembers.filter((_, i) => i !== indexToRemove), { shouldValidate: true });
    };

    return (
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-sm space-y-6">
        <div className="flex items-center gap-2 border-b border-zinc-800 pb-4">
            <FolderKanban className="h-5 w-5 text-emerald-500" />
            <h2 className="text-lg font-semibold text-zinc-100">Project Overview</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-300">Project Title *</label>
            <input
                {...register("title")}
                type="text"
                className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-2.5 text-zinc-100 placeholder-zinc-500 focus:border-emerald-500 focus:outline-none transition-colors text-sm"
                placeholder="e.g., Vertical Forest Residences"
            />
            {errors.title && <p className="text-xs text-red-500">{errors.title.message}</p>}
            </div>

            <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-300">Project Type *</label>
            <input
                {...register("projectType")}
                type="text"
                className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-2.5 text-zinc-100 placeholder-zinc-500 focus:border-emerald-500 focus:outline-none transition-colors text-sm"
                placeholder="e.g., Residential, Commercial, Exhibition"
            />
            {errors.projectType && <p className="text-xs text-red-500">{errors.projectType.message}</p>}
            </div>
        </div>

        <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-300">Detailed Description / Overview *</label>
            <textarea
            {...register("overview")}
            rows={5}
            className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-2.5 text-zinc-100 placeholder-zinc-500 focus:border-emerald-500 focus:outline-none transition-colors text-sm resize-none"
            placeholder="Describe the context, client requirements, and overall scope of the architectural masterplan..."
            />
            {errors.overview && <p className="text-xs text-red-500">{errors.overview.message}</p>}
        </div>

        <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-300">Team Members</label>
            <div className="flex gap-2">
            <div className="relative flex-1">
                <Users className="absolute left-3 top-3 h-4 w-4 text-zinc-500" />
                <input
                type="text"
                value={memberInput}
                onChange={(e) => setMemberInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); addTeamMember(); } }}
                className="w-full rounded-lg border border-zinc-800 bg-zinc-950 pl-10 pr-4 py-2.5 text-zinc-100 placeholder-zinc-500 focus:border-emerald-500 focus:outline-none transition-colors text-sm"
                placeholder="Add professional collaborator..."
                />
            </div>
            <button
                type="button"
                onClick={addTeamMember}
                className="flex items-center justify-center rounded-lg bg-zinc-800 hover:bg-zinc-700 px-4 transition-colors text-zinc-200"
            >
                <Plus className="h-4 w-4" />
            </button>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
            {/* {teamMembers.map((member, index) => (
                <span key={index} className="flex items-center gap-1.5 rounded-md bg-zinc-800 px-2.5 py-1 text-xs text-zinc-300 border border-zinc-700">
                {member}
                <button type="button" onClick={() => removeTeamMember(index)} className="text-zinc-500 hover:text-zinc-300">
                    <X className="h-3 w-3" />
                </button>
                </span>
            ))} */}
            </div>
        </div>
        </div>
    );
}
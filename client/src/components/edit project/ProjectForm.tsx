"use client";

import React from "react";
import { UseFormReturn, Controller } from "react-hook-form";
import { Layers, MapPin, Calendar, GraduationCap, Briefcase, Users, CheckCircle } from "lucide-react";
import { CoverImageEditor } from "./CoverImageEditor";
import { GalleryEditor } from "./GalleryEditor";
import { ProjectDescription } from "./ProjectDescription";
import { SoftwareSelector } from "./SoftwareSelector";
import { TagSelector } from "./TagSelector";
import { VisibilitySelector } from "./VisibilitySelector";
import { CategoryOption, SoftwareOption } from "@/types/editProject";

interface ProjectFormProps {
  formMethods: UseFormReturn<any>;
  categoryOptions: CategoryOption[];
  softwareOptions: SoftwareOption[];
}

export const ProjectForm: React.FC<ProjectFormProps> = ({
    formMethods,
    categoryOptions,
    softwareOptions
}) => {
    const { register, control, formState: { errors } } = formMethods;

    const infoFields = [
        { name: "projectType", label: "Project Typonomy / Context", placeholder: "e.g., Mixed-Use Highrise, Installation", icon: <Layers size={14} /> },
        { name: "year", label: "Year of Design", placeholder: "2026", type: "number", icon: <Calendar size={14} /> },
        { name: "location", label: "Geographical Location", placeholder: "e.g., Berlin, Germany", icon: <MapPin size={14} /> },
        { name: "university", label: "Academic Affiliation", placeholder: "e.g., AA School of Architecture", icon: <GraduationCap size={14} /> },
        { name: "clientName", label: "Commission / Client", placeholder: "e.g., Private, Competition Board", icon: <Briefcase size={14} /> },
        { name: "teamMembers", label: "Collaborators / Team", placeholder: "e.g., John Doe, Sarah Jenkins", icon: <Users size={14} /> },
    ];

    return (
        <div className="space-y-10">
        {/* 1. Core Meta */}
            <section className="bg-neutral-950 border border-neutral-900 rounded-2xl p-6 md:p-8 space-y-6">
                <h3 className="text-sm font-bold tracking-wider uppercase text-neutral-400 border-b border-neutral-900 pb-3">
                1. Fundamental Identity
                </h3>
                
                <div className="space-y-4">
                <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1.5">Project Title</label>
                    <input 
                    type="text" 
                    {...register("title", { required: "A core title index is required" })}
                    className="w-full bg-neutral-900 border border-neutral-800 text-white px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-neutral-600 transition-all font-light"
                    placeholder="e.g., The Biophilic Monolith"
                    />
                    {errors.title && <p className="text-xs text-rose-500 mt-1">{String(errors.title.message)}</p>}
                </div>

                <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1.5">Abstract / Short Summary</label>
                    <textarea 
                    rows={3}
                    {...register("shortDescription", { required: "Provide an executive operational summary" })}
                    className="w-full bg-neutral-900 border border-neutral-800 text-white px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-neutral-600 transition-all font-light resize-none leading-relaxed"
                    placeholder="Provide a micro summary parameters of the architecture scale..."
                    />
                    {errors.shortDescription && <p className="text-xs text-rose-500 mt-1">{String(errors.shortDescription.message)}</p>}
                </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1.5">Primary Taxonomy Category</label>
                    <select
                    {...register("category")}
                    className="w-full bg-neutral-900 border border-neutral-800 text-white px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-neutral-600 transition-all appearance-none cursor-pointer font-light"
                    >
                    {categoryOptions.map((cat) => (
                        <option key={cat.id} value={cat.id} className="bg-neutral-950 text-neutral-300">{cat.name}</option>
                    ))}
                    </select>
                </div>

                <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1.5">Operational Phase Status</label>
                    <select
                    {...register("status")}
                    className="w-full bg-neutral-900 border border-neutral-800 text-white px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-neutral-600 transition-all appearance-none cursor-pointer font-light"
                    >
                    <option value="concept" className="bg-neutral-950">Theoretical / Concept</option>
                    <option value="in-progress" className="bg-neutral-950">In Progress Development</option>
                    <option value="completed" className="bg-neutral-950">Realized Built Structure</option>
                    </select>
                </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {infoFields.map((field) => (
                    <div key={field.name}>
                    <label className="flex items-center gap-1.5 text-xs font-semibold text-neutral-400 mb-1.5">
                        {field.icon}
                        <span>{field.label}</span>
                    </label>
                    <input 
                        type={field.type || "text"}
                        {...register(field.name)}
                        placeholder={field.placeholder}
                        className="w-full bg-neutral-900 border border-neutral-800 text-white px-4 py-2.5 rounded-xl text-xs focus:outline-none focus:border-neutral-600 transition-all font-light"
                    />
                    </div>
                ))}
                </div>
            </section>

            {/* 2. Media Upload Systems */}
            <Controller 
                name="coverImage"
                control={control}
                render={({ field }) => (
                <CoverImageEditor value={field.value} onChange={field.onChange} />
                )}
            />

            <Controller 
                name="gallery"
                control={control}
                render={({ field }) => (
                <GalleryEditor images={field.value || []} onChange={field.onChange} />
                )}
            />

            {/* 3. Narrative Documentation Text blocks */}
            <ProjectDescription register={register} />

            {/* 4. Categorization Matrix Elements */}
            <Controller 
                name="software"
                control={control}
                render={({ field }) => (
                <SoftwareSelector 
                    options={softwareOptions} 
                    selected={field.value || []} 
                    onChange={field.onChange} 
                />
                )}
            />

            <Controller 
                name="tags"
                control={control}
                render={({ field }) => (
                <TagSelector tags={field.value || []} onChange={field.onChange} />
                )}
            />

            <Controller 
                name="visibility"
                control={control}
                render={({ field }) => (
                <VisibilitySelector current={field.value} onChange={field.onChange} />
                )}
            />
        </div>
    );
};
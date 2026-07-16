"use client";

import React from "react";
import { UseFormRegister } from "react-hook-form";
import { Info, Sparkles, Box, Hammer, ShieldAlert, CheckCircle } from "lucide-react";

interface ProjectDescriptionProps {
  register: UseFormRegister<any>;
}

export const ProjectDescription: React.FC<ProjectDescriptionProps> = ({ register }) => {
    const narrativeBlocks = [
        { name: "description.overview", label: "Executive Narrative / Overview", placeholder: "Detail structural coordinates and programmatic vision...", icon: <Info size={12} /> },
        { name: "description.designConcept", label: "Theoretical Design Concept", placeholder: "Explain underlying spatial design geometries...", icon: <Sparkles size={12} /> },
        { name: "description.materials", label: "Material Framework & Textures", placeholder: "Specify tectonic materials, carbon offsets...", icon: <Box size={12} /> },
        { name: "description.constructionProcess", label: "Construction Process / Logistics", placeholder: "Document prefabricated schedules, assembly paths...", icon: <Hammer size={12} /> },
        { name: "description.challenges", label: "Structural Constraints & Challenges", placeholder: "What topography or physical variables posed risk...", icon: <ShieldAlert size={12} /> },
        { name: "description.solutions", label: "Engineering & Architectural Mitigation", placeholder: "How spatial resolution resolved early engineering friction...", icon: <CheckCircle size={12} /> },
    ];

    return (
        <section className="bg-neutral-950 border border-neutral-900 rounded-2xl p-6 md:p-8 space-y-6">
            <h3 className="text-sm font-bold tracking-wider uppercase text-neutral-400 border-b border-neutral-900 pb-3">
                4. Tectonic Analysis & Project Dossier
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {narrativeBlocks.map((block) => (
                    <div key={block.name} className="space-y-1.5">
                        <label className="flex items-center gap-1.5 text-xs font-semibold text-neutral-300">
                            <span className="text-neutral-500">{block.icon}</span>
                            <span>{block.label}</span>
                        </label>
                        <textarea
                            rows={4}
                            {...register(block.name)}
                            placeholder={block.placeholder}
                            className="w-full bg-neutral-900 border border-neutral-800 text-white px-4 py-3 rounded-xl text-xs focus:outline-none focus:border-neutral-600 transition-all font-light resize-none leading-relaxed"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};
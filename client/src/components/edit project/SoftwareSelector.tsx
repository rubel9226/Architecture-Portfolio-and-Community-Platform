"use client";

import React from "react";
import { Cpu, Check } from "lucide-react";
import { SoftwareOption } from "@/types/editProject";

interface SoftwareSelectorProps {
  options: SoftwareOption[];
  selected: string[];
  onChange: (software: string[]) => void;
}

export const SoftwareSelector: React.FC<SoftwareSelectorProps> = ({ options, selected, onChange }) => {
    const handleToggle = (name: string) => {
        if (selected.includes(name)) {
        onChange(selected.filter((item) => item !== name));
        } else {
        onChange([...selected, name]);
        }
    };

    return (
        <section className="bg-neutral-950 border border-neutral-900 rounded-2xl p-6 md:p-8 space-y-4">
            <h3 className="text-sm font-bold tracking-wider uppercase text-neutral-400 border-b border-neutral-900 pb-3 flex items-center gap-2">
                <Cpu size={16} /> 5. Toolchain Validation (Software)
            </h3>

            <div className="flex flex-wrap gap-2">
                {options.map((option) => {
                const isSelected = selected.includes(option.name);
                return (
                    <button
                    key={option.id}
                    type="button"
                    onClick={() => handleToggle(option.name)}
                    className={`px-4 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-2 border cursor-pointer ${
                        isSelected 
                        ? "bg-white text-black border-white" 
                        : "bg-neutral-900 text-neutral-400 border-neutral-850 hover:border-neutral-700 hover:text-neutral-200"
                    }`}
                    >
                    <span>{option.name}</span>
                    {isSelected && <Check size={12} className="stroke-[3]" />}
                    </button>
                );
                })}
            </div>
        </section>
    );
};
"use client";

import React from "react";
import { Check, Info, Landmark, Layers3, Cpu } from "lucide-react";
import { Country } from "@/types/project";

interface FilterSidebarProps {
    selectedSoftwares: string[];
    onToggleSoftware: (software: string) => void;
    selectedCountries: string[];
    onToggleCountry: (country: string) => void;
    yearRange: number;
    onYearRangeChange: (year: number) => void;
    allSoftwares: string[];
    countries: Country[];
}

export const FilterSidebar: React.FC<FilterSidebarProps> = ({ selectedSoftwares, onToggleSoftware, selectedCountries, onToggleCountry, yearRange, onYearRangeChange, allSoftwares, countries }) => {
    return (
        <aside className="w-full lg:w-72 shrink-0 space-y-8 bg-neutral-950 p-6 rounded-2xl border border-neutral-900 h-fit sticky top-28">
            <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-4 flex items-center gap-2">
                    <Cpu size={14} className="text-neutral-500" /> Software Used
                </h3>
                <div className="space-y-2">
                    {allSoftwares.map((software) => {
                        const isSelected = selectedSoftwares.includes(software);
                        return (
                            <label 
                                key={software} 
                                className={`flex items-center justify-between p-2 rounded-lg cursor-pointer border text-sm transition-all ${
                                isSelected 
                                    ? "bg-neutral-900 border-neutral-700 text-white" 
                                    : "bg-transparent border-transparent text-neutral-400 hover:bg-neutral-900/30 hover:text-neutral-200"
                                }`}
                            >
                                <div className="flex items-center gap-2.5">
                                    <input 
                                        type="checkbox"
                                        checked={isSelected}
                                        onChange={() => onToggleSoftware(software)}
                                        className="sr-only"
                                    />
                                    <span>{software}</span>
                                </div>
                                {isSelected && <Check size={14} className="text-white animate-scale-in" />}
                            </label>
                        );
                    })}
                </div>
            </div>

            <div className="border-t border-neutral-900 pt-6">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-4 flex items-center gap-2">
                    <Layers3 size={14} className="text-neutral-500" /> Country / Territory
                </h3>
                <div className="space-y-2 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                    {countries.map((country) => {
                        const isSelected = selectedCountries.includes(country.name);
                        return (
                        <label 
                            key={country.code} 
                            className={`flex items-center justify-between p-2 rounded-lg cursor-pointer border text-sm transition-all ${
                            isSelected 
                                ? "bg-neutral-900 border-neutral-700 text-white" 
                                : "bg-transparent border-transparent text-neutral-400 hover:bg-neutral-900/30 hover:text-neutral-200"
                            }`}
                        >
                            <div className="flex items-center gap-2.5">
                                <input 
                                    type="checkbox"
                                    checked={isSelected}
                                    onChange={() => onToggleCountry(country.name)}
                                    className="sr-only"
                                />
                                <span>{country.name}</span>
                            </div>
                            {isSelected && <Check size={14} className="text-white" />}
                        </label>
                        );
                    })}
                </div>
            </div>

            <div className="border-t border-neutral-900 pt-6">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 flex items-center gap-2">
                        <Landmark size={14} className="text-neutral-500" /> Academic Year
                    </h3>
                    <span className="text-xs text-neutral-300 font-mono font-semibold">{yearRange}</span>
                </div>
                <input 
                    type="range"
                    min="2020"
                    max="2026"
                    step="1"
                    value={yearRange}
                    onChange={(e) => onYearRangeChange(Number(e.target.value))}
                    className="w-full accent-neutral-200 bg-neutral-900 h-1 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex items-center justify-between text-[10px] text-neutral-500 mt-2 font-mono">
                    <span>2020</span>
                    <span>2026</span>
                </div>
            </div>

            <div className="border-t border-neutral-900 pt-6">
                <div className="flex items-start gap-2.5 bg-neutral-900/30 border border-neutral-800 p-3 rounded-lg">
                    <Info size={14} className="text-neutral-400 mt-0.5 shrink-0" />
                    <p className="text-[11px] text-neutral-400 leading-relaxed font-light">
                        You are exploring the public workspace. Shared academic documents shown are subject to fair academic research usage.
                    </p>
                </div>
            </div>
        </aside>
    );
};
"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react"; 
import { Country } from "@/types/publicProject";

interface FilterDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    selectedSoftwares: string[];
    onToggleSoftware: (software: string) => void;
    selectedCountries: string[];
    onToggleCountry: (country: string) => void;
    yearRange: number;
    onYearRangeChange: (year: number) => void;
    allSoftwares: string[];
    countries: Country[];
}

export const FilterDrawer: React.FC<FilterDrawerProps> = ({
  isOpen,
  onClose,
  selectedSoftwares,
  onToggleSoftware,
  selectedCountries,
  onToggleCountry,
  yearRange,
  onYearRangeChange,
  allSoftwares,
  countries
}) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 bg-black z-50 lg:hidden"
                />
                <motion.div 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    className="fixed bottom-0 left-0 right-0 max-h-[85vh] bg-neutral-950 border-t border-neutral-800 z-50 rounded-t-3xl overflow-y-auto px-6 py-8 space-y-8 lg:hidden"
                >
                    <div className="flex items-center justify-between border-b border-neutral-900 pb-4">
                    <h2 className="text-lg font-bold text-white">Adjust Filter Sets</h2>
                    <button onClick={onClose} className="p-2 text-neutral-400 hover:text-white cursor-pointer">
                        <X size={20} />
                    </button>
                    </div>

                    <div className="space-y-4">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Software Used</h3>
                    <div className="flex flex-wrap gap-2">
                        {allSoftwares.map((software) => {
                        const isSelected = selectedSoftwares.includes(software);
                        return (
                            <button
                            key={software}
                            onClick={() => onToggleSoftware(software)}
                            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                                isSelected 
                                ? "bg-white text-black" 
                                : "bg-neutral-900 text-neutral-400 border border-neutral-800"
                            }`}
                            >
                            {software}
                            </button>
                        );
                        })}
                    </div>
                    </div>

                    <div className="space-y-4">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Country / Territory</h3>
                    <div className="grid grid-cols-2 gap-2">
                        {countries.map((country) => {
                        const isSelected = selectedCountries.includes(country.name);
                        return (
                            <button
                            key={country.code}
                            onClick={() => onToggleCountry(country.name)}
                            className={`flex items-center justify-between p-2.5 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                                isSelected 
                                ? "bg-neutral-900 border-neutral-700 text-white" 
                                : "bg-transparent border-neutral-900 text-neutral-400"
                            }`}
                            >
                            <span>{country.name}</span>
                            {isSelected && <Check size={12} />}
                            </button>
                        );
                        })}
                    </div>
                    </div>

                    <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Academic Year Limit</h3>
                        <span className="text-xs font-mono font-bold text-neutral-200">{yearRange}</span>
                    </div>
                    <input 
                        type="range"
                        min="2020"
                        max="2026"
                        step="1"
                        value={yearRange}
                        onChange={(e) => onYearRangeChange(Number(e.target.value))}
                        className="w-full accent-neutral-200 bg-neutral-900 h-1 rounded-lg"
                    />
                    </div>

                    <button 
                    onClick={onClose}
                    className="w-full bg-white text-black py-4 rounded-xl text-sm font-semibold transition-transform active:scale-95 cursor-pointer"
                    >
                    Apply Filters
                    </button>
                </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
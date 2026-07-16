"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, ArrowUpDown } from "lucide-react";
import { SortOption } from "@/types/publicProject";

interface SortDropdownProps {
    options: SortOption[];
    selectedOption: string;
    onSelectOption: (val: string) => void;
}

export const SortDropdown: React.FC<SortDropdownProps> = ({
    options,
    selectedOption,
    onSelectOption
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const activeLabel = options.find((opt) => opt.value === selectedOption)?.label || "Sort";

    useEffect(() => {
            const handleClickOutside = (e: MouseEvent) => {
                if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                    setIsOpen(false);
                }
            };
            document.addEventListener("mousedown", handleClickOutside);
            return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2.5 px-4 py-2.5 bg-neutral-900 border border-neutral-800 hover:border-neutral-700 rounded-xl text-xs md:text-sm text-neutral-300 font-medium transition-all cursor-pointer"
            >
                <ArrowUpDown size={14} className="text-neutral-400" />
                <span>Sort: {activeLabel}</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-neutral-950 border border-neutral-800 rounded-xl shadow-2xl z-40 overflow-hidden py-1">
                    {options.map((opt) => (
                        <button
                        key={opt.value}
                        onClick={() => {
                            onSelectOption(opt.value);
                            setIsOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-xs md:text-sm transition-all hover:bg-neutral-900 cursor-pointer ${
                            opt.value === selectedOption ? "text-white font-semibold bg-neutral-900/50" : "text-neutral-400"
                        }`}
                        >
                        {opt.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};
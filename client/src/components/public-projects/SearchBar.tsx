"use client";

import React from "react";
import { Search, Sparkles, Command } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
  suggestions: string[];
  onSelectSuggestion: (val: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ 
  value, 
  onChange, 
  suggestions, 
  onSelectSuggestion 
}) => {
    return (
        <div className="w-full bg-neutral-950 sticky top-0 z-30 border-b border-neutral-900 py-4 backdrop-blur-md bg-opacity-90">
            <div className="max-w-[2100px] mx-auto px-4 md:px-8">
                <div className="relative flex items-center w-full">
                    <div className="absolute left-4 text-neutral-500 pointer-events-none">
                        <Search size={18} />
                    </div>
                    <input 
                        type="text"
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        placeholder="Search by architecture framework, keywords, creator or university..."
                        className="w-full bg-neutral-900 border border-neutral-800 text-white pl-12 pr-24 py-3.5 rounded-xl text-sm md:text-base focus:outline-none focus:border-neutral-600 transition-all placeholder:text-neutral-500 font-light"
                    />
                    <div className="absolute right-4 hidden md:flex items-center gap-1.5 bg-neutral-800 text-neutral-400 text-xs px-2 py-1.5 rounded-md font-mono border border-neutral-700">
                        <Command size={10} />
                        <span>K</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
"use client";

import React, { useState } from "react";
import { Hash, X, Plus } from "lucide-react";

interface TagSelectorProps {
  tags: string[];
  onChange: (tags: string[]) => void;
}

export const TagSelector: React.FC<TagSelectorProps> = ({ tags, onChange }) => {
    const [input, setInput] = useState("");

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && input.trim()) {
        e.preventDefault();
        if (!tags.includes(input.trim())) {
            onChange([...tags, input.trim()]);
        }
        setInput("");
        }
    };

    const handleRemove = (tagToRemove: string) => {
        onChange(tags.filter((t) => t !== tagToRemove));
    };

    return (
        <section className="bg-neutral-950 border border-neutral-900 rounded-2xl p-6 md:p-8 space-y-4">
            <h3 className="text-sm font-bold tracking-wider uppercase text-neutral-400 border-b border-neutral-900 pb-3 flex items-center gap-2">
                <Hash size={16} /> 6. Taxonomy Index Filters (Tags)
            </h3>

            <div className="space-y-3">
                <div className="relative flex items-center">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Type search taxonomy tag and press Enter..."
                        className="w-full bg-neutral-900 border border-neutral-800 text-white pl-4 pr-12 py-3 rounded-xl text-xs focus:outline-none focus:border-neutral-600 transition-all font-light"
                    />
                    <div className="absolute right-3 p-1.5 text-neutral-600 bg-neutral-950 rounded-lg border border-neutral-850">
                        <Plus size={12} />
                    </div>
                </div>

                <div className="flex flex-wrap gap-1.5">
                    {tags.map((tag) => (
                        <span 
                        key={tag} 
                        className="inline-flex items-center gap-1 px-2.5 py-1 bg-neutral-900 border border-neutral-850 text-xs text-neutral-300 rounded-lg"
                        >
                        <span>#{tag}</span>
                        <button
                            type="button"
                            onClick={() => handleRemove(tag)}
                            className="text-neutral-500 hover:text-rose-400 transition-colors cursor-pointer"
                        >
                            <X size={10} />
                        </button>
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};
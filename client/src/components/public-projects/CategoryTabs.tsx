"use client";

import React from "react";
import { motion } from "framer-motion";
import { Category } from "@/types/project";

interface CategoryTabsProps {
  categories: Category[];
  activeCategory: string;
  onSelectCategory: (id: string) => void;
}

export const CategoryTabs: React.FC<CategoryTabsProps> = ({
  categories,
  activeCategory,
  onSelectCategory
}) => {
    return (
        <div className="w-full overflow-x-auto no-scrollbar border-b border-neutral-900 py-4 bg-neutral-950">
            <div className="max-w-[2100px] mx-auto px-4 md:px-8 flex items-center gap-1.5 md:gap-3">
                {categories.map((category) => {
                    const isActive = activeCategory === category.id;
                    return (
                        <button
                            key={category.id}
                            onClick={() => onSelectCategory(category.id)}
                            className="relative px-4 py-2 text-xs md:text-sm font-medium transition-all whitespace-nowrap rounded-lg flex items-center gap-2 cursor-pointer"
                        >
                            {isActive && (
                                <motion.div 
                                layoutId="activeCategoryBg"
                                className="absolute inset-0 bg-neutral-900 rounded-lg -z-10"
                                transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                />
                            )}
                            <span className={isActive ? "text-white" : "text-neutral-400 hover:text-neutral-200"}>
                                {category.name}
                            </span>
                            <span className={`text-[10px] tabular-nums font-semibold tracking-wider rounded-md px-1.5 py-0.5 ${
                                isActive ? "bg-white/10 text-neutral-300" : "bg-neutral-900 text-neutral-500"
                            }`}>
                                {category.count}
                            </span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};
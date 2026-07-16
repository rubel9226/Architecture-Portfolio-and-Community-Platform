"use client";

import React from "react";
import { Grid3X3, LayoutGrid, Rows3 } from "lucide-react";

export type ViewType = "grid" | "compact" | "masonry";

interface ViewToggleProps {
    currentView: ViewType;
    onChangeView: (view: ViewType) => void;
}

export const ViewToggle: React.FC<ViewToggleProps> = ({ currentView, onChangeView }) => {
    return (
        <div className="flex items-center bg-neutral-900 border border-neutral-850 p-1 rounded-xl">
            <button
                onClick={() => onChangeView("grid")}
                className={`p-2 rounded-lg transition-all cursor-pointer ${
                currentView === "grid" 
                    ? "bg-neutral-800 text-white shadow-sm" 
                    : "text-neutral-500 hover:text-neutral-300"
                }`}
                title="Grid View"
            >
                <LayoutGrid size={16} />
            </button>
            <button
                onClick={() => onChangeView("compact")}
                className={`p-2 rounded-lg transition-all cursor-pointer ${
                currentView === "compact" 
                    ? "bg-neutral-800 text-white shadow-sm" 
                    : "text-neutral-500 hover:text-neutral-300"
                }`}
                title="Compact Grid"
            >
                <Grid3X3 size={16} />
            </button>
            <button
                onClick={() => onChangeView("masonry")}
                className={`p-2 rounded-lg transition-all cursor-pointer ${
                currentView === "masonry" 
                    ? "bg-neutral-800 text-white shadow-sm" 
                    : "text-neutral-500 hover:text-neutral-300"
                }`}
                title="Masonry List"
            >
                <Rows3 size={16} />
            </button>
        </div>
    );
};
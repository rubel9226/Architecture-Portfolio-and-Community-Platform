"use client";

import React from "react";
import { Inbox, RotateCcw } from "lucide-react";

interface EmptyStateProps {
  onClear: () => void;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ onClear }) => {
    return (
        <div className="w-full flex flex-col items-center justify-center py-20 px-4 text-center border border-dashed border-neutral-800 rounded-3xl bg-neutral-950">
            <div className="p-4 bg-neutral-900 text-neutral-500 rounded-full mb-4">
                <Inbox size={32} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">No Projects Match Your Selection</h3>
            <p className="text-sm text-neutral-400 max-w-sm mb-6 font-light">
                We couldn&apos;t find any assets meeting those parameter requirements. Try revising your active filters or clear search term metrics.
            </p>
            <button 
                onClick={onClear}
                className="flex items-center gap-2 px-5 py-2.5 bg-white text-black hover:bg-neutral-100 rounded-xl text-xs font-semibold transition-all cursor-pointer"
            >
                <RotateCcw size={14} /> Reset Global Search
            </button>
        </div>
    );
};
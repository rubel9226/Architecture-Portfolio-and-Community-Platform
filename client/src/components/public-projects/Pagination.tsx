"use client";

import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange
}) => {
    const getPageNumbers = () => {
        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }
        return pages;
    };

    return (
        <div className="flex items-center justify-between border-t border-neutral-900 pt-6 mt-12 w-full">
            <button
                onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-neutral-800 text-neutral-400 hover:text-white disabled:opacity-30 disabled:hover:text-neutral-400 font-medium text-xs transition-all cursor-pointer"
            >
                <ArrowLeft size={14} /> Previous
            </button>

            <div className="flex items-center gap-1.5">
                {getPageNumbers().map((num) => (
                <button
                    key={num}
                    onClick={() => onPageChange(num)}
                    className={`h-9 w-9 rounded-xl flex items-center justify-center text-xs font-medium font-mono transition-all cursor-pointer ${
                    num === currentPage 
                        ? "bg-white text-black" 
                        : "text-neutral-400 hover:bg-neutral-900"
                    }`}
                >
                    {num}
                </button>
                ))}
            </div>

            <button
                onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-neutral-800 text-neutral-400 hover:text-white disabled:opacity-30 disabled:hover:text-neutral-400 font-medium text-xs transition-all cursor-pointer"
            >
                Next <ArrowRight size={14} />
            </button>
        </div>
    );
};
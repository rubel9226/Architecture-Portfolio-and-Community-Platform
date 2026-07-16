"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Eye, ChevronRight } from "lucide-react";

interface EditProjectHeaderProps {
    projectId: string;
}

export const EditProjectHeader: React.FC<EditProjectHeaderProps> = ({ projectId }) => {
    const steps = [
        { label: "Dashboard", href: "/dashboard" },
        { label: "My Projects", href: "/dashboard/projects" },
        { label: "Edit Project", href: "", current: true }
    ];

    return (
        <header className="w-full bg-neutral-950 border-b border-neutral-900 py-6 sticky top-0 z-40 backdrop-blur-md bg-opacity-90">
            <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-2">
                    <nav className="flex items-center gap-1.5 text-xs text-neutral-500 font-medium">
                        {steps.map((step, idx) => (
                        <React.Fragment key={step.label}>
                            {idx > 0 && <ChevronRight size={10} className="text-neutral-700" />}
                            {step.current ? (
                            <span className="text-neutral-300 font-semibold">{step.label}</span>
                            ) : (
                            <Link href={step.href} className="hover:text-neutral-300 transition-colors">
                                {step.label}
                            </Link>
                            )}
                        </React.Fragment>
                        ))}
                    </nav>
                    
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-white">Edit Architecture Blueprint</h1>
                        <p className="text-xs text-neutral-400 font-light">Revise metadata, design metrics, files, and presentation values.</p>
                    </div>
                </div>

                <div className="flex items-center gap-3 self-start md:self-auto">
                    <Link 
                        href="/dashboard/projects"
                        className="flex items-center gap-2 px-4 py-2 border border-neutral-800 hover:border-neutral-700 text-neutral-300 rounded-xl text-xs font-medium transition-all bg-neutral-900/50"
                    >
                        <ArrowLeft size={14} /> Back
                    </Link>
                    <Link
                        href={`/project/${projectId}`}
                        target="_blank"
                        className="flex items-center gap-2 px-4 py-2 bg-neutral-900 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-800 text-white rounded-xl text-xs font-medium transition-all"
                    >
                        <Eye size={14} /> View Live Layout
                    </Link>
                </div>
            </div>
        </header>
    );
};
"use client";

import React from "react";
import { Globe, Lock, EyeOff, CheckCircle } from "lucide-react";

interface VisibilitySelectorProps {
    current: "public" | "private" | "draft";
    onChange: (visibility: "public" | "private" | "draft") => void;
}

export const VisibilitySelector: React.FC<VisibilitySelectorProps> = ({ current, onChange }) => {
    const matrices = [
        { id: "public", title: "Global Public", desc: "Discoverable by search networks, external students, and recruiters.", icon: <Globe size={16} /> },
        { id: "private", title: "Encrypted Private", desc: "Visible exclusively to authorized enterprise operators or link recipients.", icon: <Lock size={16} /> },
        { id: "draft", title: "Workspace Draft", desc: "Hidden from live feeds until publish actions parameters are deployed.", icon: <EyeOff size={16} /> },
    ] as const;

    return (
        <section className="bg-neutral-950 border border-neutral-900 rounded-2xl p-6 md:p-8 space-y-4">
            <h3 className="text-sm font-bold tracking-wider uppercase text-neutral-400 border-b border-neutral-900 pb-3">
                7. Network Visibility Strategy
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {matrices.map((option) => {
                const isActive = current === option.id;
                return (
                    <div
                    key={option.id}
                    onClick={() => onChange(option.id)}
                    className={`relative p-5 rounded-xl border cursor-pointer flex flex-col justify-between transition-all select-none ${
                        isActive 
                        ? "bg-neutral-900/50 border-neutral-600 text-white shadow-xl" 
                        : "bg-neutral-900/10 border-neutral-900 text-neutral-400 hover:border-neutral-800 hover:bg-neutral-900/20"
                    }`}
                    >
                    <div className="space-y-2">
                        <div className={`p-2 w-fit rounded-lg ${isActive ? "bg-white text-black" : "bg-neutral-900 text-neutral-400 border border-neutral-850"}`}>
                        {option.icon}
                        </div>
                        <h4 className={`text-xs font-bold ${isActive ? "text-white" : "text-neutral-300"}`}>{option.title}</h4>
                        <p className="text-[11px] font-light leading-relaxed text-neutral-400">{option.desc}</p>
                    </div>

                    {isActive && (
                        <div className="absolute top-4 right-4 text-white">
                        <CheckCircle size={14} className="fill-current text-white text-neutral-950" />
                        </div>
                    )}
                    </div>
                );
                })}
            </div>
        </section>
    );
};
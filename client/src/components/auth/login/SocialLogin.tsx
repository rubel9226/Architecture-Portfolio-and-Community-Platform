"use client";

import React from "react";
// import { Chrome, Github } from "lucide-react";
import { SocialProvider } from "@/types/auth";
import { FaChrome } from "react-icons/fa";
import { GiThumbUp } from "react-icons/gi";

const providers: SocialProvider[] = [
  { id: "google", name: "Google", icon: FaChrome },
  { id: "github", name: "GitHub", icon: GiThumbUp },
];

export const SocialLogin: React.FC = () => {
    const handleSocialConnect = (providerId: string) => {
        alert(`Initiating OAuth connection pipeline for: ${providerId} (UI Action Only)`);
    };

    return (
        <div className="grid grid-cols-2 gap-3 w-full">
        {providers.map((p) => {
            const Icon = p.icon;
            return (
            <button
                key={p.id}
                type="button"
                onClick={() => handleSocialConnect(p.id)}
                className="flex items-center justify-center gap-2 px-4 py-2.5 border border-slate-200 bg-white hover:bg-slate-50 text-xs font-semibold text-slate-700 rounded-xl transition-colors cursor-pointer"
            >
                <Icon className="w-4 h-4 text-slate-600" />
                <span>{p.name}</span>
            </button>
            );
        })}
        </div>
    );
};
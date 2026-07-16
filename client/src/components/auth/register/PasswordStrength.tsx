"use client";

import React from "react";
import { Check, X } from "lucide-react";

interface PasswordStrengthProps {
    value: string;
}

export const PasswordStrength: React.FC<PasswordStrengthProps> = ({ value }) => {
    const requirements = [
        { label: "At least 8 characters", valid: value.length >= 8 },
        { label: "One uppercase letter (A-Z)", valid: /[A-Z]/.test(value) },
        { label: "One lowercase letter (a-z)", valid: /[a-z]/.test(value) },
        { label: "One numerical digit (0-9)", valid: /[0-9]/.test(value) },
        { label: "One special token (!@#$%)", valid: /[^A-Za-z0-9]/.test(value) },
    ];

    const metCount = requirements.filter((r) => r.valid).length;

    // Strength dynamic styling configurations
    let strengthLabel = "Weak";
    let barColor = "bg-rose-500";
    let percent = "20%";

    if (metCount >= 5) {
        strengthLabel = "Sovereign / Strong";
        barColor = "bg-emerald-500";
        percent = "100%";
    } else if (metCount >= 3) {
        strengthLabel = "Acceptable / Medium";
        barColor = "bg-amber-500";
        percent = "60%";
    } else if (metCount > 0) {
        strengthLabel = "Inadequate / Weak";
        barColor = "bg-rose-400";
        percent = "35%";
    } else {
        percent = "0%";
    }

    return (
        <div className="space-y-3 bg-slate-50 dark:bg-slate-900/50 p-3.5 rounded-xl border border-slate-100 dark:border-slate-800/80">
            <div className="flex items-center justify-between text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 tracking-wider">
                <span>Structure Strength:</span>
                <span className={metCount >= 5 ? "text-emerald-600" : metCount >= 3 ? "text-amber-600" : "text-rose-500"}>
                {strengthLabel}
                </span>
            </div>

            <div className="h-1 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                <div className={`h-full transition-all duration-300 ${barColor}`} style={{ width: percent }} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[10px]">
                {requirements.map((req, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 font-light">
                        {req.valid ? (
                            <Check size={11} className="text-emerald-500 shrink-0" />
                        ) : (
                            <X size={11} className="text-rose-400 shrink-0" />
                        )}
                        <span className={req.valid ? "text-slate-800 dark:text-slate-200" : ""}>{req.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};
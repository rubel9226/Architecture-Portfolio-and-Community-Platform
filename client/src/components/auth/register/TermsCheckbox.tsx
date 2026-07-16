"use client";

import React from "react";
import { UseFormRegister, FieldError } from "react-hook-form";

interface TermsCheckboxProps {
    register: UseFormRegister<any>;
    error?: FieldError;
}

export const TermsCheckbox: React.FC<TermsCheckboxProps> = ({ register, error }) => {
    return (
        <div className="space-y-2">
            <div className="space-y-2">
                <label className="flex items-start gap-2.5 cursor-pointer select-none">
                <input
                    type="checkbox"
                    {...register("agreeTerms")}
                    className="rounded border-slate-300 dark:border-slate-700 text-blue-600 focus:ring-blue-500/20 h-4 w-4 cursor-pointer mt-0.5"
                />
                    <span className="text-xs text-slate-500 dark:text-slate-400 leading-normal font-light">
                        I agree to the platform licensing, processing structures, and{" "}
                        <a href="/terms" className="font-semibold text-blue-600 hover:text-blue-700 underline">
                            Terms & Conditions
                        </a>
                        .
                    </span>
                </label> 
            </div>

            {error && <p className="text-[10px] text-rose-500 font-medium">{error.message}</p>}
        </div>
    );
};
"use client";

import React from "react";
import Link from "next/link";
import { UseFormRegister } from "react-hook-form";

interface RememberMeProps {
  register: UseFormRegister<any>;
}

export const RememberMe: React.FC<RememberMeProps> = ({ register }) => {
    return (
        <div className="flex items-center justify-between py-1">
            <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                    type="checkbox"
                    {...register("rememberMe")}
                    className="rounded border-slate-300 text-blue-600 focus:ring-blue-500/20 h-4 w-4 cursor-pointer"
                />
                    <span className="text-xs text-slate-600 font-light">
                    Remember session coordinates
                    </span>
            </label>

            <Link
                href="/forgot-password"
                className="text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors"
            >
                Forgot spatial key?
            </Link>
        </div>
    );
};
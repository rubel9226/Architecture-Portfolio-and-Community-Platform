"use client";

import React, { useState } from "react";
import { Lock, Eye, EyeOff } from "lucide-react";
import { UseFormRegister, FieldError } from "react-hook-form";

interface PasswordInputProps {
  register: UseFormRegister<any>;
  error?: FieldError;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({ register, error }) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-700">
                Password
            </label>
            <div className="relative">
                <span className="absolute left-3.5 top-3.5 text-slate-400">
                    <Lock size={14} />
                </span>
                <input
                    type={showPassword ? "text" : "password"}
                    {...register("password")}
                    placeholder="Enter your password"
                    className="w-full bg-white border border-slate-200 text-slate-900 pl-10 pr-10 py-2.5 rounded-xl text-xs focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all font-light"
                />
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                    {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                </button>
            </div>
            {error && <p className="text-[10px] text-rose-500 font-medium">{error.message}</p>}
        </div>
    );
};
"use client";

import React, { useState } from "react";
import { Lock, Eye, EyeOff } from "lucide-react";
import { UseFormRegister, FieldError } from "react-hook-form";

interface PasswordInputProps {
  register: UseFormRegister<any>;
  error?: FieldError;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({ register, error }) => {
    const [show, setShow] = useState(false);

    return (
        <div className="space-y-1">
            <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 capitalize tracking-wide">
                Password
            </label>
            <div className="relative">
                <span className="absolute left-3 top-3 text-slate-400 dark:text-slate-500">
                    <Lock size={13} />
                </span>
                <input
                    type={show ? "text" : "password"}
                    {...register("password")}
                    placeholder="@Rubel123"
                    className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 pl-9 pr-9 py-2 rounded-lg text-xs focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all font-light"
                />
                <button
                    type="button"
                    onClick={() => setShow(!show)}
                    className="absolute right-3 top-3 text-slate-450 hover:text-slate-650 dark:hover:text-slate-350 cursor-pointer"
                >
                    {show ? <EyeOff size={13} /> : <Eye size={13} />}
                </button>
            </div>
            {error && <p className="text-[10px] text-rose-500 font-medium">{error.message}</p>}
        </div>
    );
};
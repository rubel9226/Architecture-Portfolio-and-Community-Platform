"use client";


import { handleSocialLogin } from "@/api/LoginAndRegister";
import React, { useState } from "react";
import { FaChrome } from "react-icons/fa";
import { GiThumbUp } from "react-icons/gi";


export const SocialRegister: React.FC = () => {
    const [loading, setLoading] = useState(false);

    return (
        <div className="space-y-3">
            <div className="relative flex py-1 items-center">
                <div className="grow border-t border-slate-200 dark:border-slate-800" />
                <span className="shrink mx-3 text-[9px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-widest">
                    or enroll credentials using
                </span>
                <div className="grow border-t border-slate-200 dark:border-slate-800" />
            </div>

            <div className="grid grid-cols-2 gap-3">
                <button
                    type="button"
                    onClick={() => handleSocialLogin('google', setLoading)}
                    disabled={loading}
                    className="flex items-center justify-center gap-2 px-3.5 py-2 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/60 text-xs font-semibold text-slate-700 dark:text-slate-300 rounded-xl transition-all cursor-pointer disabled:opacity-50"
                >
                    <FaChrome size={13} className="text-slate-500 dark:text-slate-400" />
                    <span>{loading ? 'Connecting...' : 'Google'}</span>
                </button>
                <button
                    type="button"
                    onClick={() => handleSocialLogin('github', setLoading)}
                    disabled={loading}
                    className="flex items-center justify-center gap-2 px-3.5 py-2 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/60 text-xs font-semibold text-slate-700 dark:text-slate-300 rounded-xl transition-all cursor-pointer disabled:opacity-50"
                >
                    <GiThumbUp size={13} className="text-slate-500 dark:text-slate-400" />
                    <span>{loading ? 'Connecting...' : 'GitHub'}</span>
                </button>
            </div>
        </div>
    );
};
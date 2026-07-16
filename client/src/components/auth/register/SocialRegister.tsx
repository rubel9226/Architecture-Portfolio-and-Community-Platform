"use client";


import { handleSocialLogin } from "@/api/LoginAndRegister";
import React from "react";
import { FaChrome } from "react-icons/fa";
import { GiThumbUp } from "react-icons/gi";


export const SocialRegister: React.FC = () => {


    

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
                    onClick={() => handleSocialLogin('google')}
                    className="flex items-center justify-center gap-2 px-3.5 py-2 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/60 text-xs font-semibold text-slate-700 dark:text-slate-300 rounded-xl transition-all cursor-pointer"
                >
                    <FaChrome size={13} className="text-slate-500 dark:text-slate-400" />
                    <span>Google</span>
                </button>
                <button
                    type="button"
                    onClick={() => handleSocialLogin('google')}
                    className="flex items-center justify-center gap-2 px-3.5 py-2 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/60 text-xs font-semibold text-slate-700 dark:text-slate-300 rounded-xl transition-all cursor-pointer"
                >
                    <GiThumbUp size={13} className="text-slate-500 dark:text-slate-400" />
                    <span>GitHub</span>
                </button>
            </div>
        </div>
    );
};
"use client";

import React from "react";

export const AuthDivider: React.FC = () => {
    return (
        <div className="relative flex py-2 items-center">
            <div className="grow border-t border-slate-200" />
            <span className="shrink mx-4 text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                or continue with
            </span>
            <div className="grow border-t border-slate-200" />
        </div>
    );
};
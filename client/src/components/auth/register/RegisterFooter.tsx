"use client";

import React from "react";
import Link from "next/link";

export const RegisterFooter: React.FC = () => {
    return (
        <div className="space-y-4 text-center">
            <p className="text-xs text-slate-500 dark:text-slate-400 font-light">
                Already have a live directory portfolio?{" "}
                <Link
                    href="/login"
                    className="font-bold text-blue-600 hover:text-blue-700 transition-colors"
                >
                    Access Portal Here
                </Link>
            </p>

            <div className="flex items-center justify-center gap-4 text-[9px] text-slate-400 dark:text-slate-500 font-light uppercase tracking-wider">
                <Link href="/privacy" className="hover:text-slate-650 dark:hover:text-slate-300 transition-colors">
                    Security Specs
                </Link>
                <span className="h-2 w-px bg-slate-200 dark:bg-slate-800" />
                <Link href="/terms" className="hover:text-slate-650 dark:hover:text-slate-300 transition-colors">
                    Licensing Agreements
                </Link>
            </div>
        </div>
    );
};
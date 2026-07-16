"use client";

import React from "react";
import Link from "next/link";

export const LoginFooter: React.FC = () => {
    return (
        <div className="space-y-4 text-center">
            <p className="text-xs text-slate-500 font-light">
                Don&apos;t have an account?{" "}
                <Link
                    href="/register"
                    className="font-bold text-blue-600 hover:text-blue-700 transition-colors"
                >
                    Assemble your portfolio
                </Link>
            </p>

            <div className="flex items-center justify-center gap-4 text-[10px] text-slate-400 font-light">
                <Link href="/terms" className="hover:text-slate-600 transition-colors">
                    Terms of Service
                </Link>
                <span className="h-2 w-px bg-slate-250" />
                <Link href="/privacy" className="hover:text-slate-600 transition-colors">
                    Privacy Policy
                </Link>
            </div>
        </div>
    );
};
"use client";

import React from "react";
import { motion } from "framer-motion";

export const LoginHeader: React.FC = () => {
    return (
        <div className="space-y-2 text-center lg:text-left">
            <div className="flex lg:hidden items-center justify-center gap-2 mb-6">
                <div className="h-8 w-8 bg-blue-600 flex items-center justify-center rounded-lg font-bold text-sm text-white">
                    A
                </div>
                <span className="font-bold tracking-tight text-lg text-slate-900">ArchiFolio</span>
            </div>

            <motion.h2
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-2xl font-bold tracking-tight text-slate-900"
            >
                Welcome Back
            </motion.h2>
            
            <p className="text-xs text-slate-500 font-light">
                Sign in to access your dashboard and coordinate spatial portfolios.
            </p>
        </div>
    );
};
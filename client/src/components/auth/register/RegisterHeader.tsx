"use client";

import React from "react";
import { motion } from "framer-motion";

export const RegisterHeader: React.FC = () => {
    return (
        <div className="space-y-1.5 text-center lg:text-left">
            <div className="flex lg:hidden items-center justify-center gap-2 mb-4">
                <div className="h-8 w-8 bg-blue-600 flex items-center justify-center rounded-xl font-extrabold text-sm text-white">
                    A
                </div>
                <span className="font-bold tracking-tight text-base text-slate-900 dark:text-white">ArchiFolio</span>
            </div>

            <motion.h2
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-xl md:text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white"
            >
                Create Your Account
            </motion.h2>
            
            <p className="text-xs text-slate-500 dark:text-slate-400 font-light">
                Deploy your digital showcase blueprints and coordinate with top firms.
            </p>
        </div>
    );
};
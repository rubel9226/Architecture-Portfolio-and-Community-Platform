"use client";

import Link from "next/link";
import { FolderX } from "lucide-react";

const PortfolioNotFound = (): React.JSX.Element => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-black px-6 transition-colors duration-300">
        <div className="max-w-md text-center">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20">
            <FolderX className="h-12 w-12 text-primary" />
            </div>

            <h1 className="mt-8 text-4xl font-bold text-slate-900 dark:text-white">
            Portfolio Not Found
            </h1>

            <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
            The portfolio you're looking for doesn't exist, has been removed, or
            is currently unavailable.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">

            <Link
                href="/"
                className="rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-6 py-3 font-medium text-slate-700 dark:text-slate-200 transition-all hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-105"
            >
                Go Home
            </Link>
            </div>
        </div>
        </div>
    );
};

export default PortfolioNotFound;
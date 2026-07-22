"use client";

import { FolderOpen, PlusCircle } from "lucide-react";
import Link from "next/link";

export default function NoProjects() {
    return (
        <div className="max-w-3xl mx-auto rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-sm py-20 px-8 text-center">
            <div className="w-20 h-20 mx-auto rounded-full bg-slate-800 flex items-center justify-center mb-6">
                <FolderOpen className="w-10 h-10 text-slate-500" />
            </div>

            <h3 className="text-3xl font-bold text-white mb-3">
                No Portfolio Projects Yet
            </h3>

            <p className="text-slate-400 max-w-lg mx-auto leading-relaxed mb-8">
                You haven't added any projects to your public portfolio yet.
                Showcase your best work by adding projects from your dashboard.
            </p>

            <Link
                href="/dashboard/my-projects"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
                <PlusCircle size={18} />
                Add Project
            </Link>
        </div>
    );
}
// components/projects/EmptyState.tsx
'use client';
import { FolderPlus } from 'lucide-react';

export default function EmptyState() {
    return (
        <div className="border border-dashed border-slate-200 bg-white p-12 rounded-2xl text-center space-y-4 max-w-md mx-auto">
            <div className="p-4 bg-slate-50 text-slate-400 border border-slate-100 rounded-2xl w-fit mx-auto shadow-3xs">
                <FolderPlus size={24} />
            </div>
            <div className="space-y-1">
                <h3 className="text-sm font-bold text-slate-900">No Architectural Schemes Found</h3>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                    Your active view filters returned zero record nodes. Alter the search strings or append a fresh blueprint catalog model onto the cloud core.
                </p>
            </div>
            <button type="button" className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl transition-colors">
                Create Project
            </button>
        </div>
    );
}
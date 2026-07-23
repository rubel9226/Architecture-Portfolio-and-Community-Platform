// components/projects/BulkActionBar.tsx
'use client'; 
import { useProjects } from '@/hooks/MyProjectsContext';
import { Trash2, Globe, Lock, X } from 'lucide-react';

export default function BulkActionBar() {
    const { selectedIds, clearSelection, bulkDelete, bulkChangeVisibility } = useProjects();

    if (selectedIds.length === 0) return null;

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-slate-900 text-white border border-slate-800 px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-4 z-40 text-xs font-semibold">
            <div className="flex items-center gap-2 border-r border-slate-800 pr-3">
                <span className="inline-flex items-center justify-center bg-blue-600 text-white text-[10px] font-bold w-4 h-4 rounded-full">
                    {selectedIds.length}
                </span>
                <span className="text-slate-400 font-light">Clusters Selected</span>
            </div>

            <div className="flex items-center gap-2">
                <button onClick={() => bulkChangeVisibility('public')} className="inline-flex items-center gap-1 text-slate-300 hover:text-white px-2 py-1 rounded-lg hover:bg-slate-800"><Globe size={12}/> Public</button>
                <button onClick={() => bulkChangeVisibility('private')} className="inline-flex items-center gap-1 text-slate-300 hover:text-white px-2 py-1 rounded-lg hover:bg-slate-800"><Lock size={12}/> Private</button>
                <button onClick={bulkDelete} className=" text-red-400 hover:text-redinline-flex items-center gap-1-300 px-2 py-1 rounded-lg hover:bg-red-950/40"><Trash2 size={12}/> Purge</button>
            </div>

            <button onClick={clearSelection} className="p-1 text-slate-500 hover:text-white border-l border-slate-800 pl-2">
                <X size={14} />
            </button>
        </div>
    );
}
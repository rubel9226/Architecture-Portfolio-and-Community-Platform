// components/projects/DeleteProjectModal.tsx
'use client'; 
import { useProjects } from '@/hooks/MyProjectsContext';
import { AlertTriangle } from 'lucide-react';

export default function DeleteProjectModal() {
    const { deleteId, setDeleteId, executeDelete } = useProjects();

    if (!deleteId) return null;

    return (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center z-50 p-4">
            <div className="bg-white border border-slate-200 rounded-2xl p-5 max-w-sm w-full shadow-lg space-y-4">
                <div className="flex gap-3 items-start">
                    <div className="p-2 bg-red-50 border border-red-100 text-red-600 rounded-xl">
                        <AlertTriangle size={16} />
                    </div>
                    <div className="space-y-1">
                        <h4 className="text-sm font-bold text-slate-900">Purge Project Matrix?</h4>
                        <p className="text-xs text-slate-400 font-light leading-relaxed">This action cannot be undone. All linked structural layout assets, telemetry views, and peer bookmarks will clear globally.</p>
                    </div>
                </div>
                <div className="flex justify-end gap-2 text-xs font-semibold">
                    <button type="button" onClick={() => setDeleteId(null)} className="px-3 py-2 border border-slate-200 text-slate-600 hover:bg-slate-50 rounded-xl transition-colors">Cancel</button>
                    <button type="button" onClick={executeDelete} className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl shadow-3xs transition-colors">Confirm Purge</button>
                </div>
            </div>
        </div>
    );
}
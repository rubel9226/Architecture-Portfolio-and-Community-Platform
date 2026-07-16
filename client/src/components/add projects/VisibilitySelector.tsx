// components/projects/create/VisibilitySelector.tsx
'use client';
import { useFormContext } from 'react-hook-form';
import { Globe, Lock } from 'lucide-react';
import { ProjectFormData } from '@/types/addProject';

export default function VisibilitySelector() {
    const { setValue, watch } = useFormContext<ProjectFormData>();
    const visibility = watch('visibility') || 'PUBLIC';

    const channels = [
        { mode: 'PUBLIC' as const, title: 'Public Access', desc: 'Indexed globally. Anyone can explore your structural system workflows.', icon: Globe },
        { mode: 'PRIVATE' as const, title: 'Private Vault', desc: 'Only visible within your personal identity ecosystem board.', icon: Lock }
    ];

    return (
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-3xs space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">6. Privacy Protocols</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {channels.map((ch) => {
                    const isSelected = visibility === ch.mode;
                    return (
                        <button
                        type="button"
                        key={ch.mode}
                        onClick={() => setValue('visibility', ch.mode)}
                        className={`p-4 border rounded-2xl text-left flex items-start gap-3 transition-all ${
                            isSelected 
                            ? 'bg-blue-50/50 border-blue-600 text-blue-900 shadow-3xs' 
                            : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                        }`}
                        >
                        <div className={`p-2 rounded-xl shrink-0 mt-0.5 ${isSelected ? 'bg-blue-600 text-white' : 'bg-slate-50 text-slate-400'}`}>
                            <ch.icon size={14} />
                        </div>
                        <div className="space-y-0.5">
                            <span className="text-xs font-bold block">{ch.title}</span>
                            <span className="text-[11px] text-slate-400 font-light leading-normal block">{ch.desc}</span>
                        </div>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
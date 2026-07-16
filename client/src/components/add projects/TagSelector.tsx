// components/projects/create/TagSelector.tsx
'use client';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { X, Plus } from 'lucide-react';
import { ProjectFormData } from '@/types/addProject';

export default function TagSelector() {
    const { setValue, watch, formState: { errors } } = useFormContext<ProjectFormData>();
    const [inputVal, setInputVal] = useState('');
    const currentTags = watch('tags') || [];

    const addTag = () => {
        const cleaned = inputVal.trim();
        if (cleaned && !currentTags.includes(cleaned)) {
        const updated = [...currentTags, cleaned];
        setValue('tags', updated, { shouldValidate: true });
        setInputVal('');
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
        e.preventDefault();
        addTag();
        }
    };

    const removeTag = (tag: string) => {
        const updated = currentTags.filter(t => t !== tag);
        setValue('tags', updated, { shouldValidate: true });
    };

    return (
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-3xs space-y-3">
        <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">5. Taxonomy Tags</h3>
            <p className="text-[10px] text-slate-400 font-light mt-0.5">Press enter or use the append button to add indexing descriptors.</p>
        </div>

        <div className="flex gap-2">
            <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="e.g., Parametric, Timber, Sub-tropical"
            className="w-full text-xs px-3 py-2 border border-slate-200 rounded-xl focus:outline-hidden focus:border-blue-600 bg-slate-50/50"
            />
            <button
            type="button"
            onClick={addTag}
            className="p-2 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-colors"
            >
            <Plus size={16} />
            </button>
        </div>

        <div className="flex flex-wrap gap-1.5 pt-1">
            {currentTags.map((tag, i) => (
            <span key={i} className="inline-flex items-center gap-1 text-[11px] font-semibold bg-slate-50 text-slate-600 border border-slate-200 px-2 py-0.5 rounded-lg">
                {tag}
                <button type="button" onClick={() => removeTag(tag)} className="text-slate-400 hover:text-slate-800"><X size={10} /></button>
            </span>
            ))}
        </div>
        {errors.tags && <p className="text-[11px] font-medium text-red-500">{errors.tags.message}</p>}
        </div>
    );
}
// components/projects/create/ProjectDetails.tsx
'use client';
import { ProjectFormData } from '@/types/addProject';
import { useFormContext } from 'react-hook-form';

export default function ProjectDetails() {
    const { register, formState: { errors } } = useFormContext<ProjectFormData>();

    const textBlocks = [
        { field: 'overview', label: 'Project Overview Statement *', placeholder: 'Synthesize the absolute structural parameters, location drivers, and overall program scope...', required: true },
        { field: 'designConcept', label: 'Tectonic Concept & Geometry Strategy', placeholder: 'Explain the parametric sequences, micro-climate adaptation layers, or formal inspirations...', required: false },
        { field: 'materialsUsed', label: 'Materiality Matrix & System Specs', placeholder: 'Detail the concrete mixes, engineered mass timber joineries, responsive shading components...', required: false }
    ];

    return (
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-3xs space-y-4">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">3. Architectural Narrative</h3>
        
        {textBlocks.map((block) => (
            <div key={block.field} className="space-y-1">
            <label className="text-xs font-bold text-slate-700">{block.label}</label>
            <textarea
                {...register(block.field as any)}
                placeholder={block.placeholder}
                rows={4}
                className="w-full text-xs px-3 py-2 border border-slate-200 rounded-xl focus:outline-hidden focus:border-blue-600 bg-slate-50/50 resize-none font-light leading-relaxed"
            />
            {block.required && errors[block.field as keyof ProjectFormData] && (
                <p className="text-[11px] font-medium text-red-500">
                {errors[block.field as keyof ProjectFormData]?.message as string}
                </p>
            )}
            </div>
        ))}
        </div>
    );
}
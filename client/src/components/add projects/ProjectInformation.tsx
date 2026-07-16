// components/projects/create/ProjectInformation.tsx
'use client';
import { useFormContext } from 'react-hook-form'; 
import CategorySelector from './CategorySelector';
import { ProjectFormData } from '@/types/addProject';
import { projectTypes } from '@/data/add project/projectTypes';

export default function ProjectInformation() {
    const { register, formState: { errors } } = useFormContext<ProjectFormData>();

    return (
        <div className="bg-slate-700 p-5 rounded-2xl border border-slate-500 shadow-3xs space-y-5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">1. Basic Metadata</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2 space-y-1">
                    <label className="text-xs font-bold text-slate-700">Project Title *</label>
                    <input 
                        type="text" 
                        {...register('title')} 
                        placeholder="e.g., Modern Eco Villa Matrix" 
                        className="w-full text-xs px-3 py-2 border border-slate-400 rounded-md focus:outline-hidden focus:border-blue-600 bg-slate-500"
                    />
                    {errors.title && <p className="text-[11px] font-medium text-red-500">{errors.title.message}</p>}
                </div>

                <div className="sm:col-span-2 space-y-1">
                    <CategorySelector />
                </div>

                <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Project Type *</label>
                <select 
                    {...register('projectType')} 
                    className="w-full text-xs px-3 py-2 border border-slate-200 rounded-xl focus:outline-hidden focus:border-blue-600 bg-slate-50/50"
                >
                    <option value="">Select Studio Intent</option>
                    {projectTypes.map((t, idx) => <option key={idx} value={t}>{t}</option>)}
                </select>
                {errors.projectType && <p className="text-[11px] font-medium text-red-500">{errors.projectType.message}</p>}
                </div>

                <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Year of Completion *</label>
                <input 
                    type="text" 
                    {...register('year')} 
                    placeholder="e.g., 2026" 
                    className="w-full text-xs px-3 py-2 border border-slate-200 rounded-xl focus:outline-hidden focus:border-blue-600 bg-slate-50/50"
                />
                {errors.year && <p className="text-[11px] font-medium text-red-500">{errors.year.message}</p>}
                </div>

                <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Location / Context *</label>
                <input 
                    type="text" 
                    {...register('location')} 
                    placeholder="e.g., Dhaka, Bangladesh" 
                    className="w-full text-xs px-3 py-2 border border-slate-200 rounded-xl focus:outline-hidden focus:border-blue-600 bg-slate-50/50"
                />
                {errors.location && <p className="text-[11px] font-medium text-red-500">{errors.location.message}</p>}
                </div>

                <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">University Node Context *</label>
                <input 
                    type="text" 
                    {...register('university')} 
                    placeholder="e.g., ABC University" 
                    className="w-full text-xs px-3 py-2 border border-slate-200 rounded-xl focus:outline-hidden focus:border-blue-600 bg-slate-50/50"
                />
                {errors.university && <p className="text-[11px] font-medium text-red-500">{errors.university.message}</p>}
                </div>

                <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Team Collaborators (Optional)</label>
                <input 
                    type="text" 
                    {...register('teamMembers')} 
                    placeholder="e.g., Sarah Jenkins, Liam Vance" 
                    className="w-full text-xs px-3 py-2 border border-slate-200 rounded-xl focus:outline-hidden focus:border-blue-600 bg-slate-50/50"
                />
                </div>

                <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Client / Studio Jury (Optional)</label>
                <input 
                    type="text" 
                    {...register('clientName')} 
                    placeholder="e.g., ArchDaily Studio Challenge" 
                    className="w-full text-xs px-3 py-2 border border-slate-200 rounded-xl focus:outline-hidden focus:border-blue-600 bg-slate-50/50"
                />
                </div>
            </div>
        </div>
    );
}
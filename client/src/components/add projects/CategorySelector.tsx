// components/projects/create/CategorySelector.tsx
'use client';
import { useFormContext } from 'react-hook-form';
import { DynamicIcon } from './DynamicIcon';
import { ProjectFormData } from '@/types/addProject';
import { categories } from '@/data/add project/categories';

export default function CategorySelector() {
    const { setValue, watch, formState: { errors } } = useFormContext<ProjectFormData>();
    const currentCategory = watch('category');

    return (
        <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700">Design Category *</label>
            <div className="flex flex-wrap gap-2">
                {categories.map((cat) => {
                    const isSelected = currentCategory === cat.id;
                    return (
                        <button
                        type="button"
                        key={cat.id}
                        onClick={() => setValue('category', cat.id, { shouldValidate: true })}
                        className={`flex items-center gap-1.5 px-3 py-2 border rounded-xl text-xs font-medium transition-all ${
                            isSelected 
                            ? 'bg-blue-600 border-blue-600 text-white shadow-3xs' 
                            : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                        }`}
                        >
                        <DynamicIcon name={cat.iconName} className="w-3.5 h-3.5" />
                        {cat.title}
                        </button>
                    );
                })}
            </div>
            {errors.category && <p className="text-[11px] font-medium text-red-500">{errors.category.message}</p>}
        </div>
    );
}
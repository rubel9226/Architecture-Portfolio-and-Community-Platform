// components/projects/create/SoftwareSelector.tsx
'use client';
import { useFormContext } from 'react-hook-form'; 
import { DynamicIcon } from './DynamicIcon';
import { ProjectFormData } from '@/types/addProject';
import { softwareList } from '@/data/add project/software';

export default function SoftwareSelector() {
    const { setValue, watch, formState: { errors } } = useFormContext<ProjectFormData>();
    const chosenSoftware = watch('softwareUsed') || [];

    const toggleSoftware = (id: string) => {
        const updated = chosenSoftware.includes(id)
        ? chosenSoftware.filter(x => x !== id)
        : [...chosenSoftware, id];
        setValue('softwareUsed', updated, { shouldValidate: true });
    };

    return (
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-3xs space-y-3">
            <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">4. Software Stack Pipeline</h3>
                <p className="text-[10px] text-slate-400 font-light mt-0.5">Select all digital production tools deployed during layout design sequences.</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {softwareList.map((sw) => {
                const isSelected = chosenSoftware.includes(sw.id);
                return (
                    <button
                    type="button"
                    key={sw.id}
                    onClick={() => toggleSoftware(sw.id)}
                    className={`flex items-center gap-2 p-2.5 border rounded-xl text-left transition-all ${
                        isSelected 
                        ? 'bg-blue-50 border-blue-500 text-blue-700 shadow-3xs' 
                        : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                    >
                    <DynamicIcon name={sw.iconName} className={`w-3.5 h-3.5 ${isSelected ? 'text-blue-600' : 'text-slate-400'}`} />
                    <span className="text-xs font-semibold truncate">{sw.name}</span>
                    </button>
                );
                })}
            </div>
            {errors.softwareUsed && <p className="text-[11px] font-medium text-red-500">{errors.softwareUsed.message}</p>}
        </div>
    );
}
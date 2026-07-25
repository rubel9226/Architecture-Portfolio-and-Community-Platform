// components/projects/ProjectTable.tsx
'use client'; 
import { useProjects } from '@/hooks/MyProjectsContext';
import { Eye, Heart, Trash2, Copy, Pin, Globe, Lock, EyeOff } from 'lucide-react';

export default function ProjectTable() {
    const { projects, selectedIds, toggleSelectProject, toggleSelectAll, duplicateProject, setDeleteId } = useProjects();

    return (
        <div className="bg-white border border-slate-200 rounded-2xl shadow-3xs overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-50/70 border-b border-slate-200 text-[10px] font-black text-slate-400 uppercase tracking-wider">
                        <th className="p-3.5 w-10">
                            <input
                            type="checkbox"
                            checked={projects.length > 0 && selectedIds.length === projects.length}
                            onChange={toggleSelectAll}
                            className="w-3.5 h-3.5 rounded border-slate-300 text-blue-600 focus:ring-blue-500 bg-white cursor-pointer"
                            />
                        </th>
                        <th className="p-3.5">Architecture Scheme Title</th>
                        <th className="p-3.5">Category</th>
                        <th className="p-3.5">Visibility</th>
                        <th className="p-3.5">Metrics</th>
                        <th className="p-3.5">Date Node</th>
                        <th className="p-3.5 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-xs font-medium text-slate-700 divide-y divide-slate-100">
                        {projects.map((p) => {
                        const isChecked = selectedIds.includes(p._id);
                        return (
                            <tr key={p?._id} className={`hover:bg-slate-50/40 transition-colors ${isChecked ? 'bg-blue-50/20' : ''}`}>
                            <td className="p-3.5">
                                <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={() => toggleSelectProject(p._id)}
                                className="w-3.5 h-3.5 rounded border-slate-300 text-blue-600 focus:ring-blue-500 bg-white cursor-pointer"
                                />
                            </td>
                            {/* <td className="p-3.5 font-bold text-slate-900">
                                <div className="flex items-center gap-1.5">
                                {p.isPinned && <Pin size={10} className="text-amber-500 fill-amber-500 shrink-0" />}
                                <span className="truncate max-w-xs">{p.title}</span>
                                </div>
                            </td> */}
                            <td className="p-3.5 text-slate-400">{p.category}</td>
                            <td className="p-3.5">
                                <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold">
                                {p.visibility === 'public' ? <Globe size={10} className="text-blue-500"/> : p.visibility === 'private' ? <Lock size={10} className="text-slate-400"/> : <EyeOff size={10} className="text-orange-500"/>}
                                {p.visibility}
                                </span>
                            </td>
                            <td className="p-3.5 text-slate-400">
                                <div className="flex items-center gap-2 font-mono text-[11px]">
                                {/* <span className="flex items-center gap-0.5"><Eye size={10} />{p.views}</span> */}
                                <span className="flex items-center gap-0.5"><Heart size={10} />{p.likes}</span>
                                </div>
                            </td>
                            <td className="p-3.5 text-slate-400 text-[11px] font-mono">{p.createdAt}</td>
                            <td className="p-3.5 text-right space-x-1">
                                <button onClick={() => duplicateProject(p?._id)} className="p-1 text-slate-400 hover:text-slate-900 rounded-lg transition-colors"><Copy size={12} /></button>
                                <button onClick={() => setDeleteId(p?._id)} className="p-1 text-slate-400 hover:text-red-600 rounded-lg transition-colors"><Trash2 size={12} /></button>
                            </td>
                            </tr>
                        );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
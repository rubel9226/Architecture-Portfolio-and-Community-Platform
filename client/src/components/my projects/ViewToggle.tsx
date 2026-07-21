// components/projects/ViewToggle.tsx
'use client';
import { useProjects } from '@/hooks/MyProjectsContext';
import { DashboardViewMode } from '@/types/myProject';
import { LayoutGrid, List, TableProperties } from 'lucide-react';

export default function ViewToggle() {
  const { viewMode, setViewMode } = useProjects();

  const triggers = [
    { id: 'grid' as DashboardViewMode, icon: LayoutGrid },
    { id: 'list' as DashboardViewMode, icon: List },
  ];

  return (
    <div className="inline-flex items-center bg-slate-700 border border-slate-500 p-0.5 rounded-md shadow-3xs">
      {triggers.map(t => (
        <button
          key={t.id}
          type="button"
          onClick={() => setViewMode(t.id)}
          className={`p-1.5 rounded-lg transition-colors ${viewMode === t.id ? 'bg-slate-100 text-slate-900' : 'text-slate-200 hover:text-slate-100 cursor-pointer'}`}
        >
          <t.icon size={13} />
        </button>
      ))}
    </div>
  );
}
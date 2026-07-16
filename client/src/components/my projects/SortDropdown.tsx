// components/projects/SortDropdown.tsx
'use client';
import { sortOptions } from '@/data/my project/sortOptions';
import { useProjects } from '@/hooks/MyProjectsContext';
import { ArrowUpDown } from 'lucide-react'; 

export default function SortDropdown() {
  const { sortBy, setSortBy } = useProjects();

  return (
    <div className="relative inline-flex items-center gap-1.5 bg-slate-700 border border-slate-500 px-2.5 py-1.5 rounded-xl shadow-3xs">
      <ArrowUpDown size={12} className="text-slate-200" />
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="bg-transparent text-xs font-semibold text-slate-200 focus:outline-hidden cursor-pointer"
      >
        {sortOptions.map(opt => <option className='bg-slate-700' key={opt.value} value={opt.value}>{opt.label}</option>)}
      </select>
    </div>
  );
}
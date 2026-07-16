// components/projects/SearchBar.tsx
'use client';
import { useProjects } from '@/hooks/MyProjectsContext';
import { Search } from 'lucide-react'; 

export default function SearchBar() {
  const { searchQuery, setSearchQuery } = useProjects();

  return (
    <div className="relative flex-1">
      <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-3.5 h-3.5" />
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search projects using title keywords or studio tags..."
        className="w-full text-xs pl-9 pr-4 py-2 bg-slate-700 border border-slate-500 rounded-xl focus:outline-hidden focus:border-blue-500 placeholder-slate-400 transition-colors shadow-3xs"
      />
    </div>
  );
}
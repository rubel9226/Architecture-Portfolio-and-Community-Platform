// components/projects/FilterBar.tsx
'use client';
import { useProjects } from "@/hooks/MyProjectsContext";
import SearchBar from "./SearchBar";
import SortDropdown from "./SortDropdown";
import ViewToggle from "./ViewToggle";
import { categoryFilters, visibilityFilters } from "@/data/my project/filters";

 
export default function FilterBar() {
    const { visibilityFilter, setVisibilityFilter, categoryFilter, setCategoryFilter } = useProjects();

    return (
        <div className="sticky top-20 z-30 bg-slate-900 backdrop-blur-md py-3 border-y border-slate-500 flex flex-col gap-3">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                <SearchBar />
                <div className="flex items-center gap-2 self-end md:self-auto">
                    <SortDropdown />
                    <ViewToggle />
                </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-2.5">
                {/* Visibility Toggles */}
                <div className="flex flex-wrap gap-1">
                    {visibilityFilters.map(f => (
                        <button
                            key={f.id}
                            onClick={() => setVisibilityFilter(f.id)}
                            className={`px-3 py-1 rounded-lg text-[11px] font-semibold transition-all ${
                                visibilityFilter === f.id 
                                ? 'bg-indigo-600 text-white shadow-3xs' 
                                : 'text-slate-200 hover:bg-indigo-600 cursor-pointer'
                            }`}
                        >
                            {f.label}
                        </button>
                    ))}
                </div>

                {/* Category Inline Scroller */}
                <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Studio:</span>
                    <select
                        value={categoryFilter}
                        onChange={(e) => setCategoryFilter(e.target.value)}
                        className="text-[11px] font-semibold bg-slate-700 border border-slate-500 rounded-lg px-2 py-1 text-slate-200 focus:outline-hidden focus:border-blue-500 shadow-3xs"
                    >
                        {categoryFilters.map(c => <option key={c.id} value={c.id}>{c.label}</option>)}
                    </select>
                </div>
            </div>
        </div>
    );
}
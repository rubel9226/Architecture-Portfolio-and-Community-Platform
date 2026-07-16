'use client';

import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

export const SearchInput: React.FC = () => {
  const [query, setQuery] = useState('');

  return (
    <div className="relative w-full max-w-xs">
      <label htmlFor="global-search" className="sr-only">Search architecture projects</label>
      <div className="relative">
        <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 pointer-events-none" />
        <input
          id="global-search"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search projects, students..."
          className="w-full h-10 pl-10 pr-9 rounded-full bg-slate-100 dark:bg-slate-800 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 border border-transparent focus:border-blue-600 focus:bg-white dark:focus:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all duration-300"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-0.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            aria-label="Clear search input"
          >
            <X className="h-3 w-3" />
          </button>
        )}
      </div>
    </div>
  );
};
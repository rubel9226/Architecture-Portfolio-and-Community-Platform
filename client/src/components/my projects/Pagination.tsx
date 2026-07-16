// components/projects/Pagination.tsx
'use client';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function Pagination() {
  return (
    <nav className="flex items-center justify-between border-t border-slate-200 pt-4 text-xs font-semibold text-slate-500">
      <button type="button" className="inline-flex items-center gap-1 px-3 py-1.5 border border-slate-200 bg-white hover:bg-slate-50 rounded-xl text-slate-600 transition-colors">
        <ArrowLeft size={13} /> Previous
      </button>
      
      <div className="flex items-center gap-1">
        <button type="button" className="w-8 h-8 rounded-xl flex items-center justify-center bg-slate-900 text-white font-bold">1</button>
        <button type="button" className="w-8 h-8 rounded-xl flex items-center justify-center hover:bg-slate-100">2</button>
        <button type="button" className="w-8 h-8 rounded-xl flex items-center justify-center hover:bg-slate-100">3</button>
      </div>

      <button type="button" className="inline-flex items-center gap-1 px-3 py-1.5 border border-slate-200 bg-white hover:bg-slate-50 rounded-xl text-slate-600 transition-colors">
        Next <ArrowRight size={13} />
      </button>
    </nav>
  );
}
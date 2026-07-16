// components/projects/create/PublishActions.tsx
'use client';
import { useFormContext } from 'react-hook-form';
import { Save, Send, Eye } from 'lucide-react';

interface ActionsProps {
  isSubmitting: boolean;
  onOpenConfirmation: () => void;
}

export default function PublishActions({ isSubmitting, onOpenConfirmation }: ActionsProps) {
    const { formState: { isValid } } = useFormContext();

    return (
        <div className="fixed bottom-0 left-0 right-0 border-t border-slate-200 bg-white/80 backdrop-blur-md py-3.5 px-4 sm:px-6 z-40 shadow-xs">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
            <button 
            type="button" 
            className="inline-flex items-center gap-1.5 px-4 py-2 border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 text-xs font-semibold rounded-xl transition-colors"
            >
            <Save size={14} /> Save Draft
            </button>
            
            <div className="flex items-center gap-2">
            <button 
                type="button" 
                className="inline-flex items-center gap-1.5 px-4 py-2 border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 text-xs font-semibold rounded-xl lg:hidden transition-colors"
            >
                <Eye size={14} /> Preview
            </button>
            <button 
                type="button"
                disabled={isSubmitting}
                onClick={(e) => {
                e.preventDefault();
                onOpenConfirmation();
                }}
                className={`inline-flex items-center gap-1.5 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl transition-all shadow-3xs ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
            >
                <Send size={14} /> {isSubmitting ? 'Processing...' : 'Publish Project'}
            </button>
            </div>
        </div>
        </div>
    );
}
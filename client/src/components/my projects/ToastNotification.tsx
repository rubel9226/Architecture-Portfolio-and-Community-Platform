// components/projects/ToastNotification.tsx
'use client';
import { useEffect } from 'react'; 
import { CheckCircle2, AlertCircle } from 'lucide-react';
import { useProjects } from '@/hooks/MyProjectsContext';

export default function ToastNotification() {
    const { toast, dismissToast } = useProjects();

    useEffect(() => {
        if (toast.show) {
            const timer = setTimeout(dismissToast, 3500);
            return () => clearTimeout(timer);
        }
    }, [toast.show, dismissToast]);

    if (!toast.show) return null;

    return (
        <div className="fixed top-6 right-6 z-50 text-xs font-bold border rounded-xl px-4 py-3 shadow-md flex items-center gap-2 bg-white animate-in slide-in-from-top-4 duration-300">
            {toast.type === 'success' ? (
                <CheckCircle2 size={14} className="text-teal-600" />
            ) : (
                <AlertCircle size={14} className="text-red-500" />
            )}
            <span className="text-slate-800 font-medium">{toast.message}</span>
        </div>
    );
}
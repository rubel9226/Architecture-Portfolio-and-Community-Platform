// components/projects/create/UploadProgress.tsx
'use client';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

interface ProgressProps {
  progress: number;
  isComplete: boolean;
}

export default function UploadProgress({ progress, isComplete }: ProgressProps) {
    return (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center z-50 p-4">
        <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-full max-w-sm bg-white rounded-2xl border border-slate-200 p-6 shadow-md text-center space-y-4"
        >
            {!isComplete ? (
            <div className="space-y-3">
                <h4 className="text-sm font-bold text-slate-900">Uploading Architectural Assets...</h4>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden relative">
                <motion.div 
                    className="h-full bg-blue-600 absolute left-0 top-0"
                    initial={{ width: '0%' }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.1 }}
                />
                </div>
                <span className="text-xs font-mono text-slate-500">{progress}% Assembly Verified</span>
            </div>
            ) : (
            <motion.div 
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="space-y-3 flex flex-col items-center"
            >
                <div className="p-3 bg-teal-50 text-teal-600 rounded-full border border-teal-100">
                <CheckCircle size={24} />
                </div>
                <h4 className="text-sm font-bold text-slate-900">Project Discovered & Published</h4>
                <p className="text-xs text-slate-400 font-light">Your conceptual blueprint matrix is now live across all discoverable cluster feeds.</p>
            </motion.div>
            )}
        </motion.div>
        </div>
    );
}
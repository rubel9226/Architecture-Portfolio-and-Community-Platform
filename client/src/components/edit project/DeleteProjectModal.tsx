"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, X } from "lucide-react";

interface DeleteProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const DeleteProjectModal: React.FC<DeleteProjectModalProps> = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black"
                />
                
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 15 }}
                    className="relative bg-neutral-950 border border-neutral-850 w-full max-w-md p-6 rounded-2xl z-10 space-y-6 shadow-2xl"
                >
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-rose-950/50 border border-rose-900 text-rose-400 rounded-xl">
                            <AlertCircle size={22} />
                        </div>
                        <div className="space-y-1.5">
                            <h4 className="text-base font-bold text-white">Purge Architectural Asset?</h4>
                            <p className="text-xs text-neutral-400 font-light leading-relaxed">
                                This process isolates and purges all asset blocks, renders, metrics, and documentation summaries permanently. This cannot be rolled back.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center justify-end gap-3 pt-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white rounded-xl text-xs font-medium transition-colors cursor-pointer"
                        >
                            Retain Record
                        </button>
                        <button
                            type="button"
                            onClick={onConfirm}
                            className="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
                        >
                            Purge Database
                        </button>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};
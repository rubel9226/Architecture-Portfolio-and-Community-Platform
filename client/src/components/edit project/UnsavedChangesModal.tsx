"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle } from "lucide-react";

interface UnsavedChangesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLeave: () => void;
}

export const UnsavedChangesModal: React.FC<UnsavedChangesModalProps> = ({ isOpen, onClose, onLeave }) => {
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
                        <div className="p-3 bg-amber-950/50 border border-amber-900 text-amber-400 rounded-xl">
                            <AlertCircle size={22} />
                        </div>
                        <div className="space-y-1.5">
                            <h4 className="text-base font-bold text-white">Uncommitted Matrix Modifications</h4>
                            <p className="text-xs text-neutral-400 font-light leading-relaxed">
                                You possess live architectural data parameters that have not been compiled or synced to the production database layers yet.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center justify-end gap-3 pt-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white rounded-xl text-xs font-medium transition-colors cursor-pointer"
                        >
                            Keep Editing
                        </button>
                        <button
                            type="button"
                            onClick={onLeave}
                            className="px-4 py-2 bg-white text-black font-bold rounded-xl text-xs transition-colors cursor-pointer"
                        >
                            Discard Changes
                        </button>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};
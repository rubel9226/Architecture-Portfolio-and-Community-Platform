"use client";

import React from "react";
import { Save, Trash2, Eye } from "lucide-react";

interface PublishActionsProps {
  isSubmitting: boolean;
  onDeleteTrigger: () => void;
  onCancelTrigger: () => void;
}

export const PublishActions: React.FC<PublishActionsProps> = ({
  isSubmitting,
  onDeleteTrigger,
  onCancelTrigger
}) => {
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-neutral-950/80 backdrop-blur-md border-t border-neutral-900 py-4 z-40 shadow-2xl">
            <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex items-center justify-between gap-4">
                <button
                    type="button"
                    onClick={onDeleteTrigger}
                    className="flex items-center gap-2 px-4 py-2.5 bg-transparent hover:bg-rose-950/20 text-rose-400 rounded-xl text-xs font-semibold transition-all border border-transparent hover:border-rose-900/30 cursor-pointer"
                >
                    <Trash2 size={14} /> Wipe Blueprint
                </button>

                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        onClick={onCancelTrigger}
                        className="px-5 py-2.5 bg-neutral-900 hover:bg-neutral-800 border border-neutral-850 text-neutral-300 rounded-xl text-xs font-medium transition-all cursor-pointer"
                    >
                        Abort Sync
                    </button>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex items-center gap-2 px-6 py-2.5 bg-white text-black hover:bg-neutral-100 disabled:bg-neutral-800 disabled:text-neutral-500 rounded-xl text-xs font-bold tracking-tight transition-all cursor-pointer shadow-lg"
                    >
                        <Save size={14} />
                        {isSubmitting ? "Syncing Fields..." : "Commit Asset Changes"}
                    </button>
                </div>
            </div>
        </div>
    );
};
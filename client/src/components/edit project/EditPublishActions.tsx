"use client";

import React from "react";
import { Loader2, CloudUpload } from "lucide-react";

interface EditPublishActionsProps {
  isSubmitting: boolean;
  uploadProgress: number;
}

export default function EditPublishActions({ isSubmitting, uploadProgress }: EditPublishActionsProps) {
    return (
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 backdrop-blur-sm space-y-4">
        <button
            type="submit"
            disabled={isSubmitting}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 disabled:bg-zinc-800 disabled:text-zinc-500 px-4 py-3 text-sm font-semibold text-zinc-950 transition-colors shadow-lg shadow-emerald-950/20"
        >
            {isSubmitting ? (
            <>
                <Loader2 className="h-4 w-4 animate-spin text-zinc-500" />
                <span>Updating Record...</span>
            </>
            ) : (
            <>
                <CloudUpload className="h-4 w-4" />
                <span>Save Modifications</span>
            </>
            )}
        </button>

        {isSubmitting && uploadProgress > 0 && (
            <div className="space-y-1.5">
            <div className="flex items-center justify-between text-[11px] font-medium text-zinc-400">
                <span>Payload Data Multi-part Transmission</span>
                <span>{uploadProgress}%</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-950 border border-zinc-800">
                <div
                className="h-full bg-emerald-400 transition-all duration-300 rounded-full"
                style={{ width: `${uploadProgress}%` }}
                />
            </div>
            </div>
        )}
        </div>
    );
}
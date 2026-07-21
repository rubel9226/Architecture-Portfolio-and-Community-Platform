"use client";


import { useRouter } from "next/navigation"; 
import { UploadProgress } from "@/types/addProject";

interface PublishActionsProps {
  progress: UploadProgress;
}

export default function PublishActions({ progress }: PublishActionsProps) {
  const router = useRouter();

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-3 pt-4 border-t border-neutral-200">
      <button
        type="button"
        disabled={progress.isUploading}
        onClick={() => router.push("/projects")}
        className="px-5 py-2.5 text-sm font-medium border border-neutral-300 dark:border-neutral-700 rounded text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition disabled:opacity-50 cursor-pointer"
      >
        Cancel
      </button>

      <button
        type="submit"
        disabled={progress.isUploading}
        className="px-6 py-2.5 text-sm font-medium bg-neutral-900 dark:bg-white hover:bg-neutral-800 dark:hover:bg-neutral-200 text-white dark:text-neutral-900 rounded transition flex items-center justify-center gap-2 min-w-[140px] disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
      >
        {progress.isUploading ? (
          <>
            <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            <span>Uploading {progress.percentage}%</span>
          </>
        ) : (
          "Publish Project"
        )}
      </button>
    </div>
  );
}
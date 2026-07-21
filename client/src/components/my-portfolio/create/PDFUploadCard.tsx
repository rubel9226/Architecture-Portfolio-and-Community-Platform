import { FileText, RefreshCw, Trash2 } from "lucide-react";
import { useRef } from "react";

// --- PDF Resume Upload Card ---
interface PDFUploadProps {
  file: { name: string; size: string } | null;
  onUpload: (file: File) => void;
  onRemove: () => void;
}

export const PDFUploadCard: React.FC<PDFUploadProps> = ({ file, onUpload, onRemove }) => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    return (
        <div className="flex flex-col gap-2">
            <span className="text-xs font-medium text-slate-700 dark:text-zinc-300">
                Resume / CV (PDF)
            </span>
            <input
                type="file"
                ref={fileInputRef}
                onChange={(e) => e.target.files?.[0] && onUpload(e.target.files[0])}
                accept="application/pdf"
                className="hidden"
            />

            {file ? (
                <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-zinc-900/50 border border-slate-200 dark:border-zinc-800 rounded-2xl">
                    <div className="flex items-center gap-3 overflow-hidden">
                        <div className="p-2.5 bg-red-500/10 text-red-500 rounded-xl flex-shrink-0">
                            <FileText className="w-5 h-5" />
                        </div>
                        <div className="truncate">
                            <p className="text-xs font-medium text-slate-800 dark:text-zinc-200 truncate">
                                {file.name}
                            </p>
                            <p className="text-[11px] text-slate-400 dark:text-zinc-500">
                                {file.size}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                        <button
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            className="p-1.5 text-slate-500 hover:text-slate-800 dark:text-zinc-400 dark:hover:text-zinc-200 rounded-lg transition-colors"
                            title="Replace PDF"
                        >
                            <RefreshCw className="w-4 h-4" />
                        </button>
                        <button
                            type="button"
                            onClick={onRemove}
                            className="p-1.5 text-red-500 hover:text-red-600 rounded-lg transition-colors"
                            title="Remove PDF"
                        >
                            <Trash2 className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            ) : (
                <div
                    onClick={() => fileInputRef.current?.click()}
                    className="flex items-center justify-between p-4 bg-slate-50/50 dark:bg-zinc-900/30 border border-dashed border-slate-200 dark:border-zinc-800 hover:border-slate-300 dark:hover:border-zinc-700 rounded-2xl cursor-pointer transition-all group"
                >
                    <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-slate-100 dark:bg-zinc-800 text-slate-500 dark:text-zinc-400 rounded-xl group-hover:text-slate-800 dark:group-hover:text-zinc-200 transition-colors">
                            <FileText className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-xs font-medium text-slate-800 dark:text-zinc-200">
                                Upload your Resume
                            </p>
                            <p className="text-[11px] text-slate-400 dark:text-zinc-500">
                                PDF up to 10MB
                            </p>
                        </div>
                    </div>
                    <span className="text-xs font-medium text-slate-600 dark:text-zinc-400 bg-white dark:bg-zinc-800 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-zinc-700 shadow-sm">
                        Select File
                    </span>
                </div>
            )}
        </div>
    );
};
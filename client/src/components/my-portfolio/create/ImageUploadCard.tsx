import { Loader2, RefreshCw, Trash2, Upload } from "lucide-react";
import { AnimatePresence, motion } from 'framer-motion';
import { useRef, useState } from "react";

// --- Image Drag & Drop Upload Card ---
interface ImageUploadProps {
  label: string;
  imagePreview: string | null;
  onImageChange: (file: File) => void;
  onRemove: () => void;
  isUploading?: boolean;
}

export const ImageUploadCard: React.FC<ImageUploadProps> = ({ label, imagePreview, onImageChange, onRemove, isUploading = false, }) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [isDragging, setIsDragging] = useState(false);

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
            if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            onImageChange(e.dataTransfer.files[0]);
        }
    };

    return (
        <div className="flex flex-col gap-2">
            <span className="text-xs font-medium text-slate-700 dark:text-zinc-300">
                {label}
            </span>
            <div
                onDragOver={(e) => {
                    e.preventDefault();
                    setIsDragging(true);
                }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleDrop}
                onClick={() => !imagePreview && fileInputRef.current?.click()}
                className={`relative flex flex-col items-center justify-center h-48 rounded-2xl border-2 border-dashed transition-all overflow-hidden ${
                    isDragging
                        ? "border-zinc-900 dark:border-zinc-100 bg-zinc-50 dark:bg-zinc-900/80"
                        : "border-slate-200 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-900/30 hover:border-slate-300 dark:hover:border-zinc-700"
                    } ${!imagePreview ? "cursor-pointer" : ""}`}
            >
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={(e) => e.target.files?.[0] && onImageChange(e.target.files[0])}
                    accept="image/png, image/jpeg, image/webp"
                    className="hidden"
                />

                {isUploading && (
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-white/80 dark:bg-zinc-950/80 backdrop-blur-sm">
                        <Loader2 className="w-6 h-6 animate-spin text-zinc-900 dark:text-zinc-100 mb-2" />
                        <span className="text-xs text-slate-600 dark:text-zinc-400 font-medium">Uploading...</span>
                    </div>
                )}

                <AnimatePresence mode="wait">
                    {imagePreview ? (
                        <motion.div
                            key="preview"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="relative w-full h-full group"
                        >
                            <img
                                src={imagePreview}
                                alt={label}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                                <button
                                    type="button"
                                    onClick={() => fileInputRef.current?.click()}
                                    className="p-2 bg-white/90 hover:bg-white text-zinc-900 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors"
                                >
                                <RefreshCw className="w-3.5 h-3.5" /> Replace
                                </button>
                                <button
                                    type="button"
                                    onClick={onRemove}
                                    className="p-2 bg-red-600/90 hover:bg-red-600 text-white rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors"
                                >
                                <Trash2 className="w-3.5 h-3.5" /> Remove
                                </button>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="placeholder"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex flex-col items-center justify-center p-4 text-center"
                        >
                            <div className="p-3 bg-white dark:bg-zinc-800 rounded-full shadow-sm mb-3 border border-slate-200 dark:border-zinc-700">
                                <Upload className="w-5 h-5 text-slate-500 dark:text-zinc-400" />
                            </div>
                            <p className="text-xs font-semibold text-slate-800 dark:text-zinc-200 mb-1">
                                Click to upload <span className="font-normal text-slate-500 dark:text-zinc-400">or drag and drop</span>
                            </p>
                            <p className="text-[11px] text-slate-400 dark:text-zinc-500">
                                PNG, JPG or WEBP (Max 5MB)
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};
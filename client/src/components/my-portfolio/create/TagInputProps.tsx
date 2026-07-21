
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useState } from 'react';
// --- Tag Input Component ---
interface TagInputProps {
  placeholder: string;
  tags: string[];
  onAddTag: (tag: string) => void;
  onRemoveTag: (index: number) => void;
}

export const TagInput: React.FC<TagInputProps> = ({ placeholder, tags, onAddTag, onRemoveTag, }) => {
    const [input, setInput] = useState("");

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && input.trim()) {
            e.preventDefault();
        if (!tags.includes(input.trim())) {
            onAddTag(input.trim());
        }
            setInput("");
        }
    };

    return (
        <div className="space-y-3">
            <div className="flex flex-wrap gap-2 min-h-10.5 p-2 bg-slate-50 dark:bg-zinc-900/50 border border-slate-200 dark:border-zinc-800 rounded-xl transition-all focus-within:border-zinc-400 dark:focus-within:border-zinc-600 focus-within:ring-1 focus-within:ring-zinc-400 dark:focus-within:ring-zinc-600">
                <AnimatePresence>
                {tags.map((tag, index) => (
                    <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.15 }}
                        className="inline-flex items-center gap-1.5 px-3 py-1 bg-white dark:bg-zinc-800 text-slate-800 dark:text-zinc-200 text-xs font-medium rounded-lg border border-slate-200 dark:border-zinc-700/60 shadow-sm"
                    >
                        {tag}
                        <button
                            type="button"
                            onClick={() => onRemoveTag(index)}
                            className="text-slate-400 hover:text-slate-600 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                        >
                            <X className="w-3.5 h-3.5" />
                        </button>
                    </motion.span>
                ))}
                </AnimatePresence>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={tags.length === 0 ? placeholder : "Add more..."}
                    className="flex-1 min-w-30 bg-transparent text-sm text-slate-900 dark:text-zinc-100 placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none px-1 py-0.5"
                />
            </div>
            <p className="text-[11px] text-slate-500 dark:text-zinc-500">
                Press <kbd className="px-1.5 py-0.5 bg-slate-200 dark:bg-zinc-800 border border-slate-300 dark:border-zinc-700 rounded text-[10px]">Enter</kbd> to add a tag
            </p>
        </div>
    );
};
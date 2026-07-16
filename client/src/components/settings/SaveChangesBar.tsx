// components/settings/SaveChangesBar.tsx
'use client';
import { motion } from 'framer-motion';
import { Save } from 'lucide-react';

export default function SaveChangesBar({ visible }: { visible: boolean }) {
  if (!visible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className="fixed bottom-6 left-4 right-4 md:left-auto md:right-12 z-40 max-w-xl w-full mx-auto md:mx-0"
    >
      <div className="bg-zinc-900/90 dark:bg-black/80 backdrop-blur-md border border-zinc-800 px-5 py-3.5 rounded-2xl flex items-center justify-between shadow-lg gap-4">
        <p className="text-xs text-zinc-300 font-light">You have uncommitted setting updates.</p>
        <div className="flex gap-2">
          <button type="button" className="px-3 py-1.5 text-zinc-400 hover:text-white text-xs font-medium transition-colors">Discard</button>
          <button type="button" className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-xl shadow-md transition-colors">
            <Save size={13}/> Save Changes
          </button>
        </div>
      </div>
    </motion.div>
  );
}
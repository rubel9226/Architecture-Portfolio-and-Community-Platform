// components/settings/ToggleSwitch.tsx
'use client';
import { motion } from 'framer-motion';

interface ToggleProps {
  checked: boolean;
  onChange: (val: boolean) => void;
  label: string;
  description?: string;
}

export default function ToggleSwitch({ checked, onChange, label, description }: ToggleProps) {
  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex flex-col pr-4">
        <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">{label}</span>
        {description && <span className="text-xs text-zinc-400 font-light">{description}</span>}
      </div>
      <button
        type="button"
        onClick={() => onChange(!checked)}
        className={`relative w-11 h-6 rounded-full transition-colors duration-200 shrink-0 outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 focus:ring-offset-2 ${
          checked ? 'bg-blue-600' : 'bg-zinc-200 dark:bg-zinc-800'
        }`}
      >
        <motion.span
          layout
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          className="absolute top-1 left-1 bg-white w-4 h-4 rounded-full shadow-sm"
          animate={{ x: checked ? 20 : 0 }}
        />
      </button>
    </div>
  );
}
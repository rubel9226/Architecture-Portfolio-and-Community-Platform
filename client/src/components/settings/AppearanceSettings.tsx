// components/settings/AppearanceSettings.tsx
'use client';
import { Sun, Moon, Monitor } from 'lucide-react';
import SettingSection from './SettingSection';

export default function AppearanceSettings() {
  const options = [
    { mode: 'light', icon: Sun, label: 'Alabaster Light' },
    { mode: 'dark', icon: Moon, label: 'Obsidian Dark' },
    { mode: 'system', icon: Monitor, label: 'System Sync' },
  ];

  return (
    <SettingSection title="Interface System Profile" description="Modify layout styles to fit your workflow environment.">
      <div className="space-y-6">
        <div>
          <label className="block text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-3">Theme Selection</label>
          <div className="grid grid-cols-3 gap-3 max-w-md">
            {options.map((opt) => (
              <button
                key={opt.mode}
                type="button"
                className={`p-4 border rounded-xl flex flex-col items-center justify-center gap-2 text-center transition-all ${
                  opt.mode === 'dark'
                    ? 'border-zinc-900 bg-zinc-950 text-white shadow-xs'
                    : 'border-zinc-200 dark:border-zinc-800 bg-transparent text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-850'
                }`}
              >
                <opt.icon size={18} />
                <span className="text-xs font-medium tracking-tight">{opt.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-md">
          <label className="block text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-1.5">Primary Branding Chroma</label>
          <div className="flex gap-2">
            {['bg-blue-600', 'bg-teal-600', 'bg-orange-600', 'bg-zinc-900'].map((color, i) => (
              <button
                key={i}
                type="button"
                className={`w-6 h-6 rounded-full ${color} ring-offset-2 ${
                  i === 0 ? 'ring-2 ring-zinc-400' : ''
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </SettingSection>
  );
}
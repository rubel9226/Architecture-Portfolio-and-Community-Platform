// components/settings/SettingsSidebar.tsx
'use client';
import { motion } from 'framer-motion';
import { settingsMenu } from '@/data/settingsMenu';
import { SettingsTabId } from '@/types/setting';
import { DynamicIcon } from './DynamicIcon';

interface SidebarProps {
  activeTab: SettingsTabId;
  setActiveTab: (id: SettingsTabId) => void;
}

export default function SettingsSidebar({ activeTab, setActiveTab }: SidebarProps) {
  return (
    <nav className="w-full lg:w-64 space-y-1 bg-white dark:bg-zinc-900 p-2 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-xs shrink-0 lg:sticky lg:top-24">
      {settingsMenu.map((item) => {
        const isActive = activeTab === item.id;
        return (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-left text-xs font-medium tracking-tight transition-all relative group ${
              isActive 
                ? 'text-zinc-950 dark:text-white font-semibold' 
                : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-850'
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="activeTabIndicator"
                className="absolute inset-0 bg-zinc-100 dark:bg-zinc-800 rounded-xl -z-0"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
            <span className={`relative z-10 ${isActive ? 'text-blue-600' : 'text-zinc-400 group-hover:text-zinc-500'}`}>
              <DynamicIcon name={item.iconName} className="w-4 h-4" />
            </span>
            <span className="relative z-10">{item.title}</span>
          </button>
        );
      })}
    </nav>
  );
}
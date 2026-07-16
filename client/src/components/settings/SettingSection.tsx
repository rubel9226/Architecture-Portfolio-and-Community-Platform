// components/settings/SettingSection.tsx
import React from 'react';

interface SettingSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export default function SettingSection({ title, description, children }: SettingSectionProps) {
  return (
    <section className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-xs overflow-hidden transition-all duration-200">
      <div className="px-6 py-5 border-b border-zinc-100 dark:border-zinc-800">
        <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">{title}</h3>
        {description && (
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 font-light">{description}</p>
        )}
      </div>
      <div className="p-6 space-y-6">{children}</div>
    </section>
  );
}
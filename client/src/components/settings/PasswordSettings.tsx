// components/settings/PasswordSettings.tsx
'use client';
import { useState } from 'react';
import { Eye, EyeOff, Lock } from 'lucide-react';
import SettingSection from './SettingSection';

export default function PasswordSettings() {
  const [showPass, setShowPass] = useState(false);

  return (
    <SettingSection title="Authentication Security" description="Ensure your account credentials follow high-entropy constraints.">
      <div className="space-y-4 max-w-md">
        {['Current Password', 'New Password', 'Confirm New Password'].map((lbl, idx) => (
          <div key={idx}>
            <label className="block text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-1.5">{lbl}</label>
            <div className="relative">
              <input
                type={showPass ? 'text' : 'password'}
                className="w-full text-sm bg-transparent border border-zinc-200 dark:border-zinc-800 rounded-xl pl-3.5 pr-10 py-2 text-zinc-800 dark:text-zinc-200 focus:outline-hidden focus:border-zinc-900 dark:focus:border-zinc-100 transition-colors"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 top-2.5 text-zinc-400 dark:text-zinc-500 hover:text-zinc-600"
              >
                {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>
        ))}
        <button type="button" className="inline-flex items-center gap-1.5 px-3 py-2 bg-zinc-950 dark:bg-zinc-50 text-white dark:text-zinc-950 text-xs font-medium rounded-xl hover:opacity-90 transition-opacity">
          <Lock size={12}/> Update Password
        </button>
      </div>
    </SettingSection>
  );
}
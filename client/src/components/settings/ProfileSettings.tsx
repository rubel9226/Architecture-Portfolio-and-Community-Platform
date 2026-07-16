// components/settings/ProfileSettings.tsx
'use client';
import Image from 'next/image';
import { Upload, Image as ImageIcon } from 'lucide-react';
import SettingSection from './SettingSection';

export default function ProfileSettings() {
  return (
    <div className="space-y-6">
      <SettingSection title="Avatar & Brand Presence" description="Manage your global digital avatar and portfolio identity banner.">
        <div className="space-y-6">
          <div className="relative group rounded-xl h-44 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer z-10">
              <span className="text-xs text-white font-medium flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-lg"><ImageIcon size={14}/> Change Cover</span>
            </div>
            <div className="text-zinc-400 dark:text-zinc-500 text-center text-xs font-light"><ImageIcon className="mx-auto mb-1" size={24}/> Recommended: 1920x1080px</div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="relative w-20 h-20 rounded-full bg-zinc-200 dark:bg-zinc-800 border-2 border-white dark:border-zinc-900 shadow-sm overflow-hidden shrink-0">
              <Image src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80" alt="Avatar" fill className="object-cover" />
            </div>
            <div className="space-y-1.5">
              <div className="flex gap-2">
                <button type="button" className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-lg text-xs font-medium hover:bg-zinc-800 transition-colors shadow-2xs"><Upload size={12}/> Upload Image</button>
                <button type="button" className="px-3 py-1.5 border border-zinc-200 dark:border-zinc-800 rounded-lg text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-850 transition-colors">Remove</button>
              </div>
              <p className="text-[11px] text-zinc-400 font-light">JPG, PNG or WEBP. Max size 2MB.</p>
            </div>
          </div>
        </div>
      </SettingSection>

      <SettingSection title="Professional Identity">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-1.5">Full Name</label>
            <input type="text" className="w-full text-sm bg-transparent border border-zinc-200 dark:border-zinc-800 rounded-xl px-3.5 py-2 text-zinc-800 dark:text-zinc-200 focus:outline-hidden focus:border-zinc-900 dark:focus:border-zinc-100 transition-colors" defaultValue="Elena Rostova" />
          </div>
          <div>
            <label className="block text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-1.5">Username</label>
            <input type="text" className="w-full text-sm bg-transparent border border-zinc-200 dark:border-zinc-800 rounded-xl px-3.5 py-2 text-zinc-800 dark:text-zinc-200 focus:outline-hidden focus:border-zinc-900 dark:focus:border-zinc-100 transition-colors" defaultValue="elena_rostova" />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-1.5">Headline</label>
            <input type="text" className="w-full text-sm bg-transparent border border-zinc-200 dark:border-zinc-800 rounded-xl px-3.5 py-2 text-zinc-800 dark:text-zinc-200 focus:outline-hidden focus:border-zinc-900 dark:focus:border-zinc-100 transition-colors" defaultValue="Parametric Architect & Computational Computational Designer" />
          </div>
          <div>
            <label className="block text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-1.5">University</label>
            <input type="text" className="w-full text-sm bg-transparent border border-zinc-200 dark:border-zinc-800 rounded-xl px-3.5 py-2 text-zinc-800 dark:text-zinc-200 focus:outline-hidden focus:border-zinc-900 dark:focus:border-zinc-100 transition-colors" defaultValue="AA School of Architecture" />
          </div>
          <div>
            <label className="block text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-1.5">Department</label>
            <input type="text" className="w-full text-sm bg-transparent border border-zinc-200 dark:border-zinc-800 rounded-xl px-3.5 py-2 text-zinc-800 dark:text-zinc-200 focus:outline-hidden focus:border-zinc-900 dark:focus:border-zinc-100 transition-colors" defaultValue="Computational Design" />
          </div>
        </div>
      </SettingSection>
    </div>
  );
}
// components/settings/AccountSettings.tsx
import SettingSection from './SettingSection';

export default function AccountSettings() {
  return (
    <div className="space-y-6">
      <SettingSection title="Account Parameters" description="System configurations governing platform identification rules.">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-1.5">System Language</label>
            <select className="w-full text-sm bg-transparent border border-zinc-200 dark:border-zinc-800 rounded-xl px-3.5 py-2 text-zinc-800 dark:text-zinc-200 focus:outline-hidden transition-colors">
              <option>English (UK)</option>
              <option>Deutsch</option>
              <option>日本語</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-1.5">System Timezone</label>
            <select className="w-full text-sm bg-transparent border border-zinc-200 dark:border-zinc-800 rounded-xl px-3.5 py-2 text-zinc-800 dark:text-zinc-200 focus:outline-hidden transition-colors">
              <option>GMT +00:00 (London)</option>
              <option>EST -05:00 (New York)</option>
            </select>
          </div>
        </div>
      </SettingSection>

      <SettingSection title="Identity Credentials">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 p-4 border border-zinc-150 dark:border-zinc-800 rounded-xl bg-zinc-50/50 dark:bg-zinc-900/50">
          <div>
            <p className="text-xs font-medium text-zinc-800 dark:text-zinc-200">Account Primary Email</p>
            <p className="text-xs text-zinc-400 font-light mt-0.5">Your email address is verified and active: e.rostova@archifolio.com</p>
          </div>
          <button type="button" className="w-fit text-xs font-medium bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 px-3 py-1.5 rounded-lg text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-750 transition-all">Change Email</button>
        </div>
      </SettingSection>
    </div>
  );
}
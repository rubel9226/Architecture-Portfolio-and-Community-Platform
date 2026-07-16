// components/settings/PrivacySettings.tsx
'use client';
import { useState } from 'react';
import SettingSection from './SettingSection';
import ToggleSwitch from './ToggleSwitch';

export default function PrivacySettings() {
  const [engineIndex, setEngineIndex] = useState(true);
  const [onlineStatus, setOnlineStatus] = useState(true);

  return (
    <div className="space-y-6">
      <SettingSection title="Privacy & Discovery Matrix" description="Control system lookup parameters for your platform account.">
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-1.5">Communications Inbound Gateway</label>
            <select className="w-full text-sm bg-transparent border border-zinc-200 dark:border-zinc-800 rounded-xl px-3.5 py-2 text-zinc-800 dark:text-zinc-200 focus:outline-hidden transition-colors">
              <option>Anyone (All platform users and verified firms)</option>
              <option>Network connections and followers only</option>
              <option>Complete system isolation</option>
            </select>
          </div>
          <div className="divide-y divide-zinc-100 dark:divide-zinc-800 pt-2">
            <ToggleSwitch
              label="Allow Search Engine Indexing"
              description="Permit Google, Bing, and external crawling nodes to map your public workspace profile."
              checked={engineIndex}
              onChange={setEngineIndex}
            />
            <ToggleSwitch
              label="Broadcast Live Connectivity Status"
              description="Render real-time green visibility anchors when your operational session is active."
              checked={onlineStatus}
              onChange={setOnlineStatus}
            />
          </div>
        </div>
      </SettingSection>
    </div>
  );
}
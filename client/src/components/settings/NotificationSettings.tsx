// components/settings/NotificationSettings.tsx
'use client';
import { useState } from 'react';
import SettingSection from './SettingSection';
import ToggleSwitch from './ToggleSwitch';

export default function NotificationSettings() {
  const [notifs, setNotifs] = useState({
    comments: true,
    likes: true,
    followers: true,
    messages: true,
    newsletter: false,
    competitions: true,
  });

  return (
    <SettingSection title="Notification Architecture" description="Calibrate downstream signal frequency rules across all hardware layers.">
      <div className="space-y-2 divide-y divide-zinc-100 dark:divide-zinc-800">
        <ToggleSwitch
          label="Comments & Reviews"
          description="Notify when peer critiques land on structural project entries."
          checked={notifs.comments}
          onChange={(v) => setNotifs({ ...notifs, comments: v })}
        />
        <ToggleSwitch
          label="Appreciations & Likes"
          description="Signal instantly when projects accumulate user interaction marks."
          checked={notifs.likes}
          onChange={(v) => setNotifs({ ...notifs, likes: v })}
        />
        <ToggleSwitch
          label="Network Connection Updates"
          description="Alert when new architecture practitioners follow your profile node."
          checked={notifs.followers}
          onChange={(v) => setNotifs({ ...notifs, followers: v })}
        />
        <ToggleSwitch
          label="Instant Platform Messages"
          description="Direct notifications for inbound inquiries, project queries, or talent search contacts."
          checked={notifs.messages}
          onChange={(v) => setNotifs({ ...notifs, messages: v })}
        />
        <ToggleSwitch
          label="Weekly Portfolio Digests"
          description="Subdued trend aggregation logs summarizing system traffic patterns."
          checked={notifs.newsletter}
          onChange={(v) => setNotifs({ ...notifs, newsletter: v })}
        />
        <ToggleSwitch
          label="Competition and RFP Updates"
          description="Receive prompt notifications about live architectural design briefs and RFP releases."
          checked={notifs.competitions}
          onChange={(v) => setNotifs({ ...notifs, competitions: v })}
        />
      </div>
    </SettingSection>
  );
}
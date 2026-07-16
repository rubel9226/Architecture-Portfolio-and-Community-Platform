// components/settings/PortfolioSettings.tsx
'use client';
import { useState } from 'react';
import SettingSection from './SettingSection';
import ToggleSwitch from './ToggleSwitch';

export default function PortfolioSettings() {
  const [states, setStates] = useState({
    showEmail: true,
    showPhone: false,
    sharing: true,
    cvDownload: true,
    stats: true,
  });

  return (
    <SettingSection title="Portfolio View Configuration" description="Customize information architecture permissions across public instances.">
      <div className="space-y-2 divide-y divide-zinc-100 dark:divide-zinc-800">
        <ToggleSwitch
          label="Display Public Email Contact Address"
          description="Expose account email interface for talent scouts and inbound business requests."
          checked={states.showEmail}
          onChange={(v) => setStates({ ...states, showEmail: v })}
        />
        <ToggleSwitch
          label="Display Phone Number"
          description="Make your validated mobile number public to checked enterprise entities."
          checked={states.showPhone}
          onChange={(v) => setStates({ ...states, showPhone: v })}
        />
        <ToggleSwitch
          label="Allow External Portfolio Sharing"
          description="Permit platform index tools and community aggregators to distribute your presentation decks."
          checked={states.sharing}
          onChange={(v) => setStates({ ...states, sharing: v })}
        />
        <ToggleSwitch
          label="Enable Direct CV/Resume Download"
          description="Embed document acquisition handles inside your front-end presentation viewboards."
          checked={states.cvDownload}
          onChange={(v) => setStates({ ...states, cvDownload: v })}
        />
        <ToggleSwitch
          label="Display Project Analytics and Statistics"
          description="Broadcast transparent counts for project entry view counts, interactions, and milestones."
          checked={states.stats}
          onChange={(v) => setStates({ ...states, stats: v })}
        />
      </div>
    </SettingSection>
  );
}
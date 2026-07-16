// components/settings/PersonalInformation.tsx
import SettingSection from './SettingSection';

export default function PersonalInformation() {
  const elements = [
    { label: 'First Name', val: 'Elena' },
    { label: 'Last Name', val: 'Rostova' },
    { label: 'Email Address', val: 'e.rostova@archifolio.com' },
    { label: 'Phone Number', val: '+44 20 7911 5000' },
    { label: 'Country / Territory', val: 'United Kingdom' },
    { label: 'City', val: 'London' }
  ];

  return (
    <SettingSection title="Personal Information" description="Private contact matrices used solely for verification and system handshakes.">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {elements.map((item, index) => (
          <div key={index}>
            <label className="block text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-1.5">{item.label}</label>
            <input type="text" className="w-full text-sm bg-transparent border border-zinc-200 dark:border-zinc-800 rounded-xl px-3.5 py-2 text-zinc-800 dark:text-zinc-200 focus:outline-hidden focus:border-zinc-900 dark:focus:border-zinc-100 transition-colors" defaultValue={item.val} />
          </div>
        ))}
      </div>
    </SettingSection>
  );
}
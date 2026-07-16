// components/settings/SocialLinks.tsx
import SettingSection from './SettingSection';

export default function SocialLinks() {
  const platforms = ['Behance', 'Dribbble', 'LinkedIn', 'GitHub', 'Instagram', 'Pinterest'];

  return (
    <SettingSection title="Social Integration" description="Link external creative handles directly onto your primary presentation canvas.">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {platforms.map((p) => (
          <div key={p}>
            <label className="block text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-1.5">{p}</label>
            <div className="relative flex items-center">
              <span className="absolute left-3.5 text-xs font-light text-zinc-400 select-none">https://</span>
              <input
                type="text"
                className="w-full text-sm bg-transparent border border-zinc-200 dark:border-zinc-800 rounded-xl pl-[62px] pr-3.5 py-2 text-zinc-800 dark:text-zinc-200 focus:outline-hidden focus:border-zinc-900 dark:focus:border-zinc-100 transition-colors"
                placeholder={`${p.toLowerCase()}.com/username`}
              />
            </div>
          </div>
        ))}
      </div>
    </SettingSection>
  );
}
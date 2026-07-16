// components/settings/SettingsSkeleton.tsx
export default function SettingsSkeleton() {
  return (
    <div className="w-full space-y-6 animate-pulse">
      <div className="h-44 bg-zinc-200 dark:bg-zinc-800 rounded-2xl w-full" />
      <div className="space-y-3">
        <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded-md w-1/4" />
        <div className="h-10 bg-zinc-200 dark:bg-zinc-800 rounded-xl w-full" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="h-10 bg-zinc-200 dark:bg-zinc-800 rounded-xl" />
        <div className="h-10 bg-zinc-200 dark:bg-zinc-800 rounded-xl" />
      </div>
    </div>
  );
}
// components/settings/SecuritySettings.tsx
import { Smartphone, Laptop, LogOut } from 'lucide-react';
import { SessionDevice } from '@/types/setting';
import SettingSection from './SettingSection';

export default function SecuritySettings() {
  const logs: SessionDevice[] = [
    { id: '1', device: 'Apple MacBook Pro M3 Max', location: 'London, UK', ip: '185.151.22.4', current: true, lastActive: 'Active Now' },
    { id: '2', device: 'iPhone 15 Pro Max Safari', location: 'London, UK', ip: '2a02:c7c:5024::1', current: false, lastActive: '14 hours ago' }
  ];

  return (
    <SettingSection title="Session Audit & Hardware Keys" description="Review active platform sessions accessing your architectural configuration framework.">
      <div className="space-y-4">
        <div className="flex justify-between items-center pb-2 border-b border-zinc-100 dark:border-zinc-800">
          <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Active Workspace Sessions</span>
          <button type="button" className="inline-flex items-center gap-1 text-[11px] font-medium text-red-500 hover:underline"><LogOut size={12}/> Sign out all other sessions</button>
        </div>
        
        <div className="space-y-3">
          {logs.map((session) => (
            <div key={session.id} className="flex items-start justify-between p-3.5 border border-zinc-150 dark:border-zinc-800 rounded-xl bg-zinc-50/30 dark:bg-zinc-900/30">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-500 rounded-lg mt-0.5">
                  {session.device.includes('MacBook') ? <Laptop size={16} /> : <Smartphone size={16} />}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <p className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">{session.device}</p>
                    {session.current && <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-md bg-blue-50 text-blue-600 border border-blue-100 dark:bg-blue-950/40 dark:border-blue-900/60 uppercase tracking-wider">Current</span>}
                  </div>
                  <p className="text-[11px] text-zinc-400 font-light mt-0.5">{session.location} • IP: {session.ip} • Last seen {session.lastActive}</p>
                </div>
              </div>
              {!session.current && <button type="button" className="text-[11px] font-medium text-zinc-400 hover:text-red-500 transition-colors">Revoke</button>}
            </div>
          ))}
        </div>
      </div>
    </SettingSection>
  );
}
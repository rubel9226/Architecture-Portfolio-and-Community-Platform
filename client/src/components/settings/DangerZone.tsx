// components/settings/DangerZone.tsx
'use client';
import { useState } from 'react';
import { AlertTriangle, Trash2 } from 'lucide-react';

export default function DangerZone() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="border border-red-200 dark:border-red-900/60 rounded-2xl bg-red-50/20 dark:bg-red-950/10 overflow-hidden">
      <div className="px-6 py-5 border-b border-red-100 dark:border-red-950/40 flex items-center gap-2 text-red-600 dark:text-red-400">
        <AlertTriangle size={18} />
        <h3 className="text-base font-semibold tracking-tight">System Irreversible Configurations</h3>
      </div>
      <div className="p-6 space-y-4">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 py-2">
          <div>
            <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">Deactivate Platform Presence</p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 font-light mt-0.5">Temporarily pull down your portfolios from active discoverable nodes. Re-login resets state.</p>
          </div>
          <button type="button" className="px-3.5 py-2 border border-red-200 hover:bg-red-50 text-red-600 rounded-xl text-xs font-semibold transition-colors shrink-0">Deactivate</button>
        </div>
        
        <div className="border-t border-red-100 dark:border-red-950/40 pt-4 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
          <div>
            <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">Purge Complete Account Ledger</p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 font-light mt-0.5">Permanently scrub design items, source metadata bundles, and files from all global mirrors.</p>
          </div>
          <button onClick={() => setModalOpen(true)} type="button" className="px-3.5 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-semibold transition-colors shrink-0 flex items-center gap-1.5 shadow-xs"><Trash2 size={14}/> Delete Account</button>
        </div>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-zinc-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 max-w-sm w-full p-6 rounded-2xl shadow-xl space-y-4">
            <h4 className="text-base font-bold text-zinc-900 dark:text-zinc-50">Confirm Ledger Purge</h4>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed font-light">This structural step completely wipes all architecture metrics, credentials, and image blocks. This path cannot be reverted.</p>
            <div className="flex gap-2 justify-end pt-2">
              <button onClick={() => setModalOpen(false)} className="px-3 py-1.5 border border-zinc-200 dark:border-zinc-800 rounded-lg text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50">Cancel</button>
              <button className="px-3 py-1.5 bg-red-600 text-white text-xs font-medium rounded-lg hover:bg-red-700 shadow-sm">Confirm Permanent Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
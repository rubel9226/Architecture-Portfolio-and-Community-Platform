import { Copy } from 'lucide-react';
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin, FaTwitter } from 'react-icons/fa6';

export function ShareSection() {
  const channels = [
    { icon: Copy, label: 'Link' },
    { icon: FaLinkedin, label: 'LinkedIn' },
    { icon: FaTwitter, label: 'Twitter' },
    { icon: FaFacebook, label: 'Facebook' },
  ];

  return (
    <div className="space-y-3">
      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Broadcast Project</h4>
      <div className="grid grid-cols-4 gap-2">
        {channels.map((ch, idx) => (
          <button key={idx} className="flex flex-col items-center justify-center gap-1.5 py-3 border border-slate-100 hover:border-slate-300 bg-white rounded-xl text-slate-600 transition-all active:scale-95">
            <ch.icon size={16} />
            <span className="text-[10px] font-medium">{ch.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
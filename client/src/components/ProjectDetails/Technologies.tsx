import { Technology } from '@/types/project';
import { DynamicIcon } from './DynamicIcon';

export default function Technologies({ techs }: { techs: Technology[] }) {
  return (
    <div className="space-y-4">
      <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">Ecosystem & Engine Suite</h3>
      <div className="flex flex-wrap gap-2">
        {techs.map((tech, i) => (
          <div key={i} className="inline-flex items-center gap-2 bg-white px-3.5 py-2 border border-slate-200 rounded-xl shadow-3xs transition-all hover:border-slate-300">
            <DynamicIcon name={tech.iconName} className="text-slate-600 w-4 h-4" />
            <span className="text-xs font-semibold text-slate-700">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
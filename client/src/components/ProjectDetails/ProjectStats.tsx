import { Statistic } from '@/types/project';
import { DynamicIcon } from './DynamicIcon'; 

export default function ProjectStats({ stats }: { stats: Statistic[] }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, i) => (
        <div key={i} className="p-5 bg-linear-to-b from-white to-slate-50 border border-slate-100 rounded-2xl shadow-3xs flex items-center gap-4">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
            <DynamicIcon name={stat.iconName} className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-2xl font-black text-slate-900 tracking-tight">{stat.value}</h4>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
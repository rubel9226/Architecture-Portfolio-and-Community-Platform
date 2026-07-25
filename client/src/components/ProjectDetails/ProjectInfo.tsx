import { Project } from '@/types';
import { ProjectData } from '@/types/project';
import { MapPin, Calendar, Building2, Hammer, Layers, Eye } from 'lucide-react';

export default function ProjectInfo({ data }: { data: Project }) {
  const infoItems = [
    { label: 'Location', value: data.location, icon: MapPin },
    { label: 'Structural Type', value: data.projectType, icon: Building2 },
    { label: 'Built Footprint', value: data.location, icon: Layers },
    { label: 'Completion Year', value: data.year, icon: Calendar },
    { label: 'Access Level', value: data.visibility, icon: Eye },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {infoItems.map((item, index) => {
        const Icon = item.icon;
        return (
          <div key={index} className="p-4 bg-white border border-slate-100 shadow-2xs rounded-2xl flex flex-col gap-2">
            <div className="p-2 bg-slate-50 border border-slate-100 rounded-xl w-fit">
              <Icon size={18} className="text-slate-500" />
            </div>
            <div>
              <p className="text-[11px] font-medium uppercase tracking-wider text-slate-400">{item.label}</p>
              <p className="text-sm font-semibold text-slate-800 tracking-tight">{item.value}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
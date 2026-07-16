import DesignerCard from './DesignerCard';
import ProjectInfo from './ProjectInfo';
import { ShareSection } from './ProjectActions';
import { Download, Bookmark } from 'lucide-react';
import { ProjectData, Designer } from '@/types/project';

export default function StickySidebar({ data, author }: { data: ProjectData; author: Designer }) {
  return (
    <aside className="sticky top-24 space-y-6 hidden lg:block">
      <DesignerCard designer={author} />
      
      <div className="p-5 bg-white border border-slate-200/80 shadow-xs rounded-2xl space-y-4">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Quick Operations</h4>
        <div className="flex flex-col gap-2">
          <button className="w-full flex items-center justify-center gap-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 font-semibold py-2.5 px-4 rounded-xl text-xs transition-colors">
            <Download size={15} /> Download Portfolio Brief PDF
          </button>
          <button className="w-full flex items-center justify-center gap-2 border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold py-2.5 px-4 rounded-xl text-xs transition-colors">
            <Bookmark size={15} /> Bookmark to Architectural Stack
          </button>
        </div>
      </div>

      <ShareSection />
    </aside>
  );
}
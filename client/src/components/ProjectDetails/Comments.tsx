import Image from 'next/image';
import { CommentItem } from '@/types/project';

export default function Comments({ list }: { list: CommentItem[] }) {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold tracking-tight text-slate-900">Platform Discussion ({list.length})</h3>
      <div className="space-y-4">
        {list.map((comment) => (
          <div key={comment.id} className="p-4 bg-slate-50 border border-slate-100 rounded-2xl flex gap-4">
            <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
              <Image src={comment.avatar} alt={comment.author} fill className="object-cover" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-900">{comment.author}</span>
                <span className="text-[10px] text-slate-400 font-medium">{comment.date}</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-light">{comment.content}</p>
              <button className="text-[11px] font-bold text-blue-600 hover:underline pt-1 block">Reply</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
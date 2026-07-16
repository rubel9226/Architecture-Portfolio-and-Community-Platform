import { Heart, Bookmark } from 'lucide-react';
import Image from 'next/image';

interface MasonryCardProps {
  image: string;
  category: string;
  author: string;
  location: string;
}

export default function MasonryCard({ image, category, author, location }: MasonryCardProps) {
  return (
    <div className="group relative rounded-2xl overflow-hidden aspect-square border border-slate-100 shadow-sm">
      <Image width={500} height={500} src={image} alt={author} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-slate-950/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end text-white">
        <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider">{category}</span>
        <h4 className="text-sm font-bold mt-0.5">{author}</h4>
        <p className="text-[11px] text-slate-300">{location}</p>
        <div className="flex gap-2 mt-3 pt-2.5 border-t border-white/10">
          <button className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors" aria-label="Like"><Heart className="h-3.5 w-3.5" /></button>
          <button className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors" aria-label="Bookmark"><Bookmark className="h-3.5 w-3.5" /></button>
      
        </div>
      </div>
    </div>
  );
}
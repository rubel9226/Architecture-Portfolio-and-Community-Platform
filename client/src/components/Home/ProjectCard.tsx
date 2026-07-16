import Image from "next/image";
import { motion } from 'framer-motion';
import { ArrowUpRight, Eye, Heart } from 'lucide-react';


interface ProjectCardProps {
  image: string;
  category: string;
  title: string;
  author: string;
  university: string;
  likes: string;
  views: string;
}

// --- Framer Motion Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

export default function ProjectCard({ image, category, title, author, university, likes, views }: ProjectCardProps) {
    return (
        <motion.div 
            variants={fadeInUp}
            whileHover={{ y: -6 }}
            className="group bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
        >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <Image
                width={500}
                height={500}
                src={image} 
                alt={title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-slate-900 px-2.5 py-1 rounded-lg text-[11px] font-bold shadow-sm uppercase tracking-wider">
                {category}
                </span>
            </div>
            
            <div className="p-5 flex flex-col flex-1 justify-between space-y-4">
                <div>
                <h3 className="font-bold text-base text-slate-900 tracking-tight line-clamp-1 group-hover:text-blue-600 transition-colors">
                    {title}
                </h3>
                <p className="text-xs text-slate-500 mt-1">{author} • <span className="font-medium">{university}</span></p>
                </div>
                
                <div className="flex items-center justify-between pt-3 border-t border-slate-50 text-[11px] font-semibold text-slate-400">
                <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 hover:text-red-500 transition-colors cursor-pointer"><Heart className="h-3.5 w-3.5" /> {likes}</span>
                    <span className="flex items-center gap-1"><Eye className="h-3.5 w-3.5" /> {views}</span>
                </div>
                <button className="inline-flex items-center gap-1 text-blue-600 hover:underline font-bold">
                    View Layout <ArrowUpRight className="h-3 w-3" />
                </button>
                </div>
            </div>
        </motion.div>
    );
}
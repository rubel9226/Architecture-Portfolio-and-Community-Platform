import { motion } from 'framer-motion'; 

interface ContributorCardProps {
  image: string;
  name: string;
  university: string;
  country: string;
  projects: number;
  followers: string;
}


const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } }
};



export default function ContributorCard({ image, name, university, country, projects, followers }: ContributorCardProps) {
  return (
    <motion.div 
      variants={fadeInUp}
      className="p-5 rounded-2xl bg-slate-800/50 border border-slate-800 hover:border-slate-700 transition-all flex flex-col items-center text-center"
    >
      <img src={image} alt={name} className="w-14 h-14 rounded-full object-cover border-2 border-blue-500" />
      <h3 className="font-bold text-sm mt-3 tracking-tight">{name}</h3>
      <p className="text-[11px] text-slate-400">{university} • {country}</p>
      
      <div className="grid grid-cols-2 gap-4 w-full my-4 p-2.5 rounded-xl bg-slate-900/60 text-center">
        <div>
          <span className="block text-xs font-black text-white">{projects}</span>
          <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">Projects</span>
        </div>
        <div>
          <span className="block text-xs font-black text-white">{followers}</span>
          <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">Followers</span>
        </div>
      </div>
      
      <button className="w-full h-9 rounded-xl border border-slate-700 hover:bg-white hover:text-slate-900 font-medium text-xs transition-colors">
        View Portfolio
      </button>
    </motion.div>
  );
}
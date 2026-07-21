import { motion } from 'framer-motion'; 


interface CategoryCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  count: string;
}


const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } }
};


export default function CategoryCard({ icon: Icon, title, count }: CategoryCardProps) {
  return (
    <motion.div 
      variants={fadeInUp}
      whileHover={{ scale: 1.02, y: -2 }}
      className="p-5 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-md cursor-pointer transition-all flex flex-col items-center text-center space-y-3"
    >
      <div className="p-3 rounded-xl bg-blue-50 text-blue-600">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h4 className="text-sm font-bold text-slate-800">{title}</h4>
        <p className="text-[11px] font-medium text-slate-400 mt-0.5">{count}</p>
      </div>
    </motion.div>
  );
}
import { motion } from 'framer-motion'; 

interface FeatureCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  gradient: string;
}

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } }
};


export default function FeatureCard({ icon: Icon, title, desc, gradient }: FeatureCardProps) {
  return (
    <motion.div 
      variants={fadeInUp}
      whileHover={{ y: -6 }}
      className={`p-6 rounded-2xl border border-slate-100 bg-linear-to-b ${gradient} bg-white hover:shadow-lg transition-all duration-300`}
    >
      <div className="h-10 w-10 rounded-xl bg-slate-900 text-white flex items-center justify-center mb-5">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="font-bold text-base text-slate-900 tracking-tight">{title}</h3>
      <p className="text-xs text-slate-500 mt-2 leading-relaxed">{desc}</p>
    </motion.div>
  );
}
import { motion } from 'framer-motion'; 


const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } }
};

interface StatCardProps {
    number: string;
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    desc: string;
}

export default function StatCard({ number, icon: Icon, title, desc }: StatCardProps) {
    return (
        <motion.div 
            variants={fadeInUp}
            whileHover={{ y: -6 }}
            className="p-6 rounded-2xl border border-slate-100 hover:border-slate-200 bg-slate-50/50 hover:bg-white transition-all duration-300"
        >
            <div className="flex items-center justify-between">
                <span className="text-3xl font-black text-slate-900 tracking-tight">{number}</span>
                <div className="p-2 rounded-xl bg-blue-50 text-blue-600">
                    <Icon className="h-5 w-5" />
                </div>
            </div>
            <h3 className="text-sm font-bold text-slate-800 mt-4">{title}</h3>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">{desc}</p>
        </motion.div>
    );
}
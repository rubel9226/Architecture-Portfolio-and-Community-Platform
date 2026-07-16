import { motion } from 'framer-motion'; 


export default function FloatBadge({ children, className, delay }: { children: React.ReactNode; className: string; delay: number }) {
  return (
    <motion.div 
      className={`absolute z-20 select-none pointer-events-none hidden sm:flex ${className}`}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      {children}
    </motion.div>
  );
}
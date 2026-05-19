import { motion } from 'motion/react';

interface Props {
  title: string;
  subtitle: string;
  center?: boolean;
}

export default function SectionHeading({ title, subtitle, center = false }: Props) {
  return (
    <div className={`mb-16 ${center ? 'text-center max-w-3xl mx-auto' : ''}`}>
      <motion.span 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
        className="inline-block text-brand text-xs font-black tracking-[0.4em] uppercase mb-4"
      >
        {subtitle}
      </motion.span>
      <motion.h2 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-4xl md:text-7xl font-black leading-none tracking-tighter"
      >
        {title}
      </motion.h2>
    </div>
  );
}

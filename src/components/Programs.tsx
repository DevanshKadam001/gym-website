import { motion } from 'motion/react';
import { Target, Zap, Shield, Users } from 'lucide-react';
import SectionHeading from './SectionHeading';

export default function Programs() {
  const programs = [
    {
      title: 'Power Lifting',
      desc: 'Build massive strength with our elite powerlifting academy.',
      icon: Zap,
      color: 'bg-orange-500',
    },
    {
      title: 'Combat Sports',
      desc: 'Master the art of defense with pro MMA and boxing coaches.',
      icon: Shield,
      color: 'bg-red-500',
    },
    {
      title: 'HIIT Training',
      desc: 'Burn calories and boost metabolism with intensive intervals.',
      icon: Target,
      color: 'bg-blue-500',
    },
    {
      title: 'CrossFit Elite',
      desc: 'High-intensity functional movements for all-around fitness.',
      icon: Users,
      color: 'bg-green-500',
    },
  ];

  return (
    <section id="programs" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          subtitle="Our Expertise" 
          title="Elite Workout Programs" 
          center 
        />
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {programs.map((prog) => (
            <motion.div
              key={prog.title}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
              }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="glass-card p-8 group cursor-pointer hover:border-brand/50 transition-all duration-300"
            >
              <div className={`w-14 h-14 ${prog.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-black/20`}>
                <prog.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-black mb-3">{prog.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                {prog.desc}
              </p>
              <button className="text-brand text-xs font-black uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <span>→</span>
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

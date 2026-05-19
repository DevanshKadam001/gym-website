import { motion } from 'motion/react';
import { Play, ArrowRight } from 'lucide-react';

export default function Hero() {
  const stats = [
    { label: 'Members', value: '10K+' },
    { label: 'Trainers', value: '50+' },
    { label: 'Programs', value: '25+' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with cinematic overlay */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="/src/assets/images/titan_hero_1779214640622.png" 
          alt="Titan Fitness Hero"
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-transparent to-transparent" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="inline-block px-4 py-1.5 rounded-full bg-brand/20 border border-brand/30 text-brand text-xs font-bold tracking-[0.2em] mb-6 uppercase w-fit"
          >
            Evolution starts here
          </motion.span>
          
          <div className="overflow-hidden mb-6">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl lg:text-8xl font-black leading-[0.95] tracking-tighter"
            >
              UNLEASH <br />
              <span className="text-brand text-glow italic">THE TITAN</span> <br />
              WITHIN
            </motion.h1>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg text-white/60 mb-10 max-w-lg leading-relaxed font-medium"
          >
            Join the elite circle of high-performers. Experience world-class training, cutting-edge equipment, and a community built for greatness.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <button className="btn-primary group flex items-center gap-2">
              Start Transformation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-outline flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                <Play className="w-3 h-3 fill-white" />
              </span>
              Watch Film
            </button>
          </motion.div>

          <div className="mt-16 flex gap-12 border-t border-white/10 pt-10">
            {stats.map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + i * 0.1 }}
                className="flex flex-col"
              >
                <div className="text-3xl font-black font-display text-white">{stat.value}</div>
                <div className="text-xs uppercase tracking-widest text-white/40 font-bold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute top-1/2 -right-64 w-[600px] h-[600px] bg-brand/20 blur-[120px] rounded-full z-0 opacity-50" />
    </section>
  );
}

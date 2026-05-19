import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import SectionHeading from './SectionHeading';

export default function Testimonials() {
  const reviews = [
    {
      name: 'James Rodriguez',
      role: 'Pro Boxer',
      text: 'Titan Fitness changed my perspective on training. The environment is pure energy and the coaching is world-class.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    },
    {
      name: 'Michael Chen',
      role: 'CEO at VentureX',
      text: 'The Pro membership is worth every penny. The Pro recovery suite is exactly what I need after a high-intensity session.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
    },
    {
      name: 'Diana Prince',
      role: 'Fitness Enthusiast',
      text: 'I\'ve never felt more empowered. The community at Titan is supportive and the equipment is always cutting-edge.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200',
    },
  ];

  return (
    <section className="py-24 bg-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          subtitle="Success Stories" 
          title="From our Titans" 
          center 
        />

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <motion.div
              key={rev.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-10 relative group"
            >
              <Quote className="absolute top-8 right-8 text-brand/20 w-12 h-12 rotate-180 group-hover:text-brand/40 transition-colors" />
              
              <div className="flex items-center gap-4 mb-8">
                <img 
                  src={rev.image} 
                  alt={rev.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-brand/50"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-white">{rev.name}</h4>
                  <p className="text-brand text-[10px] font-black uppercase tracking-widest">{rev.role}</p>
                </div>
              </div>

              <p className="text-white/60 text-sm leading-relaxed italic">
                "{rev.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { Instagram, Twitter, Linkedin } from 'lucide-react';
import SectionHeading from './SectionHeading';

export default function Trainers() {
  const trainers = [
    {
      name: 'Marcus Thorne',
      role: 'Heavyweight Champion',
      image: '/src/assets/images/trainer_1_1779214657299.png',
    },
    {
      name: 'Elena Vance',
      role: 'Fitness Model & Pro',
      image: '/src/assets/images/trainer_2_1779214672775.png',
    },
    {
      name: 'Jaxson Reed',
      role: 'Strength Specialist',
      image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fe?auto=format&fit=crop&q=80&w=800',
    },
    {
      name: 'Sarah Drago',
      role: 'Nutrition Expert',
      image: 'https://images.unsplash.com/photo-1548690312-e3b507d17a47?auto=format&fit=crop&q=80&w=800',
    },
  ];

  return (
    <section id="trainers" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          subtitle="Meet the Elite" 
          title="Masters of Transformation" 
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
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {trainers.map((trainer) => (
            <motion.div
              key={trainer.name}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="group relative overflow-hidden rounded-3xl aspect-[4/5]"
            >
              <img 
                src={trainer.image} 
                alt={trainer.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="mb-4">
                  <h3 className="text-2xl font-black">{trainer.name}</h3>
                  <p className="text-brand text-xs font-black uppercase tracking-widest">{trainer.role}</p>
                </div>
                
                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <Instagram className="w-5 h-5 cursor-pointer hover:text-brand transition-colors" />
                  <Twitter className="w-5 h-5 cursor-pointer hover:text-brand transition-colors" />
                  <Linkedin className="w-5 h-5 cursor-pointer hover:text-brand transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

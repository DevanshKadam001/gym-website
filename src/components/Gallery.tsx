import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';

export default function Gallery() {
  const images = [
    { url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80', size: 'col-span-2 row-span-2' },
    { url: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80', size: 'col-span-1 row-span-1' },
    { url: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&q=80', size: 'col-span-1 row-span-2' },
    { url: 'https://images.unsplash.com/photo-1581009146145-b5ef03a7403f?auto=format&fit=crop&q=80', size: 'col-span-1 row-span-1' },
    { url: 'https://images.unsplash.com/photo-1583454110551-21f2fa2ec617?auto=format&fit=crop&q=80', size: 'col-span-2 row-span-1' },
  ];

  return (
    <section id="gallery" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          subtitle="Visualize Results" 
          title="Titan Arena" 
          center 
        />
        
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-3 gap-4 h-[800px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`${img.size} group relative overflow-hidden rounded-3xl`}
            >
              <img 
                src={img.url} 
                alt="Gym Gallery"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand/20 opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

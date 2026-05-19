import { motion } from 'motion/react';
import { Mail, Phone, MapPin, MessageSquare, Clock } from 'lucide-react';
import SectionHeading from './SectionHeading';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          subtitle="Get in Touch" 
          title="Start Your Journey" 
        />

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-white/40 mb-2">FullName</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-brand focus:bg-white/10 focus:ring-4 focus:ring-brand/10 outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-white/40 mb-2">Email Address</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-brand focus:bg-white/10 focus:ring-4 focus:ring-brand/10 outline-none transition-all" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-white/40 mb-2">Subject</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-brand focus:bg-white/10 focus:ring-4 focus:ring-brand/10 outline-none transition-all appearance-none text-white/60">
                  <option>Membership Inquiry</option>
                  <option>Personal Training</option>
                  <option>Group Classes</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-white/40 mb-2">Message</label>
                <textarea rows={5} className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-brand focus:bg-white/10 focus:ring-4 focus:ring-brand/10 outline-none transition-all" placeholder="Tell us about your goals..."></textarea>
              </div>
              <button className="btn-primary w-full py-5 text-lg">Send Message</button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass-card p-8">
                <MapPin className="text-brand w-8 h-8 mb-4" />
                <h4 className="text-xl font-bold mb-2">Visit Arena</h4>
                <p className="text-white/50 text-sm leading-relaxed">
                  Titan Fitness HQ, <br />
                  Level 5, Palladium Mall, Lower Parel, Mumbai, MH 400013
                </p>
              </div>
              <div className="glass-card p-8">
                <Clock className="text-brand w-8 h-8 mb-4" />
                <h4 className="text-xl font-bold mb-2">Opening Hours</h4>
                <p className="text-white/50 text-sm leading-relaxed">
                  Mon - Sat: 24 Hours <br />
                  Sun: 06:00 AM - 10:00 PM
                </p>
              </div>
            </div>

            <div className="glass-card p-8 space-y-4">
              <div className="flex items-center gap-4 text-white/70 hover:text-brand cursor-pointer transition-colors">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="font-bold">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-4 text-white/70 hover:text-brand cursor-pointer transition-colors">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-bold">hello@titanfitness.in</span>
              </div>
              <div className="flex items-center gap-4 text-white/70 hover:text-green-500 cursor-pointer transition-colors">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <span className="font-bold">WhatsApp (+91 98765 43210)</span>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="rounded-3xl h-[250px] bg-white/5 border border-white/10 overflow-hidden relative">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.6253457193!2d72.823485375549!3d18.992110654763264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce868e8e690f%3A0x6a0c00000000000!2sPalladium%20Mall!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }} 
                allowFullScreen={true} 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

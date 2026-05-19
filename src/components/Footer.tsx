import { motion } from 'motion/react';
import { Dumbbell, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer bg-black py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-brand p-2 rounded-lg">
                <Dumbbell className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-display font-black tracking-tighter text-white">
                TITAN<span className="text-brand">FITNESS</span>
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              We provide the tools, the community, and the expert guidance to help you reach the pinnacle of your physical potential. Become a Titan today.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand transition-colors duration-300"
                >
                  <Icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-black mb-8 uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Programs', 'Membership', 'Our Trainers', 'Career'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/40 text-sm hover:text-brand transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-black mb-8 uppercase tracking-widest">Support</h4>
            <ul className="space-y-4">
              {['Help Center', 'Safety Rules', 'Privacy Policy', 'Terms of Service', 'Member Portal'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/40 text-sm hover:text-brand transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-black mb-8 uppercase tracking-widest">Newsletter</h4>
            <p className="text-white/40 text-sm mb-6">Get weekly fitness tips and exclusive event invites.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Your Email" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-brand outline-none flex-grow" />
              <button className="bg-brand text-white px-4 rounded-xl font-bold">Join</button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-xs tracking-widest">
            © {currentYear} TITAN FITNESS ARENA. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-white/20 text-[10px] font-black uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

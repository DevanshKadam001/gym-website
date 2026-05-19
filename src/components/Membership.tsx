import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import SectionHeading from './SectionHeading';

export default function Membership() {
  const plans = [
    {
      name: 'Basic',
      price: '2,499',
      features: ['Access to Gym', 'Standard Equipment', 'Locker Room', '1 Gym T-Shirt'],
      popular: false,
    },
    {
      name: 'Pro',
      price: '4,999',
      features: ['24/7 Access', 'All Classes', 'Personalized Diet', 'Personal Trainer (2 sessions)', 'Spa & Sauna'],
      popular: true,
    },
    {
      name: 'Elite',
      price: '9,999',
      features: ['VIP Lounge', 'Private Trainer', 'Cryotherapy', 'Medical Checkup', 'Free Supplements'],
      popular: false,
    },
  ];

  return (
    <section id="membership" className="py-24 bg-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          subtitle="Pricing" 
          title="Choose Your Power" 
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
                staggerChildren: 0.15
              }
            }
          }}
          className="grid md:grid-cols-3 gap-8"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={{
                hidden: { opacity: 0, scale: 0.95, y: 30 },
                visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6 } }
              }}
              className={`relative glass-card p-10 flex flex-col ${plan.popular ? 'border-brand/50 md:scale-105 z-10 shadow-2xl shadow-brand/10' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-lg">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2 text-white/70">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-brand">₹</span>
                  <span className="text-6xl font-black">{plan.price}</span>
                  <span className="text-white/40 font-bold">/MO</span>
                </div>
              </div>

              <div className="flex-grow space-y-4 mb-10">
                {plan.features.map((feat) => (
                  <div key={feat} className="flex items-center gap-3 text-sm text-white/70">
                    <div className="w-5 h-5 rounded-full bg-brand/20 flex items-center justify-center text-brand">
                      <Check className="w-3 h-3" />
                    </div>
                    {feat}
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-xl font-black uppercase tracking-widest transition-all ${
                plan.popular ? 'bg-brand text-white shadow-xl shadow-brand/20 hover:scale-[1.02]' : 'bg-white/10 text-white hover:bg-white/20'
              }`}>
                Join {plan.name}
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-brand/10 blur-[100px] rounded-full" />
    </section>
  );
}

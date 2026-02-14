import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PartyPopper, Building2, Users, Sparkles } from "lucide-react";
import celebrationImage from "@/assets/celebration-hall.jpg";

const services = [
  { icon: PartyPopper, label: "Birthday Parties" },
  { icon: Building2, label: "Corporate Dinners" },
  { icon: Users, label: "Family Get-togethers" },
  { icon: Sparkles, label: "Festival Celebrations" },
];

const EventsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="events" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={celebrationImage} alt="Royal celebration hall" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
      </div>

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1 }}
          className="w-32 h-[2px] gradient-gold mx-auto mb-8"
        />

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary tracking-[0.15em] text-glow-sm"
        >
          Celebrate Like Royalty
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-lg sm:text-xl text-foreground/80 mt-6 max-w-2xl mx-auto leading-relaxed"
        >
          CHHAVA is the perfect destination for birthdays, family gatherings, corporate dinners, and royal celebrations.
          Enjoy your special moments in a fort-themed royal dining hall.
        </motion.p>

        {/* Service cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {services.map((service, i) => (
            <motion.div
              key={service.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="bg-card/60 backdrop-blur-sm border border-border p-6 group hover:border-primary/40 transition-all duration-500"
            >
              <service.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <p className="font-display text-xs tracking-[0.1em] uppercase text-foreground/90">
                {service.label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10"
        >
          <a
            href="#reservation"
            className="inline-block px-8 py-3 gradient-gold text-primary-foreground font-display text-sm tracking-[0.15em] uppercase shadow-gold hover:scale-105 transition-transform duration-300"
          >
            Book a Royal Event
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;

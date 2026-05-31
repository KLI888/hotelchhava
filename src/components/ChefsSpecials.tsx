import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Crown } from "lucide-react";
import thaliImage from "@/assets/royal-thali.jpg";

const specials = [
  "Chhava Special Mutton Thali",
  "Royal Chicken Kolhapuri",
  "Fort-Style Veg Thali",
  "Tandoori Prawns",
  "Bhakri & Pitla Royal Combo",
];

const ChefsSpecials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="specials" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-background" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
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
          className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary text-center tracking-[0.15em] text-glow-sm"
        >
          Warrior's Choice
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-14 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="overflow-hidden border border-border">
              <img
                src={thaliImage}
                alt="Royal Maratha thali"
                className="w-full h-80 sm:h-96 object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 w-full h-full border border-primary/20 -z-10" />
          </motion.div>

          {/* Specials list */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="space-y-5">
              {specials.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <Crown className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="font-body text-lg sm:text-xl text-foreground group-hover:text-primary transition-colors">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            <p className="font-body text-base text-muted-foreground mt-8 italic leading-relaxed">
              "Handpicked dishes inspired by the royal kitchens of the Maratha empire."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChefsSpecials;

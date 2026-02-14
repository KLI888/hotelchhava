import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Utensils, Castle, Leaf } from "lucide-react";
import courtyardImage from "@/assets/courtyard.jpg";

const features = [
  {
    icon: Utensils,
    title: "Authentic Maratha Recipes",
    desc: "Heritage recipes passed down through generations of royal kitchens.",
  },
  {
    icon: Castle,
    title: "Royal Fort Ambience",
    desc: "Dine in a setting inspired by the grandeur of Maratha forts.",
  },
  {
    icon: Leaf,
    title: "Veg & Non-Veg Specialities",
    desc: "A curated selection of both vegetarian and non-vegetarian delicacies.",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={courtyardImage} alt="Fort courtyard" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-background/90" />
      </div>

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section divider */}
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
          Welcome to CHHAVA
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 max-w-3xl mx-auto text-center"
        >
          <p className="font-body text-lg sm:text-xl text-foreground/80 leading-relaxed">
            CHHAVA is a tribute to the brave warriors of the Maratha empire.
            Inspired by the legacy of Chhatrapati Shivaji Maharaj, our restaurant brings you the authentic taste of Maharashtra in a royal fort-style dining experience.
          </p>
          <p className="font-body text-lg sm:text-xl text-foreground/80 leading-relaxed mt-4">
            From traditional veg delicacies to bold non-veg Maratha flavours, every dish at CHHAVA is prepared with heritage recipes, fresh ingredients, and royal hospitality.
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
              className="bg-card/80 backdrop-blur-sm border border-border p-8 text-center group hover:border-primary/40 transition-all duration-500"
            >
              <div className="w-14 h-14 mx-auto flex items-center justify-center gradient-maroon rounded-sm mb-5">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-primary tracking-wider">
                {feature.title}
              </h3>
              <p className="font-body text-base text-muted-foreground mt-3">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

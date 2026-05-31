import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const menuData = {
  "Veg Starters": [
    { name: "Kothimbir Vadi", price: "₹180" },
    { name: "Sabudana Wada", price: "₹160" },
    { name: "Batata Bhaji Pakoda", price: "₹150" },
    { name: "Paneer Kolhapuri Tikka", price: "₹240" },
  ],
  "Non-Veg Starters": [
    { name: "Maratha Chicken Fry", price: "₹280" },
    { name: "Mutton Sukka", price: "₹380" },
    { name: "Chicken Kolhapuri Tikka", price: "₹320" },
    { name: "Prawns Rava Fry", price: "₹360" },
  ],
  "Veg Main Course": [
    { name: "Pithla Bhakri", price: "₹220" },
    { name: "Bharli Vangi", price: "₹240" },
    { name: "Paneer Kolhapuri", price: "₹280" },
    { name: "Veg Handi", price: "₹260" },
  ],
  "Non-Veg Main Course": [
    { name: "Chicken Thali", price: "₹350" },
    { name: "Mutton Thali", price: "₹480" },
    { name: "Chicken Kolhapuri", price: "₹320" },
    { name: "Mutton Masala", price: "₹420" },
    { name: "Fish Curry", price: "₹360" },
  ],
  "Breads & Rice": [
    { name: "Bhakri", price: "₹40" },
    { name: "Chapati", price: "₹30" },
    { name: "Steamed Rice", price: "₹120" },
    { name: "Jeera Rice", price: "₹150" },
  ],
  "Desserts": [
    { name: "Puran Poli", price: "₹120" },
    { name: "Shrikhand", price: "₹100" },
    { name: "Gulab Jamun", price: "₹90" },
  ],
};

const categories = Object.keys(menuData);

const MenuSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <section id="menu" className="relative py-24 bg-fort-gradient">
      {/* Stone texture overlay */}
      <div className="absolute inset-0 bg-stone-texture opacity-50" />

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
          Royal Bhojanalay
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-lg text-muted-foreground text-center mt-3 italic"
        >
          The Royal Dining Hall
        </motion.p>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mt-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-display text-xs tracking-[0.1em] uppercase px-4 py-2 border transition-all duration-300 ${
                activeCategory === cat
                  ? "gradient-gold text-primary-foreground border-transparent shadow-gold"
                  : "border-border text-muted-foreground hover:border-primary/40 hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Menu items */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-10 max-w-2xl mx-auto"
        >
          <h3 className="font-display text-xl text-primary text-center tracking-wider mb-6">
            {activeCategory}
          </h3>
          <div className="space-y-0">
            {menuData[activeCategory as keyof typeof menuData].map((item, i) => (
              <div
                key={item.name}
                className="flex items-end justify-between py-4 border-b border-border/50 group hover:border-primary/30 transition-colors"
              >
                <span className="font-body text-lg text-foreground group-hover:text-primary transition-colors">
                  {item.name}
                </span>
                <span className="flex-1 mx-4 border-b border-dotted border-muted-foreground/30 mb-1" />
                <span className="font-display text-sm text-primary tracking-wider">
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;

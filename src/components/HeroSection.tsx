import { motion } from "framer-motion";
import heroImage from "@/assets/hero-fort-gate.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background image with slow zoom */}
      <div className="absolute inset-0 animate-slow-zoom">
        <img
          src={heroImage}
          alt="Maratha fort gate entrance with torches"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 overlay-dark" />

      {/* Smoke particles */}
      <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-foreground/5 rounded-full blur-3xl animate-smoke" />
      <div className="absolute bottom-10 right-1/3 w-24 h-24 bg-foreground/5 rounded-full blur-3xl animate-smoke" style={{ animationDelay: "1.5s" }} />
      <div className="absolute bottom-5 left-1/2 w-40 h-40 bg-foreground/5 rounded-full blur-3xl animate-smoke" style={{ animationDelay: "3s" }} />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="animate-gate-reveal"
        >
          {/* Decorative border */}
          <div className="mb-6">
            <div className="w-24 h-[2px] gradient-gold mx-auto mb-2" />
            <div className="w-16 h-[1px] gradient-gold mx-auto" />
          </div>

          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-primary tracking-[0.3em] text-glow">
            CHHAVA
          </h1>

          <p className="font-devanagari text-lg sm:text-xl md:text-2xl text-foreground/90 mt-4 tracking-wide">
            स्वराज्याच्या स्वादाची परंपरा
          </p>

          <p className="font-body text-base sm:text-lg md:text-xl text-foreground/70 mt-4 max-w-xl mx-auto italic">
            Experience the royal flavours of Maratha cuisine in the heart of Pune.
          </p>

          <div className="mt-4">
            <div className="w-16 h-[1px] gradient-gold mx-auto mt-2" />
            <div className="w-24 h-[2px] gradient-gold mx-auto mt-2" />
          </div>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 mt-10"
        >
          <a
            href="#reservation"
            className="px-8 py-3 gradient-gold text-primary-foreground font-display text-sm tracking-[0.15em] uppercase shadow-gold hover:scale-105 transition-transform duration-300 animate-glow-pulse"
          >
            Reserve Your Royal Feast
          </a>
          <a
            href="#menu"
            className="px-8 py-3 border border-primary/50 text-primary font-display text-sm tracking-[0.15em] uppercase hover:bg-primary/10 transition-all duration-300"
          >
            View Our Menu
          </a>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overlay-bottom" />
    </section>
  );
};

export default HeroSection;

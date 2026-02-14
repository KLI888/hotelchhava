import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Clock, Phone } from "lucide-react";

const ReservationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    request: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Your reservation request has been received. We will confirm shortly.");
  };

  return (
    <section id="reservation" className="relative py-24 bg-fort-gradient">
      <div className="absolute inset-0 bg-stone-texture opacity-30" />

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
          Reserve Your Royal Feast
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-14">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-card border border-border font-body text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-card border border-border font-body text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-card border border-border font-body text-foreground focus:border-primary focus:outline-none transition-colors"
              />
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-card border border-border font-body text-foreground focus:border-primary focus:outline-none transition-colors"
              />
              <select
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-card border border-border font-body text-foreground focus:border-primary focus:outline-none transition-colors"
              >
                <option value="">Guests</option>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                  <option key={n} value={n}>{n} {n === 1 ? "Guest" : "Guests"}</option>
                ))}
                <option value="10+">10+ Guests</option>
              </select>
            </div>
            <textarea
              name="request"
              placeholder="Special Request (Optional)"
              value={formData.request}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-3 bg-card border border-border font-body text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors resize-none"
            />
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                className="px-8 py-3 gradient-gold text-primary-foreground font-display text-sm tracking-[0.15em] uppercase shadow-gold hover:scale-105 transition-transform duration-300"
              >
                Book Now
              </button>
              <a
                href="tel:+919999999999"
                className="px-8 py-3 border border-primary/50 text-primary font-display text-sm tracking-[0.15em] uppercase text-center hover:bg-primary/10 transition-all duration-300"
              >
                Call Restaurant
              </a>
            </div>
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-display text-sm tracking-[0.1em] uppercase text-primary">Location</h4>
                <p className="font-body text-lg text-foreground/80 mt-1">Pune, Maharashtra</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-display text-sm tracking-[0.1em] uppercase text-primary">Opening Hours</h4>
                <p className="font-body text-lg text-foreground/80 mt-1">Monday – Sunday</p>
                <p className="font-body text-lg text-foreground/80">12:00 PM – 11:30 PM</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-display text-sm tracking-[0.1em] uppercase text-primary">Contact</h4>
                <p className="font-body text-lg text-foreground/80 mt-1">+91 99999 99999</p>
              </div>
            </div>

            {/* Decorative arch */}
            <div className="mt-8 border border-border/50 p-6 bg-card/40">
              <p className="font-body text-base text-muted-foreground italic text-center leading-relaxed">
                "A meal at CHHAVA is not just dining — it is an experience of Maratha royalty, heritage, and pride."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;

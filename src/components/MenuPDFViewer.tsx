import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { FileText, Eye, Download } from "lucide-react";

const MenuPDFViewer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showPDF, setShowPDF] = useState(false);

  return (
    <section id="menu-pdf" className="relative py-24 bg-gradient-to-b from-background to-fort-gradient">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/50 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
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
          Complete Menu
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-lg text-muted-foreground text-center mt-3 italic max-w-2xl mx-auto"
        >
          Browse our complete restaurant menu with all dishes, specialties, and pricing
        </motion.p>

        {/* Main Content - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          {/* Left side - Info and CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary/10 text-primary">
                    <FileText size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground tracking-wide">
                    Digital Menu Access
                  </h3>
                  <p className="font-body text-muted-foreground mt-2">
                    View our complete menu in high-quality PDF format. Easy to navigate and fully detailed.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary/10 text-primary">
                    <Eye size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground tracking-wide">
                    Browse Online
                  </h3>
                  <p className="font-body text-muted-foreground mt-2">
                    View the menu right here on our website with zoom and navigation controls.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary/10 text-primary">
                    <Download size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground tracking-wide">
                    Download & Share
                  </h3>
                  <p className="font-body text-muted-foreground mt-2">
                    Download the menu to your device or share it with friends and family.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mt-10"
            >
              <Button
                onClick={() => setShowPDF(!showPDF)}
                size="lg"
                className="gradient-gold text-primary-foreground border-0 font-display tracking-wider hover:shadow-gold transition-all"
              >
                {showPDF ? "Hide Menu" : "View Menu"}
              </Button>
              <a
                href="/menu.pdf"
                download
                className="inline-flex items-center justify-center px-8 py-3 rounded-md border-2 border-primary text-primary font-display tracking-wider hover:bg-primary/10 transition-all text-center"
              >
                Download PDF
              </a>
            </motion.div>
          </motion.div>

          {/* Right side - PDF Viewer */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {showPDF ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="rounded-lg overflow-hidden shadow-2xl border-2 border-primary/20"
              >
                <iframe
                  src="/menu.pdf#toolbar=1&navpanes=0&scrollbar=1"
                  className="w-full h-[600px] rounded-lg"
                  title="Restaurant Menu PDF"
                />
                <div className="absolute top-2 right-2 z-10">
                  <button
                    onClick={() => setShowPDF(false)}
                    className="bg-primary/90 hover:bg-primary text-primary-foreground p-2 rounded-full transition-all"
                    title="Close menu viewer"
                  >
                    ✕
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="h-[600px] rounded-lg border-2 border-dashed border-primary/30 flex flex-col items-center justify-center bg-primary/5"
              >
                <div className="text-center">
                  <FileText size={64} className="mx-auto text-primary/40 mb-4" />
                  <p className="font-display text-xl text-muted-foreground tracking-wide">
                    Menu Preview
                  </p>
                  <p className="font-body text-sm text-muted-foreground mt-2">
                    Click "View Menu" to open the PDF viewer
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Full Width PDF Section - Hidden by default */}
        {showPDF && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-20 rounded-lg overflow-hidden shadow-2xl border-2 border-primary/20 lg:hidden"
          >
            <iframe
              src="/menu.pdf#toolbar=1&navpanes=0&scrollbar=1"
              className="w-full h-[600px]"
              title="Restaurant Menu PDF - Full Width"
            />
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default MenuPDFViewer;

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import ChefsSpecials from "@/components/ChefsSpecials";
import EventsSection from "@/components/EventsSection";
import ReservationSection from "@/components/ReservationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <ChefsSpecials />
      <EventsSection />
      <ReservationSection />
      <Footer />
    </div>
  );
};

export default Index;

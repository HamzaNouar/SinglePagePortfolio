import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ReviewsSection from "@/components/ReviewsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";

function App() {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const refs = {
    home: homeRef,
    about: aboutRef,
    services: servicesRef,
    reviews: reviewsRef,
    contact: contactRef,
  };

  // Set the page title
  useEffect(() => {
    document.title = "Auto Spa Detailing | Ceramic Protection | PPF | Premium Wash";
  }, []);

  return (
    <TooltipProvider>
      <div className="font-inter text-gray-800 bg-gray-50">
        <Navbar refs={refs} />
        <div ref={homeRef} id="home">
          <HeroSection />
        </div>
        <div ref={aboutRef} id="about">
          <AboutSection />
        </div>
        <div ref={servicesRef} id="services">
          <ServicesSection />
        </div>
        <div ref={reviewsRef} id="reviews">
          <ReviewsSection />
        </div>
        <div ref={contactRef} id="contact">
          <ContactSection />
        </div>
        <Footer refs={refs} />
        <Toaster />
      </div>
    </TooltipProvider>
  );
}

export default App;

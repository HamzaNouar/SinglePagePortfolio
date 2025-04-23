import { Button } from "@/components/ui/button";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const { scrollToElement } = useSmoothScroll();
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleScrollToServices = () => {
    scrollToElement("services");
  };

  const handleScrollToContact = () => {
    scrollToElement("contact");
  };

  // Make sure video loads and plays properly
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video playback failed:", error);
      });
    }
  }, []);

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="/videos/videoplayback.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 hero-gradient"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 text-white relative">
        <div className="max-w-3xl">
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">
            Premium Auto Detailing &amp; Protection
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Ceramic Protection | Paint Protection Film | Premium Wash Services
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={handleScrollToServices}
              className="bg-accent hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-md transition-colors text-center"
            >
              Our Services
            </Button>
            <Button 
              onClick={handleScrollToContact}
              variant="outline" 
              className="bg-white hover:bg-gray-100 text-primary font-semibold py-3 px-8 rounded-md transition-colors text-center"
            >
              Contact Us
            </Button>
          </div>
          <div className="mt-8 flex items-center">
            <div className="flex text-yellow-400">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <span className="ml-2">4.9 (52 reviews) • Auto Detailing in Tangier</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

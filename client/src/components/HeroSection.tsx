import { Button } from "@/components/ui/button";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import Image2024_12_04 from "@assets/2024-12-04.jpg";
import Image2024_07_08 from "@assets/2024-07-08.jpg";
import Image2025_04_20 from "@assets/2025-04-20.jpg";
import Image2025_04_05 from "@assets/2025-04-05.jpg";

const HeroSection = () => {
  const { scrollToElement } = useSmoothScroll();

  const handleScrollToServices = () => {
    scrollToElement("services");
  };

  const handleScrollToContact = () => {
    scrollToElement("contact");
  };

  return (
    <section 
      className="relative h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `url(${Image2024_12_04})`,
        backgroundPosition: 'center top',
        backgroundSize: 'cover'
      }}
    >
      <div className="absolute inset-0 hero-gradient"></div>
      <div className="container mx-auto px-4 z-10 text-white">
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
            <span className="ml-2">4.9 (38 reviews) • Car wash in Tangier</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

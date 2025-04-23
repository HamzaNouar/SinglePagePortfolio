import { Button } from "@/components/ui/button";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

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
        backgroundImage: `url('https://images.unsplash.com/photo-1610647752706-3bb12232b3c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')`
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

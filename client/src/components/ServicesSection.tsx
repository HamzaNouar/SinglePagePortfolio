import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import Image2024_12_04 from "@assets/2024-12-04.jpg";
import Image2024_07_08 from "@assets/2024-07-08.jpg";
import Image2025_04_20 from "@assets/2025-04-20.jpg";
import Image2025_04_05 from "@assets/2025-04-05.jpg";

interface ServiceProps {
  title: string;
  description: string;
  price: string;
  image: string;
}

const services: ServiceProps[] = [
  {
    title: "Ceramic Coating",
    description: "Professional-grade ceramic protection that shields your vehicle's paint from environmental damage while providing a brilliant, long-lasting shine.",
    price: "Starting at $299",
    image: Image2024_12_04
  },
  {
    title: "Paint Protection Film (PPF)",
    description: "Premium protective film that safeguards your vehicle against rock chips, scratches, and road debris while maintaining the original appearance.",
    price: "Starting at $499",
    image: Image2025_04_20
  },
  {
    title: "Premium Wash",
    description: "A thorough cleaning process that includes hand washing, drying, and finishing touches to restore your vehicle's shine and protect its surfaces.",
    price: "Starting at $59",
    image: Image2024_07_08
  },
  {
    title: "Interior Detailing",
    description: "Comprehensive cleaning and conditioning of all interior surfaces, including leather treatment, carpet cleaning, and sanitization.",
    price: "Starting at $129",
    image: Image2025_04_05
  },
  {
    title: "Paint Correction",
    description: "Professional machine polishing to remove swirl marks, scratches, and imperfections, restoring your vehicle's paint to a showroom finish.",
    price: "Starting at $249",
    image: Image2025_04_20
  },
  {
    title: "Headlight Restoration",
    description: "Revitalize cloudy, yellowed headlights to improve visibility and appearance, enhancing both safety and aesthetics.",
    price: "Starting at $79",
    image: Image2024_12_04
  }
];

const ServiceCard = ({ service }: { service: ServiceProps }) => {
  const { scrollToElement } = useSmoothScroll();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden service-card">
      <div className="h-48 overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="font-montserrat font-semibold text-xl mb-3 text-primary">{service.title}</h3>
        <p className="text-gray-600 mb-4">
          {service.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-accent font-semibold">{service.price}</span>
          <button 
            onClick={() => scrollToElement("contact")}
            className="text-secondary hover:text-accent transition-colors font-medium flex items-center"
          >
            Learn More <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-primary mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of auto detailing services to keep your vehicle 
            looking and performing at its best.
          </p>
          <div className="w-24 h-1 bg-accent mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

import { MutableRefObject } from "react";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

interface FooterProps {
  refs: {
    home: MutableRefObject<HTMLDivElement | null>;
    about: MutableRefObject<HTMLDivElement | null>;
    services: MutableRefObject<HTMLDivElement | null>;
    gallery: MutableRefObject<HTMLDivElement | null>;
    reviews: MutableRefObject<HTMLDivElement | null>;
    contact: MutableRefObject<HTMLDivElement | null>;
  };
}

const Footer = ({ refs }: FooterProps) => {
  const { scrollToSection } = useSmoothScroll();

  const handleNavClick = (sectionId: string) => {
    const section = refs[sectionId as keyof typeof refs].current;
    if (section) {
      scrollToSection(section);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-montserrat font-bold text-xl mb-4">AUTO SPA DETAILING</h3>
            <p className="text-gray-300 mb-4">
              Tangier's premier automotive detailing service, specializing in ceramic protection, 
              paint protection film, and premium wash services.
            </p>
          </div>
          
          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["home", "about", "services", "gallery", "reviews", "contact"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleNavClick(item)}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item === "home" ? "Home" : item === "about" ? "About Us" : item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavClick("services")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Ceramic Coating
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("services")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Paint Protection Film
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("services")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Premium Wash
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("services")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Interior Detailing
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("services")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Paint Correction
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-accent"></i>
                <span className="text-gray-300">Tangier 90000, Morocco</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone-alt mt-1 mr-3 text-accent"></i>
                <span className="text-gray-300">+212 5XX-XXXXXX</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope mt-1 mr-3 text-accent"></i>
                <span className="text-gray-300">info@autospadetailing.com</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-clock mt-1 mr-3 text-accent"></i>
                <span className="text-gray-300">Mon-Fri: 9AM-8PM<br />Sat: 9AM-6PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 mt-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Auto Spa Detailing. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

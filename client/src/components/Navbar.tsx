import { useState, useEffect, MutableRefObject } from "react";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

interface NavbarProps {
  refs: {
    home: MutableRefObject<HTMLDivElement | null>;
    about: MutableRefObject<HTMLDivElement | null>;
    services: MutableRefObject<HTMLDivElement | null>;
    gallery: MutableRefObject<HTMLDivElement | null>;
    reviews: MutableRefObject<HTMLDivElement | null>;
    contact: MutableRefObject<HTMLDivElement | null>;
  };
}

const Navbar = ({ refs }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { scrollToSection } = useSmoothScroll();

  // Handle navigation click
  const handleNavClick = (sectionId: string) => {
    const section = refs[sectionId as keyof typeof refs].current;
    if (section) {
      scrollToSection(section);
      setActiveSection(sectionId);
      setMobileMenuOpen(false);
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 300; // Add offset for better UX

      // Check which section is currently visible
      Object.entries(refs).forEach(([key, ref]) => {
        const element = ref.current;
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(key);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [refs]);

  return (
    <header className="fixed w-full bg-primary text-white z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a 
          href="#home" 
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("home");
          }}
          className="font-montserrat font-bold text-xl md:text-2xl"
        >
          AUTO SPA DETAILING
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {["home", "about", "services", "gallery", "reviews", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item);
              }}
              className={`font-medium transition-colors ${
                activeSection === item ? "text-accent" : "hover:text-accent"
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden focus:outline-none"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <i className="fas fa-times text-2xl"></i>
          ) : (
            <i className="fas fa-bars text-2xl"></i>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`absolute top-[64px] left-0 w-full bg-primary mobile-menu ${
          mobileMenuOpen ? "active" : ""
        }`}
      >
        <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
          {["home", "about", "services", "gallery", "reviews", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item);
              }}
              className="py-2 px-4 font-medium hover:bg-secondary rounded"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;

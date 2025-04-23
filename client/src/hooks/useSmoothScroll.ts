export const useSmoothScroll = () => {
  // Scroll to specific element by ID
  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      const headerHeight = document.querySelector('header')?.offsetHeight || 0;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Scroll to specific element by ref
  const scrollToSection = (section: HTMLElement) => {
    if (!section) return;
    
    const headerHeight = document.querySelector('header')?.offsetHeight || 0;
    const elementPosition = section.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerHeight;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  return { scrollToElement, scrollToSection };
};

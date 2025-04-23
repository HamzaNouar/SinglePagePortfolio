import Image2024_12_04 from "@assets/2024-12-04.jpg";
import Image2024_07_08 from "@assets/2024-07-08.jpg";
import Image2025_04_20 from "@assets/2025-04-20.jpg";
import Image2025_04_05 from "@assets/2025-04-05.jpg";
import Image2024_08_14_2 from "@assets/2024-08-14 (2).jpg";
import Image2025_02_26 from "@assets/2025-02-26.jpg";
import Image2024_08_14_1 from "@assets/2024-08-14 (1).jpg";
import Image2025_02_03 from "@assets/2025-02-03.jpg";
import Image2025_04_05_1 from "@assets/2025-04-05 (1).jpg";
import Image2024_08_14 from "@assets/2024-08-14.jpg";
import Image2024_10_27 from "@assets/2024-10-27.jpg";

const AboutSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-primary mb-4">About Our Auto Spa</h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="font-montserrat font-semibold text-2xl mb-4 text-secondary">Premium Car Care in Tangier</h3>
            <p className="mb-4 text-gray-700">
              Auto Spa Detailing is Tangier's premier automotive detailing service, specializing in 
              ceramic protection, paint protection film (PPF), and premium wash services. Our mission 
              is to provide exceptional care for your vehicle with meticulous attention to detail and
              professional-grade products.
            </p>
            <p className="mb-6 text-gray-700">
              With years of experience in the industry, our skilled technicians utilize the latest 
              techniques and materials to deliver results that exceed expectations. We understand 
              that your vehicle is an investment, and we're dedicated to helping you protect and 
              maintain it to the highest standards.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <i className="fas fa-check-circle text-accent text-xl mr-3"></i>
                <span>Professional Staff</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-check-circle text-accent text-xl mr-3"></i>
                <span>Premium Products</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-check-circle text-accent text-xl mr-3"></i>
                <span>Attention to Detail</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-check-circle text-accent text-xl mr-3"></i>
                <span>Satisfaction Guarantee</span>
              </div>
            </div>
            
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Business Hours:</h4>
              <p className="flex justify-between border-b border-gray-200 py-1">
                <span>Monday - Friday:</span>
                <span>9:00 AM - 8:00 PM</span>
              </p>
              <p className="flex justify-between border-b border-gray-200 py-1">
                <span>Saturday:</span>
                <span>9:00 AM - 6:00 PM</span>
              </p>
              <p className="flex justify-between py-1">
                <span>Sunday:</span>
                <span>Closed</span>
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-lg h-48 md:h-56 lg:h-64">
              <img src={Image2024_10_27} 
                  alt="Blue BMW at Auto Spa Detailing" 
                  className="w-full h-full object-cover gallery-img" />
            </div>
            <div className="overflow-hidden rounded-lg h-48 md:h-56 lg:h-64">
              <img src={Image2025_02_03} 
                  alt="Premium vehicle with ceramic coating" 
                  className="w-full h-full object-cover gallery-img" />
            </div>
            <div className="overflow-hidden rounded-lg h-48 md:h-56 lg:h-64">
              <img src={Image2024_08_14_1} 
                  alt="Car washing process" 
                  className="w-full h-full object-cover gallery-img" />
            </div>
            <div className="overflow-hidden rounded-lg h-48 md:h-56 lg:h-64">
              <img src={Image2024_08_14} 
                  alt="Interior detailing" 
                  className="w-full h-full object-cover gallery-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

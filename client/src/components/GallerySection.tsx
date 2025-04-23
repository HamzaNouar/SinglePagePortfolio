import Image2024_12_04 from "@assets/2024-12-04.jpg";
import Image2024_07_08 from "@assets/2024-07-08.jpg";
import Image2025_04_20 from "@assets/2025-04-20.jpg";
import Image2025_04_05 from "@assets/2025-04-05.jpg";

const GallerySection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-primary mb-4">Our Gallery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our stunning portfolio of detailing work on luxury and everyday vehicles.
          </p>
          <div className="w-24 h-1 bg-accent mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="relative group overflow-hidden rounded-lg shadow-md h-64">
            <img 
              src={Image2024_12_04} 
              alt="Mercedes in Auto Spa Studio" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-white text-center p-4">
                <h3 className="text-xl font-semibold mb-2">Ceramic Coating</h3>
                <p>Mercedes-Benz with premium ceramic protection</p>
              </div>
            </div>
          </div>
          
          <div className="relative group overflow-hidden rounded-lg shadow-md h-64">
            <img 
              src={Image2025_04_20} 
              alt="Porsche detailing" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-white text-center p-4">
                <h3 className="text-xl font-semibold mb-2">Paint Protection Film</h3>
                <p>Porsche with full-body PPF application</p>
              </div>
            </div>
          </div>
          
          <div className="relative group overflow-hidden rounded-lg shadow-md h-64">
            <img 
              src={Image2024_07_08} 
              alt="Auto Spa Studio" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-white text-center p-4">
                <h3 className="text-xl font-semibold mb-2">Our Facility</h3>
                <p>State-of-the-art detailing studio</p>
              </div>
            </div>
          </div>
          
          <div className="relative group overflow-hidden rounded-lg shadow-md h-64">
            <img 
              src={Image2025_04_05} 
              alt="BMW detailing" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-white text-center p-4">
                <h3 className="text-xl font-semibold mb-2">Premium Wash</h3>
                <p>BMW receiving our signature wash service</p>
              </div>
            </div>
          </div>
          
          <div className="relative group overflow-hidden rounded-lg shadow-md h-64 sm:col-span-2 lg:col-span-2">
            <img 
              src={Image2024_12_04} 
              alt="Auto Spa Detailing" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-white text-center p-4">
                <h3 className="text-xl font-semibold mb-2">Auto Spa Detailing</h3>
                <p>Tangier's premier auto detailing service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
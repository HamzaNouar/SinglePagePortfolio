const ContactSection = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-primary mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or ready to schedule your appointment? Get in touch with us today.
          </p>
          <div className="w-24 h-1 bg-accent mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="font-montserrat font-semibold text-xl mb-4 text-primary">Contact Information</h3>
              
              <div className="flex items-start mb-4">
                <div className="bg-secondary rounded-full w-10 h-10 flex items-center justify-center text-white flex-shrink-0 mt-1">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="ml-4">
                  <h4 className="font-medium mb-1">Address:</h4>
                  <p className="text-gray-600">Tangier 90000, Morocco</p>
                </div>
              </div>
              
              <div className="flex items-start mb-4">
                <div className="bg-secondary rounded-full w-10 h-10 flex items-center justify-center text-white flex-shrink-0 mt-1">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="ml-4">
                  <h4 className="font-medium mb-1">Phone:</h4>
                  <p className="text-gray-600">
                    <a href="tel:+212662038056" className="hover:text-accent transition-colors">+212 662-038056</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start mb-4">
                <div className="bg-secondary rounded-full w-10 h-10 flex items-center justify-center text-white flex-shrink-0 mt-1">
                  <i className="fab fa-whatsapp"></i>
                </div>
                <div className="ml-4">
                  <h4 className="font-medium mb-1">WhatsApp:</h4>
                  <p className="text-gray-600">
                    <a href="https://wa.me/212625589099" className="hover:text-accent transition-colors">+212 625-589099</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start mb-4">
                <div className="bg-secondary rounded-full w-10 h-10 flex items-center justify-center text-white flex-shrink-0 mt-1">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="ml-4">
                  <h4 className="font-medium mb-1">Email:</h4>
                  <p className="text-gray-600">info@autospadetailing.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-secondary rounded-full w-10 h-10 flex items-center justify-center text-white flex-shrink-0 mt-1">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="ml-4">
                  <h4 className="font-medium mb-1">Business Hours:</h4>
                  <p className="text-gray-600 mb-1">Monday - Friday: 9:00 AM - 8:00 PM</p>
                  <p className="text-gray-600 mb-1">Saturday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-montserrat font-semibold text-xl mb-4 text-primary">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="bg-pink-600 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a href="#" className="bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div className="h-[400px] md:h-full rounded-lg overflow-hidden shadow-md">
            {/* Google Maps embed */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.2376636062196!2d-5.8540853!3d35.7608679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b875ec2541c49%3A0x4d3264809c76823!2sAUTO%20SPA%20DETAILING%20%7C%20CERAMIC%20PROTECTION%20%7C%20PPF%20%7C%20PREMIUM%20WASH%20%7C!5e0!3m2!1sen!2sus!4v1684235879063!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Auto Spa Detailing Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

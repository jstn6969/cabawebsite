import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section - First thing they see */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img 
          src="/api/placeholder/1920/1080" 
          alt="Luxury Kitchen" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center">
            Transform Your Home
          </h1>
          <button className="bg-blue-600 text-white text-xl px-8 py-4 rounded-lg hover:bg-blue-700 transition">
            Get Free Estimate
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Kitchen Remodeling", price: "Starting at $15,000" },
              { title: "Bathroom Renovation", price: "Starting at $10,000" },
              { title: "Room Addition", price: "Starting at $40,000" }
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg text-center">
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Remodel Section */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Why Remodel Now?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Increase Home Value",
                text: "A professional remodel can increase your home's value by 40-80%"
              },
              {
                title: "Better Functionality",
                text: "Modern designs improve your daily life and space efficiency"
              },
              {
                title: "Energy Savings",
                text: "New fixtures and appliances reduce monthly utility costs"
              },
              {
                title: "Enhanced Comfort",
                text: "Create spaces that better suit your lifestyle and needs"
              }
            ].map((reason, index) => (
              <div key={index} className="bg-white p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">{reason.title}</h3>
                <p className="text-gray-600">{reason.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">What Our Clients Say</h2>
          <div className="grid grid-cols-1 gap-8">
            {[
              {
                text: "They transformed our outdated kitchen into a modern masterpiece. The team was professional and finished on time.",
                name: "Sarah Johnson",
                project: "Kitchen Remodel"
              },
              {
                text: "Excellent work on our bathroom renovation. The attention to detail was impressive.",
                name: "Mike Chen",
                project: "Bathroom Remodel"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg">
                <p className="text-lg mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-gray-600">{testimonial.project}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">CABA Remodeling</h2>
          <p className="text-lg mb-4">Serving the San Francisco Bay Area</p>
          <p className="text-xl font-semibold mb-2">(555) 123-4567</p>
          <p className="text-gray-400 mb-8">info@cabaremodeling.com</p>
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} CABA Remodeling. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
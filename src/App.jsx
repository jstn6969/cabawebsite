import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="app">
      


      <section className="hero">
          <div className="logo">
            <img src="src/assets/cabalogo.png" alt="CABA Remodeling" className="logo-image" />
          </div>
          <div className="hero-content">
          <div className="hero-text">
            <h1>Ready to Transform Your Home In SoCal? </h1>
            <p>Bathrooms, kitchens,rooms, we do it all</p>
          </div>
          <form className="hero-form">
            <input type="text" placeholder="Full Name" className="form-input" />
            <input type="email" placeholder="Email" className="form-input" />
            <input type="pn" placeholder="Phone Number" className="form-input" />
            <button className="cta-button">Get Your Free Estimate</button>
          </form>
          </div>
      </section>




      <section className="services">
        <h2>Our Services</h2>
        <div className="services-grid">
          {[
            { title: "Kitchen Remodeling", price: "Starting at $15,000" },
            { title: "Bathroom Renovation", price: "Starting at $10,000" },
            { title: "Room Addition", price: "Starting at $40,000" }
          ].map((service, index) => (
            <div key={index} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.price}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="why-remodel">
        <h2>Why Remodel Now?</h2>
        <div className="reasons-grid">
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
            <div key={index} className="reason-card">
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonials-grid">
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
            <div key={index} className="testimonial-card">
              <p className="testimonial-text">"{testimonial.text}"</p>
              <p className="testimonial-name">{testimonial.name}</p>
              <p className="testimonial-project">{testimonial.project}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <h2>CABA Remodeling</h2>
        <p>Serving the San Francisco Bay Area</p>
        <p className="phone">(555) 123-4567</p>
        <p className="email">info@cabaremodeling.com</p>
        <p className="copyright">© {new Date().getFullYear()} CABA Remodeling. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
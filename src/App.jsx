import React from 'react';
import './App.css';
import cabaLogo from '/src/assets/cabalogo.png';  // Add this at the top of your file


const App = () => {
  return (
    <div className="app">
      


      <section className="hero">
          <div className="logo">
          <img src={cabaLogo} alt="CABA Remodeling" className="logo-image" />
          </div>
          <div className="hero-content">
          <div className="hero-text">
            <h1>Ready to Transform Your Home In SoCal? </h1>
            <p>We Can Do It All, Customly Made To Your Liking</p>

          </div>
          <form className="hero-form">
            <input type="text" placeholder="Full Name" className="form-input"required />
            <input type="email" placeholder="Email" className="form-input" required />
            <input type="pn" placeholder="Phone Number" className="form-input" required />
            <button className="cta-button">Get Your Free Estimate</button>
          </form>
          </div>
      </section>




      <section className="services">
        <h2>What We Specialize In</h2>
        <div className="services-grid">
          {[
            { 
              img: "https://i.pinimg.com/736x/8c/90/87/8c9087bb6b4464cba963c89a4fd94ac7.jpg",
              title: "🍳 Kitchen Remodeling",
              text: "3-6 Weeks",
              price: "$30,000+",

            },
            { 
              img: "https://i.pinimg.com/736x/06/53/15/065315a6ce4d1fd890cded79ad8befe0.jpg",
              title: "🚿 Bathroom Renovation",
              text: "2-4 Weeks",
              price: "$15,000+" 
            },
            { 
              img: "https://i.pinimg.com/736x/5a/2f/a1/5a2fa1eca69bd26c556e9dd7733dbc16.jpg",
              title: "🛋️ Living Rooms",
              text: "2-6 Weeks",
              price: "$15,000+"
            },
            { 
              img: "https://i.pinimg.com/736x/29/8c/ae/298cae290203b0c616dbb099bf2d33ae.jpg",
              title: "🛏️ Bedrooms",
              text: "1-4 Weeks",
              price: "$10,000+"
            }
          ].map((service, index) => (
            <div key={index} className="service-card">
              <img src={service.img} alt="a picture should be here"></img>
              <h3>{service.title}</h3>
              <h4>{service.text} </h4>
              <h5>{service.price}</h5>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>





      <section className="why-remodel">
        <h2>Why Should You Remodel Your Home?</h2>
        <div className="reasons-grid">
          {[
            {
              title: " 💸 Instantly Increases Your Home Value",
              text: "Remodeling your house is an investment. The more value you add, the more value you get back. On average remodeled houses appreciate:",
              numbers:"30-70%"
            },
            {
              title: " ⭐️ Experience Living In  Your Dream Home",
              text: "Transform your house into exactly what you want. Customize every part to perfection so that you can live in your dream home like many others:",
              numbers:"Over 50 Homes Transformed "
            },
          {
            title: " ⚡️ Higher Safety & More Energy Efficient",
            text: "Upgrading your home can increase safety and help you save money. Having better systems in place can make your life easier & save annualy around: ",
            numbers:"$1000-$3000"
          },

          ].map((reason, index) => (
            <div key={index} className="reason-card">
              <div className='reason-content'>
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
              <h4>{reason.numbers}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>


      <section className="portfolio">
      <h2>Our Past Work</h2>
      <div className="portfolio-grid">
        {[
          {image: "https://i.pinimg.com/736x/54/69/49/546949f7b51a9dd9ebac16294ff29e06.jpg"},
          {image: "https://i.pinimg.com/736x/42/b8/a7/42b8a7c6d47cc7408ad449891bfe8de4.jpg"},
          {image: "https://i.pinimg.com/736x/33/7e/96/337e96d2ea536378f6578a4d0ef3ed89.jpg"},
          {image: "https://i.pinimg.com/736x/ac/36/91/ac3691399f79bacd866801070cc8dd28.jpg"},
          {image: "https://i.pinimg.com/736x/58/c9/5a/58c95a8c0685d9654e20ee6d47b149ab.jpg"},
          {image: "https://i.pinimg.com/736x/1b/7a/2e/1b7a2e0553b5cf05c5b8e17dd5449626.jpg"},
          {image: "https://i.pinimg.com/736x/5c/ee/35/5cee352a7bf003b0c5a6f53767e40047.jpg"},
          {image: "https://i.pinimg.com/736x/25/6c/66/256c665ddb039ab97396f050df80545a.jpg"},
          {image: "https://i.pinimg.com/736x/ed/a2/29/eda2294c5a02fd16b5bdd7e94d814390.jpg"},
          {image: "https://i.pinimg.com/736x/db/34/dc/db34dcf3da71dce868f19a1649dc687a.jpg"},
          {image: "https://i.pinimg.com/736x/c4/f8/9b/c4f89ba3d36f5e2e69e7a64b844076d1.jpg"},
          {image: "https://i.pinimg.com/736x/7c/de/ec/7cdeecfebe50d289f1eddc7c289d1f6a.jpg"},
          {image: "https://i.pinimg.com/736x/62/aa/34/62aa342b793ea80f525a8c1c7254dc6c.jpg"},
          {image: "https://i.pinimg.com/736x/35/31/7c/35317ce0c2f4ffe1edcccf0bfd5c6e5b.jpg"},
          




          // Add more images
        ].map((item, index) => (
          <div key={index} className="portfolio-card">
            <img src={item.image} alt="Portfolio work" />
          </div>
        ))}
      </div>
    </section>




      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonials-grid">
          {[
            {
              name: "Jennifer Smith",
              project: "Complete Kitchen Remodel",
              rating: 5,
              text: "They transformed our outdated kitchen into a modern masterpiece! The team was professional, clean, and finished ahead of schedule. The attention to detail was remarkable.",
              image: "/api/placeholder/400/300",
              date: "March 2024",
              projectValue: "$45,000",
              location: "Los Angeles, CA"
            },
            {
              name: "Michael Rodriguez",
              project: "Master Bathroom Renovation",
              rating: 5,
              text: "Outstanding craftsmanship and service. They helped us design our dream bathroom and executed it perfectly. The tile work is absolutely beautiful!",
              image: "/api/placeholder/400/300",
              date: "February 2024",
              projectValue: "$25,000",
              location: "Orange County, CA"
            },
            {
              name: "Sarah Johnson",
              project: "Full House Remodel",
              rating: 5,
              text: "A complete transformation of our 1960s home. The team was incredible from start to finish. They stayed within budget and the results exceeded our expectations.",
              image: "/api/placeholder/400/300",
              date: "January 2024",
              projectValue: "$120,000",
              location: "San Diego, CA"
            }
          ].map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <img src={testimonial.image}></img>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <p className="testimonial-name">{testimonial.name}</p>
              <p className="testimonial-project">{testimonial.project}</p>
            </div>
          ))}
        </div>
      </section>


      
    <footer className="footer">
  <div className="footer-content">
    <div className="footer-section">
      <h3>Contact Us</h3>
      <div className="footer-links">
        <a href="tel:+15551234567">(323) 548-9218</a>
        <a href="mailto:info@cabaremodeling.com">info@cabaremodeling.com</a>
      </div>
    </div>
    
    <div className="footer-section">
      <h3>Follow Us</h3>
      <div className="social-icons">
        <a href="https://instagram.com/cabaremodeling">Instagram</a>
      </div>
    </div>

    <div className="footer-section">
      <h3>Location</h3>
      <p>Southern California</p>
    </div>
  </div>
  
  <p className="copyright">© {new Date().getFullYear()} CABA Remodeling. All rights reserved.</p>
</footer>
    </div>
  );
};

export default App;
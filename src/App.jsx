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
              price: "$5,000+"
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
              title: " ⚡️ Higher Safety & More Energy Efficient",
              text: "Upgrading your home can increase safety and help you save money. Having better systems in place can make your life easier & save annualy around: ",
              numbers:"$1000-$3000"
            },
            {
              title: " ⭐️ Experience Living In  Your Dream Home",
              text: "Transform your house into exactly what you want. Customize every part to perfection so that you can live in your dream home like many others:",
              numbers:"Over 50 Homes Transformed "
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
              name: "Angelica",
              project: "Bathroom Remodel",
              rating: 5,
              text: "Remodeled my bathroom quickly and made it exactly how I wanted. They were very transparent and got the exact materials I wanted.",
              image: "https://i.pinimg.com/736x/a1/02/e5/a102e5da3544a60d6b2fbbe1826260a4.jpg",
              date: "March 2024",
              projectValue: "$23,000",
              location: "📍 Riverside, CA"
            },
            {
              name: "Sofia",
              project: "Bathroom Remodel",
              rating: 5,
              text: "Made selecting the materials super easy and the finished product looked super nice",
              image: "https://i.pinimg.com/736x/4a/5d/27/4a5d27392276f4b7a0b2f3c46cc04f15.jpg",
              date: "February 2024",
              projectValue: "$25,000",
              location: "📍 Moreno Valley, CA"
            },
            {
              name: "Sarah ",
              project: "Bathroom Remodel",
              rating: 5,
              text: "Turned my old bathroom into my dream one. It looks incredible, just how I wanted it.",
              image: "https://i.pinimg.com/736x/27/70/cc/2770cc128d9b76fc87ae4e1f98a0bd20.jpg",
              date: "January 2024",
              projectValue: "$35,000",
              location: "📍 Downey, CA",
            }
          ].map((testimonial, index) => (
            <div key={index} className="testimonial-card">

 
            
              <img src={testimonial.image}></img>
              <p className="testimonial-name">{testimonial.name}</p>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <p className="testimonial-location">{testimonial.location}</p>
            </div>
          ))}
            <button className='cta-button'>Add Your Review</button>

        </div>
      </section>




      <section className="service-areas">
        <h2>Areas We Service</h2>
        <div className="areas-grid">
          {[
            {
              region: "Los Angeles County (West)",
              cities: ["Beverly Hills", "West Hollywood", "Century City", "Westwood", "Bel Air", "Hollywood", "Santa Monica", "Culver City", "Brentwood"],
              responseTime: "2-6 Hours",
              icon: "🌆",
              className: "area-card west-la"
            },
            {
              region: "Los Angeles County (East)",
              cities: ["Downey", "Whittier", "Pico Rivera", "Montebello", "La Mirada", "Santa Fe Springs", "Norwalk", "Cerritos", "Bell Gardens", "South Gate"],
              responseTime: "2-6 Hours",
              icon: "🏘️",
              className: "area-card east-la"
            },
            {
              region: "Riverside County",
              cities: ["Riverside", "Corona", "Moreno Valley", "Temecula", "Murrieta", "Hemet"],
              responseTime: "2-6 Hours",
              icon: "🌅",
              className: "area-card riverside"
            },
            {
              region: "Orange County",
              cities: ["Anaheim", "Santa Ana", "Irvine", "Huntington Beach", "Newport Beach", "Costa Mesa"],
              responseTime: "4-12 Hours",
              icon: "🏖️",
              className: "area-card orange-county"
            }
          ].map((area, index) => (
            <div key={index} className={area.className}>
              <h3>{area.icon} {area.region}</h3>
              <div className="cities-list">
                {area.cities.map((city, cityIndex) => (
                  <span key={cityIndex} className="city-tag">{city}</span>
                ))}
              </div>
              <p className="response-time">Response Time: {area.responseTime}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="payment-options">
        <h2>Payment Methods</h2>
        <div className="payment-grid">
          {[
            {
              title: "Cash",
              description: "Direct cash payments accepted for all services. Get an instant discount when paying in cash.",
              details: "Most Popular Method",
              icon: "💵"
            },
            {
              title: "Bank Wire",
              description: "Secure bank-to-bank transfers. Perfect for larger projects and quick transactions.",
              details: "Fast & Secure",
              icon: "🏦"
            },
            {
              title: "Personal Check",
              description: "We accept personal and business checks. Please allow time for processing.",
              details: "Traditional Option",
              icon: "📝"
            },
            {
              title: "Crypto",
              description: "We accept Bitcoin & other major Cryptocurrencies",
              details: "Modern Solution",
              icon: "₿"
            }
          ].map((option, index) => (
            <div key={index} className="payment-card">
              <div className="payment-icon">{option.icon}</div>
              <h3>{option.title}</h3>
              <p className="payment-description">{option.description}</p>
              <p className="payment-details">{option.details}</p>
            </div>
          ))}
        </div>
      </section>

      
      <section className="faq-section">
  <h2>Frequently Asked Questions</h2>
  <div className="faq-container">
    {[
      {
        question: "Can I live in my house during the remodel?",
        answer: "Yes, most clients live at home during remodeling. We set up dust barriers, keep your utilities running, and maintain a clean work area. Kitchen remodels might require temporary kitchen setups, which we can help plan. We work in sections to minimize disruption to your daily life."
      },
      {
        question: "Do I need to buy my own materials and appliances?",
        answer: "We can handle all material purchases, or you can buy certain items yourself. Most clients prefer us to source major materials (cabinets, countertops, tile) while they choose their own appliances and fixtures. We provide trade discounts on materials when possible."
      },
      {
        question: "What is your project timeline process?",
        answer: "Each project receives a detailed timeline during consultation. We factor in material delivery, labor schedules, and potential inspection dates. You'll get regular updates as work progresses."
      },
      {
        question: "What if I want to make changes once the project starts?",
        answer: "Changes can be made during the project, but they may affect timeline and cost. Small changes (like paint color) are usually no problem. Larger changes (like layout) will require a change order and updated timeline. We'll always discuss cost implications before proceeding."
      },
      {
        question: "What's your payment schedule like?",
        answer: "We typically require 50% deposit to begin work and 35% upon completion. Larger projects might be broken into more payment phases. We accept cash, checks, wire transfers, and crypto."
      },
      {
        question: "What happens if issues arise after completion?",
        answer: "If you ever have any issues after your remodel, we've got you covered. Whether you need a plumber, an electrician, or a general contractor for any other concerns, we'll send our team members to fix the problem so you'll never have to search for outside help - just give us a call and we'll handle it."
      }
    ].map((faq, index) => (
      <details key={index} className="faq-item">
        <summary className="faq-question">
          {faq.question}
          <span className="faq-icon">+</span>
        </summary>
        <div className="faq-answer">
          <p>{faq.answer}</p>
        </div>
      </details>
    ))}
  </div>
</section>






      
<footer className="footer">
  <div className="footer-content">
    <div className="footer-section">
      <h3>Contact Us</h3>
      <div className="contact-icons">
        <a href="tel:+13235489218" className="contact-icon">
        <img width="48" height="48" src="https://img.icons8.com/color/100/apple-phone.png" alt="apple-phone"/>
          <span>(323) 548-9218</span>
        </a>
        <a href="https://instagram.com/cabaremodeling" className="contact-icon">
        <img width="48" height="48" src="https://img.icons8.com/color/100/instagram-new--v1.png" alt="instagram-new--v1"/>
          <span>@cabaremodeling</span>
        </a>
        <a href="https://wa.me/13235489218" className="contact-icon">
        <img width="48" height="48" src="https://img.icons8.com/color/100/whatsapp--v1.png" alt="whatsapp--v1"/>
        <span>+1 (323) 548-9218</span>

        </a>
        <a href="https://t.me/cabaremodeling" className="contact-icon">
        <img width="48" height="48" src="https://img.icons8.com/color/48/telegram-app--v1.png" alt="telegram-app--v1"/> 
        <span>+1 (323) 548-9218</span>
        </a>
      </div>
    </div>

  </div>
  
  <p className="copyright">© {new Date().getFullYear()} CABA Remodeling. All rights reserved.</p>
</footer>
    </div>
  );
};

export default App;
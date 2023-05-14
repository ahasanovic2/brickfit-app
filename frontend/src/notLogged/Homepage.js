import React from 'react';
import gymImage from '../images/gym.jpg';

const HomePage = () => {
  return (
    <div>  
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to XYZ Gym</h1>
          <p>Your one-stop fitness destination</p>
          <a href="/membership" className="cta-button">Get Started</a>
        </div>
      </section>
      
      <section className="about">
        <div className="about-content">
          <img src={gymImage} alt="Gym" />
          <div>
            <h2>About Us</h2>
            <p>XYZ Gym is a state-of-the-art fitness center dedicated to helping individuals achieve their health and fitness goals. Our expert trainers, modern equipment, and wide range of classes make us the perfect choice for anyone looking to improve their physical well-being.</p>
          </div>
        </div>
      </section>
      
      <footer>
        <div className="footer-content">
          <p>&copy; 2023 XYZ Gym. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

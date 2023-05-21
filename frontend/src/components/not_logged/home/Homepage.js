import React from "react";
import gymImage from "../../../images/gym.jpg";
import pozadina from "../../../images/teretana.png";

const HomePage = () => {
  return (
    <div style={{ backgroundImage: `url(${pozadina})`, height: "100vh", backgroundSize: "cover" }}>
      <section className="hero">
        <div className="hero-content">
          <h1 className="naslovna-naslov">Welcome to XYZ Gym</h1>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

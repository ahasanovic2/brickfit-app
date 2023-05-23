import React from "react";
import gymImage from "../../../images/gym.jpg";
import pozadina from "../../../images/teretana.png";

const HomepageAdmin = () => {
  return (
    <div style={{ backgroundImage: `url(${pozadina})`, height: "100vh", backgroundSize: "cover" }}>
      <section className="hero">
        <div className="hero-content">
          <h1 style={{padding: "10px"}} className="naslovna-naslov">PRIVILEGOVANI REŽIM RADA !</h1>
        </div>
      </section>
    </div>
  );
};

export default HomepageAdmin;

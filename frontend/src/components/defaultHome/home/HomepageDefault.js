import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import pozadina from "C:/Users/User/Documents/PNWT/brickfit-app/frontend/src/images/gym.jpg";

const fadeImages = [
  "https://www.localsyr.com/wp-content/uploads/sites/63/2023/01/GettyImages-485817552.jpg",
  "https://d3rg18dos0rgue.cloudfront.net/wp-content/uploads/sites/3/2018/03/Roxy-Cinema-Tribeca1.jpg",
  "https://www.leawo.org/entips/wp-content/uploads/2021/04/side-by-side-3d-watch-in-cinema.jpg",
];

const HomepageDefault = () => {
  return (
    <div className="slide-container">
      <Fade>
        <div className="each-fade">
          <img style={{ width: "100%", height: "1000px" }} src={fadeImages[0]} />
        </div>
        <div className="each-fade">
          <img style={{ width: "100%", height: "1000px" }} src={fadeImages[1]} />
        </div>
        <div className="each-fade">
          <img style={{ width: "100%", height: "1000px" }} src={fadeImages[2]} />
        </div>
      </Fade>
    </div>
  );
};

export default HomepageDefault;

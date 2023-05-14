import React from 'react';
import locationImage from './images/lokacija.png';

const Location = () => {
  return (
    <div>
      <h1>Our Location</h1>
      <p>We are located at 123 Main Street, Anytown, Anywhere.</p>
      <img src={locationImage} alt="Our location on a map" />
      <p>Come visit us!</p>
    </div>
  );
};

export default Location;

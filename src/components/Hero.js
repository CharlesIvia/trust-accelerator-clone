import React from "react";
import brain from "../images/big-brain.png";
const Hero = () => {
  return (
    <div>
      <h1>TRUST ACCELERATOR</h1>
      <div>
        <p>We build engines for entrepreneurs.</p>
        <img src={brain} alt="big-brain" />
      </div>
      <div className="line"></div>
      <p>
        We help businesses create and nurture long-term relationships with their
        future customers.
      </p>
    </div>
  );
};

export default Hero;

import React from "react";
import brain from "../images/big-brain.png";
const Hero = () => {
  return (
    <div className="container hero ">
      <h1 className="title">TRUST ACCELERATOR</h1>
      <div className="tag-line">
        <p className="tag">We build content engines for entrepreneurs.</p>
        <img className="big-brain" src={brain} alt="big-brain" />
      </div>
      <div className="line"></div>
      <p className="do">
        We help businesses create and nurture long-term relationships with their
        future customers.
      </p>
    </div>
  );
};

export default Hero;

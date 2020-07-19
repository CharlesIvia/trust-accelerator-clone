import React from "react";
import progress from "../images/image01.png";

const WhatItTakes = () => {
  return (
    <div className="container takes">
      <h1 className="what">What it takes</h1>
      <img className="progress-img" src={progress} alt="" />
    </div>
  );
};

export default WhatItTakes;

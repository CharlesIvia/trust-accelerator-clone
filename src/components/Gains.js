import React from "react";
import smallBrain from "../images/brain.svg";
import roller from "../images/image08.svg";
import grid from "../images/image06.svg";
import satelite from "../images/image05.svg";

const Gains = () => {
  return (
    <div className="container get">
      <h1 className="get-top">What you get</h1>

      <div className="two">
        <div className="first-second">
          <div className="lead">
            <div>
              <p>LEADERSHIP</p>
              <h1>LEVERAGE</h1>
            </div>

            <img className="brain-img" src={smallBrain} alt="" />
          </div>
          <p>We work together to form your unique content strategy.</p>

          <div className="small-line"></div>
        </div>
        <div className="first-second">
          <div className="lead">
            <div>
              <p>ASSET</p>
              <h1>AUTOMATION</h1>
            </div>

            <img className="roller-img" src={roller} alt="" />
          </div>
          <p>
            You talk. We listen, write, design, and format assets for
            distribution.
          </p>

          <div className="small-line"></div>
        </div>
      </div>

      <div className="two">
        <div className="first-second">
          <div className="lead">
            <div>
              <p>INCREASED</p>
              <h1>INFLUENCE</h1>
            </div>

            <img className="satelite-img" src={satelite} alt="" />
          </div>
          <p>
            We deliver content that builds your authority on every digital
            platform.
          </p>

          <div className="small-line"></div>
        </div>
        <div className="first-second">
          <div className="lead">
            <div>
              <p>ACUTE</p>
              <h1>ACCOUNTABILITY</h1>
            </div>

            <img className="grid-img" src={grid} alt="" />
          </div>
          <p>
            You are committed to making quality content. We won't let you fail.
          </p>

          <div className="small-line"></div>
        </div>
      </div>
    </div>
  );
};

export default Gains;

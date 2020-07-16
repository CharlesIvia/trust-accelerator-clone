import React from "react";
import strategicImg from "../images/strategic.jpg";

const StepOne = () => {
  return (
    <div>
      <p>STEP ONE</p>
      <div>
        <h1>STRATEGIC PLAYBOOK</h1>
        <p>
          The process begins by getting what's in your head, out of your head.
          We validate your experience through a combination of research and
          short interviews, producing a one-off strategic playbook that'll
          ensure you'll never be stuck scratching your head when tasked with
          creating content that delivers massive value. More on that shortly.
        </p>
      </div>
          <div>
              <img src={strategicImg} alt="strategy"/>
      </div>
    </div>
  );
};

export default StepOne;

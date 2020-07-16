import React from "react";
import strategicImg from "../images/strategic.jpg";
import commerceImg from "../images/image10.jpg";
import voiceImg from "../images/image11.jpg";
import innovationImg from "../images/image12.jpg";

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
        <img src={strategicImg} alt="strategy" />
      </div>

      <div className="line"></div>

      <p>STEP TWO</p>
      <div>
        <h1>STRATEGIC PLAYBOOK</h1>
        <p>
          The second component of trust? Consistency. We use what we've agreed
          upon in your Trust Profile to develop a unique brand that will carry
          your message to your market with the authority already warranted by
          your expertise. Already have a brand? We'll build you a complimentary
          visual system.
        </p>
      </div>
      <div>
        <img src={commerceImg} alt="strategy" />
      </div>

      <div className="line"></div>

      <p>STEP THREE</p>
      <div>
        <h1>STRATEGIC PLAYBOOK</h1>
        <p>
          The fun part. You create content through natural conversation. No more
          overthinking. No more agonizing over the details. No more wondering
          whether or not what you said was valuable or not. We'll do all that.
          One thing you should know, we'll hold your feet to the fire.
        </p>
      </div>
      <div>
        <img src={voiceImg} alt="strategy" />
      </div>

      <div className="line"></div>

      <p>STEP FOUR</p>
      <div>
        <h1>STRATEGIC PLAYBOOK</h1>
        <p>
          Our cleverly oiled machine takes your raw genius and optimizes it for
          consumption across platforms. As a podcast, voice clips, conceptual
          graphics, written posts, and SEO optimized articles. Every week. Plus,
          we build you a website that drives hyper-qualified traff
        </p>
      </div>
      <div>
        <img src={innovationImg} alt="strategy" />
      </div>

      <div className="line"></div>
    </div>
  );
};

export default StepOne;

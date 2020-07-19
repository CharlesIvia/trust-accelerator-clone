import React from "react";
import strategicImg from "../images/strategic.jpg";
import commerceImg from "../images/image10.jpg";
import voiceImg from "../images/image11.jpg";
import innovationImg from "../images/image12.jpg";

const Steps = () => {
  return (
    <div className="container steps">
      <p className="step">STEP ONE</p>
      <div className="step-content">
        <div className="step-words">
          <h1 className="step-top">STRATEGIC PLAYBOOK</h1>
          <p className="words">
            The process begins by getting what's in your head, out of your head.
            We validate your experience through a combination of research and
            short interviews, producing a one-off strategic playbook that'll
            ensure you'll never be stuck scratching your head when tasked with
            creating content that delivers massive value. More on that shortly.
          </p>
          <p className="last-words">Output: Trust Profile</p>
        </div>

        <div>
          <img className="images" src={strategicImg} alt="strategy" />
        </div>
      </div>

      <div className="lined"></div>
      <p className="step">STEP TWO</p>
      <div className="step-content">
        <div className="step-words">
          <h1 className="step-top">BUILDING A BRAND</h1>
          <p className="words">
            The second component of trust? Consistency. We use what we've agreed
            upon in your Trust Profile to develop a unique brand that will carry
            your message to your market with the authority already warranted by
            your expertise. Already have a brand? We'll build you a
            complimentary visual system.
          </p>
          <p className="last-words">Output: Visual Branding Framework</p>
        </div>

        <div>
          <img className="images" src={commerceImg} alt="strategy" />
        </div>
      </div>

      <div className="lined"></div>

      <p className="step">STEP THREE</p>
      <div className="step-content">
        <div className="step-words">
          <h1 className="step-top">YOUR INPUT</h1>
          <p className="words">
            The fun part. You create content through natural conversation. No
            more overthinking. No more agonizing over the details. No more
            wondering whether or not what you said was valuable or not. We'll do
            all that. One thing you should know, we'll hold your feet to the
            fire.
          </p>
          <p className="last-words">Output: Process & Scheduling Structure</p>
        </div>

        <div>
          <img className="images" src={voiceImg} alt="strategy" />
        </div>
      </div>

      <div className="lined"></div>

      <p className="step">STEP FOUR</p>
      <div className="step-content">
        <div className="step-words">
          <h1 className="step-top">OUR PROCESS</h1>
          <p className="words">
            Our cleverly oiled machine takes your raw genius and optimizes it
            for consumption across platforms. As a podcast, voice clips,
            conceptual graphics, written posts, and SEO optimized articles.
            Every week. Plus, we build you a website that drives hyper-qualified
            traff
          </p>
          <p className="last-words">Output: Weekly Editorial Assets</p>
        </div>

        <div>
          <img className="images" src={innovationImg} alt="strategy" />
        </div>
      </div>

      <div className="lined"></div>

      <div className="last-line"></div>
    </div>
  );
};

export default Steps;

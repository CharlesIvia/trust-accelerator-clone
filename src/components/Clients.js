import React from "react";
import person from "../images/chalo.jpg";

const Clients = () => {
  return (
    <div>
      <h1>CURRENT CLIENTS</h1>
      <div className="line"></div>
      <div>
        <img src={person} alt="a person" />
        <h3>
          "No one can simplify your message and convey it visually better than
          these guys."
        </h3>
        <p>Jim Fisher — Jucebox</p>

        <div className="line"></div>
        <div>
          <div>
            <div>
              <img src={person} alt="" />
              <p>Janelle Lara</p>
              <p>The Part-Time CEO</p>
            </div>
            <div>
              <p>
                It's my main medium for sharing content. This medium where my
                ideal audience find me. Highly capable, highly intelligent
                people are not spending quite so much time on social media, but
                they are spending time growing and in personal development,
                which happens on podcasts
              </p>
              <a href="#home">Listen here</a>
            </div>
          </div>

          <div>
            <div>
              <img src={person} alt="" />
              <p>Tony Banta</p>
              <p>Venture Greatly</p>
            </div>
            <div>
              <p>
                My business partner and I are very busy with the operations of
                our business, and marketing is always an afterthought. Working
                with the team at Trust Accelerator allows us to take a little
                time out each week and still keep the marketing flywheel going
                without consciously spending time on it.
              </p>
              <a href="#home">Listen here</a>
            </div>
          </div>
        </div>
      </div>

      <div className="line"></div>
    </div>
  );
};

export default Clients;
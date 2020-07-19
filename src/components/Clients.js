import React from "react";
import person from "../images/chalo.jpg";

const Clients = () => {
  return (
    <div className="container clients">
      <h1 className="current">CURRENT CLIENTS</h1>
      <div className="lined"></div>
      <div>
        <div className="first-client">
          <div className="first-person-img">
            <img className="person-img" src={person} alt="a person" />
          </div>
          <div className="first-text">
            <h3>
              "No one can simplify your message and convey it visually better
              than these guys."
            </h3>
          </div>
          <p className="first-name">Jim Fisher — Jucebox</p>
        </div>

        <div className="lined"></div>
        <div className="others">
          <div className="client-portion">
            <div className="second-client">
              <img className="person-img" src={person} alt="" />
              <div className="items">
                <p className="client-name">Janelle Lara</p>
                <p>The Part-Time CEO</p>
              </div>
            </div>
            <div className="chunk">
              <p>
                It's my main medium for sharing content. This medium where my
                ideal audience find me. Highly capable, highly intelligent
                people are not spending quite so much time on social media, but
                they are spending time growing and in personal development,
                which happens on podcasts.
              </p>
              <div>
                <a href="#home">Listen here</a>
              </div>
            </div>
          </div>
          <div className="client-portion">
            <div className="second-client">
              <img className="person-img" src={person} alt="" />
              <div className="items">
                <p className="client-name">Nick Peterson</p>
                <p>Mastery Mode</p>
              </div>
            </div>
            <div className="chunk">
              <p>
                It’s helping us reach more people, but also the right kind of
                people. You can’t get to that landing page unless you listen to
                30 minutes of us talk. So we’re reaching engaged and qualified
                people. We don’t like spending a ton of money to bring a ton of
                unqualified people into our ecosystem.
              </p>
              <div>
                <a href="#home">Listen here</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="last-line"></div>
    </div>
  );
};

export default Clients;

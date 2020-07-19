import React from "react";

const Footer = () => {
  return (
    <div className="container footer">
      <div className="first-chunk">
        <p className="dash">_</p>
        <ul>
          <li>
            <a href="#home">LinkedIn</a>
          </li>
          <li>
            <a href="#home">Facebook</a>
          </li>
          <li>
            <a href="#home">Instagram</a>
          </li>
        </ul>
      </div>

      <div className="second-chunk">
        <p className="dash">_</p>
        <p> &copy; 2019 The Trust Accelerator.</p>
        <p>All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;

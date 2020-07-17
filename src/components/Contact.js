import React from "react";

const Contact = () => {
  return (
    <div className="container contact">
      <div>
        <h2 className="how">Want to know how we do it?</h2>
        <p>Join our free list for guides, templates and insights.</p>
      </div>

      <div>
        <form className="form">
          <input className="email" type="text" placeholder="Email" />
          <button className="email join" type="submit">
            Join the List
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

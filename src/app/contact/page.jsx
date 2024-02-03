import React from "react";

const contact = () => {
  return (
    <div className="contact-form my-8">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <form>
        <input type="text" placeholder="Your Name" className="input" />
        <input type="email" placeholder="Your Email" className="input" />
        <textarea
          rows="4"
          placeholder="Your Message"
          className="input"
        ></textarea>
        <button type="submit" className="btn">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default contact;

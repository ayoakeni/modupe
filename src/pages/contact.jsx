import React from "react";
import img from "../assets/images/image2.png";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="img-text">
        <img src={img} />
      </div>

      <div className="details">
        <h2>CONTACT ME</h2>
        <span>Contact Information</span>
        <div className="text-name">
          <li>Name: <strong>Obamoh Modupe Rejoice</strong></li>
          <li>Email: <strong>modupeobamoh@gmail.com</strong></li>
          <li>Phone: <strong> 09163958534</strong></li>
        </div>
        <span>Social Media</span>
        <li className="social">LinkedIn: <strong><a href="https://www.linkedin.com/in/rejoice-obamoh-0384b4187/">https://www.linkedin.com/in/rejoice-obamoh-0384b4187/</a></strong></li>
      </div>
    </section>
  );
};

export default Contact;
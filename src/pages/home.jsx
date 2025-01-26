import React from "react";
import img from "../assets/images/image2.png";

const HomePage = () => {
  return (
    <section className="home">
      <div className="texthero">
        <h2>Welcome to My Artificial Intelligence Assignment Hub</h2>
        <p>This platform serves as a comprehensive hub for uploading and organizing my assignment documents for the Artificial Intelligence (AI) course. Each submission demonstrates my understanding and application of key AI concepts, including machine learning, neural networks, natural language processing, and robotics.
        The site is structured to streamline the management of my assignments while reflecting my academic progress and commitment to mastering AI principles and their real-world applications.</p>
      </div>

      <div className="info">
        <h2>A Short Introduction About Me</h2>
        <div className="img-text">
          <img src={img} />
          <span className="info-name">OBAMOH MODUPE REJOICE</span>
        </div>
      </div>
    </section>
  );
};

export default HomePage;

import React from "react";
import img from "../assets/images/image1.png"

const About = () => {

  return (
    <div className="about">
      <div className="img-text">
        <img src={img} />
      </div>

      <div className="details">
        <h2>ABOUT ME</h2>
        <div className="text-name">
          <li>Name: <strong>Obamoh Modupe Rejoice</strong></li>
          <li>Matriculation: <strong>F/HD/32/3210049</strong></li>
          <li>Department: <strong> Computer Science</strong></li>
          <li>School: <strong>School of Technology, Yaba College of Technology</strong></li>
        </div>
        <p>I am a driven and creative individual with a strong passion for technology and problem-solving. I possess diverse skills, including</p>
        <div className="text-prof">
          <li>UI/UX Designer</li>
          <li>QA Tester</li>
          <li>Realtor</li>
          <li>Frontend Developer</li>
        </div>
        <p>I enjoy exploring innovative ideas, collaborating on projects, and continuously improving my expertise in these fields. My ultimate goal is to contribute meaningfully to the tech and real estate industries while inspiring others to achieve their dreams.</p>
      </div>
    </div>
  );
};

export default About;

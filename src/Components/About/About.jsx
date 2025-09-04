import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import p_p from "../../assets/p_p.png";
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={p_p} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a Computer Science student and aspiring frontend developer
              with skills in HTML, CSS, JavaScript, and React. I focus on
              building responsive, visually appealing, and performance-driven
              websites. With clean code practices and a passion for learning, I
              aim to deliver seamless and engaging user experiences.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Next JS</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>6+</h1>
          <p>MONTHS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;

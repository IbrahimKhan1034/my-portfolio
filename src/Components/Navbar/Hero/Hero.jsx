import React from "react";
import "./Hero.css";
import profile_img from "../../../assets/profile_pic.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Muhammad Ibrahim,</span> frontend developer
      </h1>
      <p>
        A dedicated frontend developer with strong skills in HTML, CSS,
        JavaScript, and React, focused on building clean, responsive, and
        performance-driven web solutions.{" "}
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me{" "}
          </AnchorLink>
        </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;

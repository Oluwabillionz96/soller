import React from "react";
import { Quote } from "../Navbar/NavBar";
import computer from "../../assets/computer.png";
import "./section3.css";

const Section3 = () => {
  return (
    <section id="conclusion">
      <p className="colored">Get the Sun to power your home</p>
      <h2>All the power that you need for your house is now available</h2>
      <div className="abs">
        <Quote />
        <p>Egestas fringilla aliquam leo</p>
      </div>
      <img src={computer} alt="computer image" className="conclusion-img" />
      <div className="circles circle1 desktop"></div>
      <div className="circles circle2 "></div>
      <div className="circles circle3 desktop"></div>
    </section>
  );
};

export default Section3;

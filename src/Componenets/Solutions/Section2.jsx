import React from "react";
import { Quote } from "../Navbar/NavBar";
import "./section2.css";
import happyMan from "../../assets/happyMan.jpg";
import happyWoman from "../../assets/happyWoman.jpg";
import sunWoman from "../../assets/sunWoman.jpg";
const Section2 = () => {
  return (
    <section className="section2 flexs">
      <div className="absolution">
        <img
          src={happyMan}
          alt="portrait-smiling-young-man-looking-camera"
          className="happyMan"
        />

        <img
          src={happyWoman}
          alt="young-woman-working-laptop-with-win-gesture-posing-isolated-turquoise-wall"
          className="happyWoman"
        />

        <img
          src={sunWoman}
          alt="relax-woman-jumping-sea-beach"
          className="sunWoman"
        />
        <div className="balls ball1"></div>
        <div className="balls ball2"></div>
        <div className="balls ball3"></div>
        <div className="balls ball4"></div>
      </div>
      <div id="text">
        <p className="colored">Case studies</p>
        <h2 id="texx">Check how our systems have helped others</h2>
        <p className="detail">
          Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et.
          Auctor turpis semper id sit ornare maecenas lectus sed.
        </p>
        <Quote inside="Find Case Studies" />
      </div>
      <div className="big-ball desktop"></div>
    </section>
  );
};

export default Section2;

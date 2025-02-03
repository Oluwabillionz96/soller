import React from "react";
import { Quote } from "../Navbar/NavBar";

const Section2 = () => {
  return (
    <section className="section2">
      <div className="absolution"></div>
      <div className="text">
        <p className="colored">Case studies</p>
        <h2>Check how our systems have helped others</h2>
        <p className="details">
          Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et.
          Auctor turpis semper id sit ornare maecenas lectus sed.
        </p>
        <Quote inside="Find Case Studies" />
      </div>
    </section>
  );
};

export default Section2;

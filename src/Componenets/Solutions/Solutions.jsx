import { Quote } from "../Navbar/NavBar";
import cloud from "../../assets/cloud.svg";
import jane from "../../assets/jane.png";
import "./solution.css";
import { carousel } from "../carousel";
import { useState } from "react";
import Section2 from "./Section2";

const Card = ({ icon, details, testifierImage, name, kwh, main }) => {
  return (
    <div className="carousel-card" id={main ? "carousel-card-main" : "desktop"}>
      <img src={icon} alt="icon" />
      <p className="detail">{details}</p>
      <div className="testifier-profile flexs">
        <img src={testifierImage} alt="testifier" className="testifier-img" />
        <div className="info">
          <p className="name">{name}</p>
          <p className="kwh">{kwh}KWH</p>
        </div>
      </div>
    </div>
  );
};

const Solutions = () => {
  const [next, setNext] = useState(0);
  const canDisable = next === 0;
  console.log(canDisable);
  return (
    <section id="solution">
      <section className="testimony-carousel">
        <p className="colored">Join other Sun harvesters</p>
        <h2>Make something awesome</h2>
        <p className="details">
          Dui euismod iaculis libero, aliquet vitae et elementum porttitor.
          Eleifend mi tristique condimentum congue fusce nunc, donec magnis
          commodo.
        </p>
        <Quote />
        <div className="caurosel-container flexs">
          <Card
            icon={carousel[next % carousel.length].icon}
            testifierImage={carousel[next % carousel.length].image}
            details={carousel[next % carousel.length].details}
            name={carousel[next % carousel.length].name}
            kwh={carousel[next % carousel.length].kwh}
            main
          />
          <Card
            icon={carousel[(next + 1) % carousel.length].icon}
            testifierImage={carousel[(next + 1) % carousel.length].image}
            details={carousel[(next + 1) % carousel.length].details}
            name={carousel[(next + 1) % carousel.length].name}
            kwh={carousel[(next + 1) % carousel.length].kwh}
          />
          <Card
            icon={carousel[(next + 2) % carousel.length].icon}
            testifierImage={carousel[(next + 2) % carousel.length].image}
            details={carousel[(next + 2) % carousel.length].details}
            name={carousel[(next + 2) % carousel.length].name}
            kwh={carousel[(next + 2) % carousel.length].kwh}
          />
          <Card
            icon={carousel[(next + 3) % carousel.length].icon}
            testifierImage={carousel[(next + 3) % carousel.length].image}
            details={carousel[(next + 3) % carousel.length].details}
            name={carousel[(next + 3) % carousel.length].name}
            kwh={carousel[(next + 3) % carousel.length].kwh}
          />
        </div>
        <div className="movements flexs">
          <button
            className="move"
            onClick={() => setNext((n) => n - 1)}
            disabled={canDisable}
          >
            <i className="fa fa-arrow-left" aria-hidden="true"></i>
          </button>
          <button className="move" onClick={() => setNext((n) => n + 1)}>
            <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </button>
          <div className="pattern-circle"></div>
          <div className="pattern-ellipse"></div>
        </div>
      </section>
      {/* <Section2 /> */}
      <section></section>
    </section>
  );
};

export default Solutions;

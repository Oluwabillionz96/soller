import Quote from "../Quote/Quote";
import testifier from "../../assets/testifier.jpg";
import "./hero.css";
import contractor from "../../assets/solar-man.png";
import pattern from "../../assets/pattern.svg";

const Hero = () => {
  return (
    <section className="hero-section flexs">
      <div>
        <h1>Get the Sun to Power Your Home</h1>
        <p className="details">
          Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra
          orci dui consequat turpis scelerisque.
        </p>
        <Quote />
        <div className="testimonial">
          <p className="testimony">
            “Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra
            orci dui consequat turpis scelerisque faucibus.”
          </p>
          <div className="testifiers-profile flexs">
            <img src={testifier} alt="testifiers image" className="testifier" />
            <div className="testifiers-info">
              <p className="name">Rwanda Melflor</p>
              <p className="website">Zerowaste.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <div class="custom-shape flexs">
          <img src={contractor} alt="a solar panel contractor image working." />
        </div>
        <div className="floats orange"></div>
        <img src={pattern} alt="design pattern" className="floats curve"/>
      </div>
    </section>
  );
};

export default Hero;

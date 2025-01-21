import Quote from "../Quote/Quote";
import testifier from "../../assets/testifier.jpg";
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <div>
        <h1>Get the Sun to Power Your Home</h1>
        <p className="details">
          Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra
          orci dui consequat turpis scelerisque.
        </p>
        <Quote disappear="stay" />
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
      <div className="flexs">
      </div>
    </section>
  );
};

export default Hero;

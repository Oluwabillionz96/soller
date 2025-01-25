import { Quote } from "../Navbar/NavBar";
import "./hero.css";
import testifier from "../../assets/testifier.jpg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="flexs details-section-container">
        <div className="details-section">
          <h1>Get the Sun to Power Your Home</h1>
          <p className="details">
            Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra
            orci dui consequat turpis scelerisque.
          </p>
          <Quote />
          <div className="testimonial">
            <p className="testimony">
              “Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus
              viverra orci dui consequat turpis scelerisque faucibus.”
            </p>
            <div className="testifier-profile flexs">
              <img
                src={testifier}
                alt="Testifier's image"
                className="testifiers-image"
              />
              <div className="testifier-info">
                <p className="name">Rwanda Melflor</p>
                <p className="website">
                  <a href="#">zerowaste.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="details-section">
          <div className="custom-shape desktop"></div>
          <div className="custom-shape2 mobile"></div>
          <div className="orange-circle"></div>
          <div className="purple-circle"></div>
          <div className="curve desktop"></div>
          <div className="curve2 mobile"></div>
          <div className="skyBlue-circle"></div>
          <div className="invisible"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

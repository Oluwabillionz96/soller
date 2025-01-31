import { Description, Image } from "../Description/Description";
import services from "../../assets/services.png";
import { item } from "../Item";
import "./services.css";

const Services = () => {
  return (
    <section className="flexs" id="services">
      <div className="img-container">
        <Image src={services} />
        <div className="pattern"></div>
      </div>
      <div>
        <Description
          coloredText={"Services"}
          heading={"Personalized services"}
          items={item}
        />
      </div>
    </section>
  );
};

export default Services;

import services from "../../assets/services.png";
import "./services.css";
import truck from "../../assets/truck.svg";
import throphy from "../../assets/throphy.svg";
import man from "../../assets/man.svg";
import piggyBank from "../../assets/piggy-bank.svg";

const Service = ({ src, heading, details }) => {
  return (
    <div className="service">
      <img src={src} alt={`${src} icon`} />
      <div className="text">
        <h3>{heading}</h3>
        <p className="details">{details}</p>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section className="services flexs">
      <div className="pattern"></div>
      <div className="image flexs">
        <img className="services-img" src={services} alt="services image" />
      </div>
      <div className="text main-text">
        <p className="colored" id="services">
          Services
        </p>
        <h2>Personalized services</h2>
        <p className="details">
          Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et.
          Auctor turpis semper id sit ornare maecenas lectus sed.
        </p>
        <div className="services-container">
          <Service
            src={truck}
            heading="Et mauris"
            details="Posuere quis sed mauris non curabitur pretium elementum eget. Feugiat sed maecenas eu accumsan tristique."
          />
          <Service
            src={throphy}
            heading="Eget sit"
            details="Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. ."
          />
          <Service
            src={man}
            heading="Imperdiet pellentesque"
            details="Platea arcu dapibus non magna cursus lectus id sollicitudin. Enim viverra parturient tristique nulla."
          />
          <Service
            src={piggyBank}
            heading="Non libero"
            details="Congue mauris sem vel, urna viverra. Urna, nibh leo suscipit purus ut sed eros, consectetur viverra."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;

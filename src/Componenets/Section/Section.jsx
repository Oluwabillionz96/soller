import "./section.css";
import services from "../../assets/services.png";
import solution from "../../assets/solution.png";
import truck from "../../assets/truck.svg";
import throphy from "../../assets/throphy.svg";
import man from "../../assets/man.svg";
import piggybank from "../../assets/piggy-bank.svg";
import connect from "../../assets/connect.svg";
import thumb from "../../assets/thumb.svg";
import install from "../../assets/install.svg";
import panel from "../../assets/panel.svg";
import { useState } from "react";
import { useEffect } from "react";

const first = {
  icon: [truck, throphy, man, piggybank],
  h3s: ["Et mauris", "Eget sit", "Imperdiet pellentesque", "Non libero"],
  desc: [
    "Posuere quis sed mauris non curabitur pretium elementum eget. Feugiat sed maecenas eu accumsan tristique.",
    "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. ",
    "Platea arcu dapibus non magna cursus lectus id sollicitudin. Enim viverra parturient tristique nulla.",
    "Congue mauris sem vel, urna viverra. Urna, nibh leo suscipit purus ut sed eros, consectetur viverra.",
  ],
};

const next = {
  icon: [connect, thumb, install, panel],
  h3s: ["Erat sit", "Ullamcorper arcu", "Et pellentesque", "Amet egestas"],
  desc: [
    "Id quis lectus pharetra, ultricies integer montes, amet, gravida consectetur. Nunc convallis fringilla nisl magna sagittis.",
    "Ipsum at id hendrerit amet faucibus commodo quam nullam. Lectus auctor habitant duis dictum.",
    "Mi vitae, massa eu molestie massa euismod volutpat condimentum. Blandit molestie ullamcorper hendrerit purus lorem vulputate.",
    "Elementum, libero, lacus, vel ullamcorper at velit id. Malesuada velit et, ullamcorper malesuada amet, felis.",
  ],
};

const ResponsivePattern = () => {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width:1024px)").match
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:1024px)");
    const handleChange = () => setIsMobile(mediaQuery.match);

    handleChange();

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <div
      className="pattern"
      style={{
        width: 100,
        height: 100,
        backgroundColor: isMobile ? "red" : "blue",
      }}
    ></div>
  );
};

const Item = ({ icon, heading, desc }) => {
  return (
    <div>
      <img src={icon} alt={heading + "icon"} />
      <div className="descs">
        <h3>{heading}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};
export function Image({ mainSrc }) {
  return (
    <div className="img">
      <img src={mainSrc} alt="image" width={300} />
      <ResponsivePattern />
    </div>
  );
}

export function Description({ coloredText, heading, box }) {
  return (
    <div className="desc">
      <p className="colored">{coloredText}</p>
      <h2>{heading}</h2>
      <p className="section-desc">
        Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et.
        Auctor turpis semper id sit ornare maecenas lectus sed.
      </p>
      <div className="desc-container">
        <div className="flexs">
          <Item icon={box.icon[0]} heading={box.h3s[0]} desc={box.desc[0]} />
          <Item icon={box.icon[1]} heading={box.h3s[1]} desc={box.desc[1]} />
        </div>
        <div className="flexs">
          <Item icon={box.icon[2]} heading={box.h3s[2]} desc={box.desc[2]} />
          <Item icon={box.icon[3]} heading={box.h3s[3]} desc={box.desc[3]} />
        </div>
      </div>
    </div>
  );
}

export const First = () => {
  return (
    <>
      <Image mainSrc={services} />
      <Description
        coloredText="Services"
        heading="Personalized services"
        box={first}
      />
    </>
  );
};
export const Second = () => {
  return (
    <>
      <Description
        coloredText="System features"
        heading="Powerful features"
        box={next}
      />
      <Image mainSrc={solution} />
    </>
  );
};

const Section = ({ reverse, child1, child2 }) => {
  return <section className="flexs">{reverse ? child1 : child2}</section>;
};

export default Section;

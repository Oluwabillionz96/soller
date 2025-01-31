import "./description.css";

const Item = ({ icon, heading, desc }) => {
  return (
    <div className="item">
      <img src={icon} alt={heading + "icon"} />
      <h3>{heading}</h3>
      <p className="desc">{desc}</p>
    </div>
  );
};

export const Description = ({ coloredText, heading, items }) => {
  return (
    <>
      <p className="colored sect">{coloredText}</p>
      <h2 className="sect">{heading}</h2>
      <p className="brief-description">
        Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et.
        Auctor turpis semper id sit ornare maecenas lectus sed.
      </p>
      <div className="description-container flexs col">
        <div className="flexs">
          <Item
            icon={items.icon[0]}
            heading={items.heading[0]}
            desc={items.desc[0]}
          />
          <Item
            icon={items.icon[1]}
            heading={items.heading[1]}
            desc={items.desc[1]}
          />
        </div>
        <div className="flexs">
          <Item
            icon={items.icon[2]}
            heading={items.heading[2]}
            desc={items.desc[2]}
          />
          <Item
            icon={items.icon[3]}
            heading={items.heading[3]}
            desc={items.desc[3]}
          />
        </div>
      </div>
    </>
  );
};

export const Image = ({ src }) => {
  return (
    <div className="img">
      <img src={src} alt="a random image" />
    </div>
  );
};

import "./sect.css";

const Desc = ({ src, heading, details }) => {
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

const Sect = ({
  img1,
  img2,
  img3,
  img4,
  direction,
  path,
  color,
  left,
  right,
  id,
  coloredText,
  headers,
  heading1,
  heading2,
  heading3,
  heading4,
    mainImg,
  textPadding
}) => {
  return (
    <section className="sect flexs" style={{ flexDirection: direction }}>
      <div
        className="pattern"
        style={{
          clipPath: path,
          backgroundColor: color,
          left: left,
          right: right,
        }}
      ></div>
      <div className="image flexs">
        <img className="sect-img" src={mainImg} alt="services image" />
      </div>
      <div className="text main-text" style={{padding:textPadding}}>
        <p className="colored" id={id}>
          {coloredText}
        </p>
        <h2>{headers}</h2>
        <p className="details">
          Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et.
          Auctor turpis semper id sit ornare maecenas lectus sed.
        </p>
        <div className="sect-container">
          <Desc
            src={img1}
            heading={heading1}
            details="Posuere quis sed mauris non curabitur pretium elementum eget. Feugiat sed maecenas eu accumsan tristique."
          />
          <Desc
            src={img2}
            heading={heading2}
            details="Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. ."
          />
          <Desc
            src={img3}
            heading={heading3}
            details="Platea arcu dapibus non magna cursus lectus id sollicitudin. Enim viverra parturient tristique nulla."
          />
          <Desc
            src={img4}
            heading={heading4}
            details="Congue mauris sem vel, urna viverra. Urna, nibh leo suscipit purus ut sed eros, consectetur viverra."
          />
        </div>
      </div>
    </section>
  );
};

export default Sect;

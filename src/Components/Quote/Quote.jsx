import "./quote.css";

const Quote = ({ disappear, desktop = disappear || "desktop" }) => {
  return (
    <button className={`flexs quote ${desktop}`}>
      <p>Request a quote</p>
      <i className="fa fa-arrow-right" aria-hidden="true"></i>
    </button>
  );
};

export default Quote;

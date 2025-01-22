import "./quote.css";

const Quote = ({ disappear}) => {
  return (
    <button className={`${disappear && 'desktop'} quote flexs`}>
      <p>Request a quote</p>
      <i className="fa fa-arrow-right" aria-hidden="true"></i>
    </button>
  );
};

export default Quote;

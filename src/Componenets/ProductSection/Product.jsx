import "./product.css";
import dashBoard from "../../assets/dashboard.png";

const Product = () => {
  return (
    <section className="product" id="products">
      <div className="background">
        <div className="insider"></div>
      </div>
      <div className="background">
        <div className="insider"></div>
      </div>
      <div className="text">
        <p className="colored">No more waste</p>
        <h2>Pick the Sun</h2>
        <p className="details">
          Et pulvinar nec interdum integer id urna molestie porta nullam. A,
          donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor
          pharetra sed in mauris elementum sollicitudin.
        </p>
      </div>
      <img src={dashBoard} alt="analytics dashboard" className="dashboard" />
    </section>
  );
};

export default Product;

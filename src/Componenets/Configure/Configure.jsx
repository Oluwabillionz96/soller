import { Description } from "../Description/Description";
import { itemB } from "../Item";
import configure from "../../assets/configure.png";
import { Image } from "../Description/Description";
import "../ServicesSection/services.css";
const Configure = () => {
  return (
    <section className="flexs" id="configure">
      <div>
        <Description
          coloredText={"System features"}
          heading={"Powerful features"}
          items={itemB}
        />
      </div>
      <div>
        <Image src={configure} />
      </div>
    </section>
  );
};

export default Configure;

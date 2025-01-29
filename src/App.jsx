import Hero from "./Componenets/HeroSection/Hero";
import NavBar from "./Componenets/Navbar/NavBar";
import Product from "./Componenets/ProductSection/Product";
import Sect from "./Componenets/SectionComponent/Sect";
import Services from "./Componenets/ServicesSection/Services";
import truck from "./assets/truck.svg";
import throphy from "./assets/throphy.svg";
import man from "./assets/man.svg";
import piggyBank from "./assets/piggy-bank.svg";
import Connect from "./assets/connect.svg";
import thumb from "./assets/thumb.svg";
import install from "./assets/install.svg";
import panel from "./assets/panel.svg";
import services from "./assets/services.png";
import solution from "./assets/solution.png";

const path1 =
  "path('M26.4102 946.477C-164.907 1056.93 -409.543 991.384 -520 800.067C-630.457 608.75 -564.907 364.114 -373.59 253.657L-27.1796 53.6566C164.137 -56.8003 408.774 8.74977 519.231 200.067C629.688 391.384 564.137 636.02 372.82 746.477L26.4102 946.477Z')";

const path2 =
  "path('M546.82 53.6569C738.137 -56.8001 982.774 8.75002 1093.23 200.067C1203.69 391.384 1138.14 636.02 946.82 746.477L600.41 946.477C409.093 1056.93 164.457 991.384 53.9999 800.067C-56.4571 608.75 9.09303 364.114 200.41 253.657L546.82 53.6569Z')";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Product />
      {/* <Services /> */}
      <Sect
        img1={truck}
        img2={throphy}
        img3={man}
        img4={piggyBank}
        path={path1}
        color="#581C87"
        left={0}
        id="services"
        coloredText="Services"
        headers="Personalized services"
        heading1="Et mauris"
        heading2="Eget sit"
        heading3="Imperdiet pellentesque"
        heading4="Non libero"
        mainImg={services}
        textPadding=" 150px 0 0"
      />
      <Sect
        img1={Connect}
        img2={thumb}
        img3={install}
        img4={panel}
        direction="row-reverse"
        path={path2}
        color="#FBBF24"
        right={0}
        id="Solutions"
        coloredText="System features"
        headers="Powerful features"
        heading1="Erat sit"
        heading2="Ullamcorper arcu"
        heading3="Et pellentesque"
        heading4="Amet egestas"
        mainImg={solution}
      />
    </>
  );
};

export default App;

import Hero from "./Componenets/HeroSection/Hero";
import NavBar from "./Componenets/Navbar/NavBar";
import Product from "./Componenets/ProductSection/Product";
// import Sect from "./Componenets/SectionComponent/Sect";
// import Services from "./Componenets/ServicesSection/Services";
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
import Section, { First, Second } from "./Componenets/Section/Section";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Product />
      <Section child2={<First />} child1={<Second />} />
      <Section child2={<First />} child1={<Second />} reverse={true} />
    </>
  );
};

export default App;

import Hero from "./Componenets/HeroSection/Hero";
import NavBar from "./Componenets/Navbar/NavBar";
import Product from "./Componenets/ProductSection/Product";
import Services from "./Componenets/ServicesSection/Services";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Product />
      <Services />
    </>
  );
};

export default App;

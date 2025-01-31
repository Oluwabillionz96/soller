import Configure from "./Componenets/Configure/Configure";
import Hero from "./Componenets/HeroSection/Hero";
import NavBar from "./Componenets/Navbar/NavBar";
import Product from "./Componenets/ProductSection/Product";
import Services from "./Componenets/ServicesSection/Services";
import Solutions from "./Componenets/Solutions/Solutions";
const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Product />
      <Services />
      <Configure />
      <Solutions />
    </>
  );
};

export default App;

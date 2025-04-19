import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Overview from "./components/Overview";
import Quotes from "./components/Quotes";
import SellingPoints from "./components/SellingPoints";
import Products from "./components/Products";
import AboutAuthor from "./components/AboutAuthor";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Overview />
      <Quotes />
      <SellingPoints />
      <Products />
      <AboutAuthor />
      <Footer />
    </>
  );
}

export default App;

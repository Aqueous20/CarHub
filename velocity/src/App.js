import React from "react";
//Components imported
import Header from "./components/Header.js";
import Hero from "./components/Hero.js";
import About from "./components/About.js";
import Cars from "./components/Cars.js";
import Why from "./components/Why.js";
import Testimonials from "./components/Testimonials.js";
import Cta from "./components/Cta.js";
import Footer from "./components/Footer.js";
import BackToTopBtn from "./components/BackToTopBtn.js";

function App() {
  return (
    <div className="max-w-[1928px] bg-white mx-auto relative overflow-hidden">
      <Header></Header>
      <Hero></Hero>
      <Cars></Cars>
      <About></About>
      <Why></Why>
      <Testimonials></Testimonials>
      <Cta></Cta>
      <Footer></Footer>
      <BackToTopBtn></BackToTopBtn>

      <div className="h-[4000px]"></div>
    </div>
  );
}

export default App;

import "./App.css";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfoilio";
import TechStack from "./components/TechStack";
import { Element } from "react-scroll";

function App() {
  return (
    <>
      <NavBar />
      <Element name="home">
        <HeroSection />
      </Element>
      <Element name="techstack">
        <TechStack />
      </Element>
      <Element name="about">
        <AboutMe />
      </Element>
      <Element name="projects">
        <Portfolio />
      </Element>
      <Element name="contact">
        <ContactMe />
      </Element>
      <Element name="footer">
        <Footer />
      </Element>
    </>
  );
}

export default App;

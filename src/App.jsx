import "./App.css";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfoilio";
import TechStack from "./components/TechStack";

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <TechStack />
      <AboutMe />
      <Portfolio />
      <ContactMe />
      <Footer />
    </>
  );
}

export default App;

import "./App.css";
import AboutMe from "./components/AboutMe";
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
    </>
  );
}

export default App;

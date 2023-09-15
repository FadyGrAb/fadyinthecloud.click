import "./App.css";
import Nav from "./components/Nav";
import Sections from "./components/Sections";
import "./styles/Variables.css";
import AboutMe from "./content/AboutMe";
import Journey from "./content/Journey";
import LetsConnect from "./content/LetsConnect";
import Intro from "./content/Intro";

function App() {
  const sectionNames = [
    {
      name: "",
      class: "intro",
      content: <Intro></Intro>,
    },
    {
      name: "About Me",
      class: "about-me",
      content: <AboutMe></AboutMe>,
    },
    {
      name: "Journey",
      class: "journey",
      content: <Journey></Journey>,
    },
    {
      name: "let's connect",
      class: "lets-connect",
      content: <LetsConnect></LetsConnect>,
    },
  ];

  return (
    <div className="container">
      <Nav sections={sectionNames}></Nav>
      <Sections sections={sectionNames}></Sections>
    </div>
  );
}

export default App;

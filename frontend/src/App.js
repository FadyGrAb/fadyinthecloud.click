import "./App.css";
import Nav from "./components/Nav";
import Sections from "./components/Section";
import "./styles/Variables.css";

function App() {
  const sectionNames = [
    {
      name: "About Me",
      class: "about-me",
    },
    {
      name: "Journey",
      class: "journey",
    },
    {
      name: "let's connect",
      class: "lets-connect",
    },
  ];

  return (
    <div>
      <Nav sections={sectionNames}></Nav>
      <Sections sections={sectionNames}></Sections>
    </div>
  );
}

export default App;

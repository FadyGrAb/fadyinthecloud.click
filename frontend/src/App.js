import "./App.css";
import Nav from "./components/Nav";
import Sections from "./components/Sections";
import "./styles/Variables.css";

function App() {
  return (
    <div className="master-container">
      <Nav></Nav>
      <Sections></Sections>
    </div>
  );
}

export default App;

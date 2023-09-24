import "../styles/Sections.css";
import Intro from "../content/Intro";
import AboutMe from "../content/AboutMe";
import Journey from "../content/Journey";
import LetsConnect from "../content/LetsConnect";

const Sections = (props) => {
  return (
    <div className="sections-container">
      <div id="intro" className="intro section">
        <Intro></Intro>
      </div>
      <div id="about-me" className="about-me section">
        <AboutMe></AboutMe>
      </div>
      <div id="journey" className="journey section">
        <Journey></Journey>
      </div>
      <div id="lets-connect" className="lets-connect section">
        <LetsConnect></LetsConnect>
      </div>
    </div>
  );
};

export default Sections;

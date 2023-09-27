import "../styles/Nav.css";
import resume from "../files/FadyAbdelmassih-resume.pdf";

const Nav = (props) => {
  return (
    <nav id="nav-bar">
      <a className="nav-item nav-brand" href="#intro">
        {/* <span style={{ color: "red" }}>Y</span>et
        <span style={{ color: "blue" }}>&nbsp;A</span>nother
        <span style={{ color: "orange" }}>&nbsp;D</span>ata
        <span style={{ color: "green" }}>&nbsp;G</span>uy */}
        <span style={{ color: "orange" }}>Fady&nbsp;Abdelmassih</span>
      </a>
      <a className="nav-item nav-a" href="#about-me">
        My Story
      </a>
      <a className="nav-item nav-a" href="#journey">
        My Journey
      </a>
      <a className="nav-item nav-a" href="#lets-connect">
        Let's Connect
      </a>
      <a
        className="nav-item nav-a nav-download-link"
        href={resume}
        download="fadyAbdelmassih-resume.pdf"
        target="_blank"
        rel="noreferrer"
      >
        Download My resume
      </a>
      <a
        className="nav-item nav-a nav-direct-link"
        href="https://fadyinthecloud.click/data-analytics-made-easy"
      >
        Data Analytics Made Easy Series!
      </a>
    </nav>
  );
};

export default Nav;

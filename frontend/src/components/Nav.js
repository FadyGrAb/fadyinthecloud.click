import "../styles/Nav.css";

const Nav = (props) => {
  return (
    <nav id="nav-bar">
      <a className="nav-item nav-brand" href="#intro">
        <span style={{ color: "red" }}>Y</span>et
        <span style={{ color: "blue" }}>&nbsp;A</span>nother
        <span style={{ color: "orange" }}>&nbsp;D</span>ata
        <span style={{ color: "green" }}>&nbsp;G</span>uy
      </a>
      <a className="nav-item nav-a" href="#about-me">
        About Me
      </a>
      <a className="nav-item nav-a" href="#journey">
        Journey
      </a>
      <a className="nav-item nav-a" href="#lets-connect">
        Let's Connect
      </a>
      <a className="nav-item nav-a" href="../files/FadyAbdelmassih-resume.pdf">
        Download My resume
      </a>
      <a
        className="nav-item nav-a nav-direct-link"
        href="https://fadyinthecloud.click/data-analytics-made-easy"
        download="fadyAbdelmassih-resume"
        target="_blank"
        rel="noreferrer"
      >
        Data Analytics Made Easy Series!
      </a>
    </nav>
  );
};

export default Nav;

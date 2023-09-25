import linkedinLogo from "../images/Linkedin-Icon.png";
import githubLogo from "../images/github-logo.png";
import devLogo from "../images/dev-logo.png";
import youTubeLogo from "../images/youtube-icon.png";
import xLogo from "../images/x-logo.png";

const LetsConnect = () => {
  return (
    <div className="subsection">
      <h2>LetsConnect</h2>
      <div className="content" target="_blank">
        <a
          href="https://www.linkedin.com/in/fady-abdelmassih/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn <img src={linkedinLogo} alt="LinkedIn"></img>
        </a>
        <a href="https://github.com/FadyGrAb" target="_blank" rel="noreferrer">
          Github <img src={githubLogo} alt="GitHub"></img>
        </a>
        <a href="https://dev.to/fadygrab" target="_blank" rel="noreferrer">
          Dev.to <img src={devLogo} alt="dev"></img>
        </a>
        <a
          href="https://www.youtube.com/@YetAnotherDataGuy"
          target="_blank"
          rel="noreferrer"
        >
          YouTube <img src={youTubeLogo} alt="YouTube"></img>
        </a>
        <a href="https://twitter.com/fadyGrAb" target="_blank" rel="noreferrer">
          X (Twitter) <img src={xLogo} alt="twitter"></img>
        </a>
      </div>
    </div>
  );
};

export default LetsConnect;

import linkedinLogo from "../images/Linkedin-Icon.png";
import githubLogo from "../images/github-logo.png";
import devLogo from "../images/dev-logo.png";
import youTubeLogo from "../images/youtube-icon.png";
import xLogo from "../images/x-logo.png";
import emailLogo from "../images/email-logo.png";

const LetsConnect = () => {
  return (
    <div className="subsection">
      <h2>Let's Connect</h2>
      <p className="section-intro">
        I hope by now you got to know me a little more better. Now let's connect
        in person by any of the following means.<br></br> Just a little note
        about the YouTube channel, I intend to use it to publish videos for my
        "Data Analytics Made Simpler Series" which I'll create one at a time.
        So, you might find it empty or doesn't contain much right now. Don't
        worry I'll fill it with videos pretty soon! 😉
      </p>
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
        <a
          href="mailto:fady.m.louis@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          Email <img src={emailLogo} alt="gmail"></img>
        </a>
      </div>
    </div>
  );
};

export default LetsConnect;

import aluLogo from "../images/Alcatel-Lucent-Logo.png";
import nokiaLogo from "../images/Nokia-Logo.png";
import awsda from "../images/aws-certified-data-analytics-specialty.png";
import devHackathon from "../images/dev-hackathon.webp";
import redSquadBadge from "../images/redsquad.png";
import pythonBadge from "../images/python-for-data-science.png";
import journeyContinues from "../images/journey.png";

const Journey = () => {
  return (
    <div className="subsection">
      <h2>My Journey</h2>
      <div className="content">
        <p className="section-intro">
          I started my career right after graduation from the Electronics and
          Telecommunications Department, Faculty of Engineering, Alexandria
          University in Egypt. I'll list here my
          <i>
            <strong> "Major career milestones" </strong>
          </i>
          that impacted me the most and helped forging me as who I'm now.
        </p>

        <div className="journey-stage">
          <div className="journey-image-container">
            <img alt="ALU" src={aluLogo}></img>
            <div className="journey-separator"></div>
          </div>
          <p>
            I started my career at Alcatel-Lucent (before it was acquired by
            Nokia). It was there where I first learned about business. I held
            several positions while I was there, I started off by being a
            <i> Project Control Engineer</i>. I was responsible of creating and
            maintaining the project schedule after gathering the updates from
            the stakeholders, recording the project progress in regards of
            services and consumed materials, and lastly, customer invoicing and
            reporting.
          </p>
        </div>

        <div className="journey-stage">
          <div className="journey-image-container">
            <img alt="Nokia" src={nokiaLogo}></img>
            <div className="journey-separator"></div>
          </div>
          <p>Nokia MS</p>
        </div>

        <div className="journey-stage">
          <div className="journey-image-container">
            <img alt="python" src={pythonBadge}></img>
            <div className="journey-separator"></div>
          </div>
          <p>python</p>
        </div>

        <div className="journey-stage">
          <div className="journey-image-container">
            <img alt="DAS" src={awsda}></img>
            <div className="journey-separator"></div>
          </div>
          <p>DAS</p>
        </div>

        <div className="journey-stage">
          <div className="journey-image-container">
            <img alt="dev hackathon" src={devHackathon}></img>
            <div className="journey-separator"></div>
          </div>
          <p>
            <a
              href="https://dev.to/devteam/github-dev-2023-hackathon-winners-announced-236o"
              target="_blank"
              rel="noreferrer"
            >
              winners
            </a>
          </p>
        </div>

        <div className="journey-stage">
          <div className="journey-image-container">
            <img alt="red squad" src={redSquadBadge}></img>
            <div className="journey-separator"></div>
          </div>
          <p>
            <a
              href="https://app.exampro.co/student/achievements/validate/certificate/FtYpdC9i-v84eOhU-b_zFA41f0"
              rel="noreferrer"
              target="_blank"
            >
              red squad
            </a>
          </p>
        </div>

        <div className="journey-stage">
          <div className="journey-image-container">
            <img alt="journey continues" src={journeyContinues}></img>
          </div>
          <p>Journey Continues</p>
        </div>
      </div>
    </div>
  );
};

export default Journey;

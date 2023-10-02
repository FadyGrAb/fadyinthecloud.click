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
          <div className="text">
            <p>
              I started my career at Alcatel-Lucent (before it was acquired by
              Nokia). It was there where I first learned about business. I held
              several positions while I was there, I started off by being a
              <i> Project Control Engineer</i>. I was responsible of creating
              and maintaining the project schedule after gathering the updates
              from the stakeholders, recording the project progress in regards
              of services and consumed materials, and lastly, customer invoicing
              and reporting.
            </p>
            <p>
              Then I transitioned into optical fiber links testing and
              commissioning where I helped commissioning a 300+ Km optical fiber
              ring for the mobile operator Etisalat Misr in Egypt.
            </p>
          </div>
        </div>

        <div className="journey-stage">
          <div className="journey-image-container">
            <img alt="Nokia" src={nokiaLogo}></img>
            <div className="journey-separator"></div>
          </div>
          <div className="text">
            <p>
              After Nokia's acquisition of Alcatel-Lucent, I moved from project
              rollout to managed services as a Field Maintenance manager for the
              optical fiber ring I commissioned. And after holding this position
              for around six years, I decided that I need a new challenge.
            </p>
            <p>
              I decided to leave the fiber optics line of work and try working
              in the mobile networks domain. It was rough at first as it's a
              totally different technology that I need to learn about but
              eventually I figured it out and started my position as Field
              Maintenance Area Manager which one of my current roles right now.
            </p>
          </div>
        </div>

        <div className="journey-stage">
          <div className="journey-image-container">
            <img alt="python" src={pythonBadge}></img>
            <div className="journey-separator"></div>
          </div>

          <div className="text">
            <p>
              After a while in the mobile field, I noticed that a lot of the
              operational data that we get is just sitting there waiting to be
              analyzed by the right person. So, I decided to be that person!
            </p>
            <p>
              My first step was to learn Python and I did that around 2018.
              Since then, I went on a learning journey to become a better "data
              guy". I successfully completed a Udacity Advanced Data Analytics
              nano degree and completed several Coursera specializations in
              Machine Learning and Deep Learning.
            </p>
            <p>
              Later, after acquiring some experience in the domain and honing my
              data analytics and coding skills, I became the data "go-to-guy" in
              the Maintenance Project 🤓!
            </p>
          </div>
        </div>

        <div className="journey-stage">
          <div className="journey-image-container">
            <img alt="DAS" src={awsda}></img>
            <div className="journey-separator"></div>
          </div>
          <div className="text">
            <p>
              Up until now, my data analytics skills and scope didn't exceed the
              perimeter of my machine. So, I decided to go to the next level,
              THE CLOUD!
            </p>
            <p>
              In late 2021, I was engaged in a program sponsored by the Egyptian
              Ministry of Communications and Information Technology to learn and
              take a shot at AWS's "Data Analytics Specialty" certificate. The
              program was executed by AWS where we had training sessions held by
              AWS trainers to teach us about the wide spectrum of Data Analytics
              and Data Engineering services on AWS. This was my first time ever
              to work on the cloud.
            </p>
            <p>
              In mid 2022, I managed to clear the AWS Certified Data Analytics
              Specialty cert! Since then I went full throttle to learn about the
              Cloud and Data Engineering on the Cloud. Later, I obtained several
              cloud certs for AWS and Azure. (check out my{" "}
              <a
                href="https://www.credly.com/users/fady-louis/badges"
                rel="noreferrer"
                target="_blank"
              >
                Credly profile
              </a>
              )
            </p>
          </div>
        </div>

        <div className="journey-stage">
          <div className="journey-image-container">
            <img alt="dev hackathon" src={devHackathon}></img>
            <div className="journey-separator"></div>
          </div>
          <div className="text">
            <p>
              In mid 2023, I decided to test my building skills! I saw a
              Hackathon announcement on Dev.to in collaboration with GitHub to
              build a project that uses GitHub Actions.
            </p>
            <p>
              I submitted my "Fruitify Me" project (
              <a
                href="https://github.com/FadyGrAb/fruit-origins"
                rel="noreferrer"
                target="_blank"
              >
                check out its repo
              </a>
              ) which is a deep learning model hosted in AWS and served by AWS
              Lambda. It asks the user to upload their photo and the app will
              give them their fruits resemblance. I used Github Actions to
              deploy the static website to AWS and to test the deep learning
              model and deploy it to Amazon Elastic Container Registry then
              update a container Lambda with the new container. The model was
              written in Tensorflow.js.
            </p>
            <p>
              And I was among the runner ups of the hackathon and you can read
              all about it in{" "}
              <a
                href="https://dev.to/devteam/github-dev-2023-hackathon-winners-announced-236o"
                target="_blank"
                rel="noreferrer"
              >
                here
              </a>
              !
            </p>
          </div>
        </div>

        <div className="journey-stage">
          <div className="journey-image-container">
            <img alt="red squad" src={redSquadBadge}></img>
          </div>
          <div className="text">
            <p>
              Also in early 2023, I participated in Exampro's Andrew Brown "AWS
              Cloud Project Bootcamp" that lasted from February till June. It
              was announced that 10K students enrolled to the bootcamp. We were
              building an "ephemeral" Twitter clone on AWS.
            </p>
            <p>
              I learned a LOT during this bootcamp! It was very tough and topics
              dense. The most valuable thing I learned during the bootcamp is
              that you can thrive while helping others! I really enjoyed helping
              other bootcampers with their problems in the dedicated Discord
              Server.
            </p>
            <p>
              The final grading had 4 ranks, Blue Squad, Teal Squad, Gold Squad,
              and finally Red Squad which is the hardest to obtain and you had
              to added something really special to your app to get it and it was
              only awarded to 10 students from 10K!
            </p>
            <p>
              I managed to get into{" "}
              <a
                href="https://app.exampro.co/student/achievements/validate/certificate/FtYpdC9i-v84eOhU-b_zFA41f0"
                rel="noreferrer"
                target="_blank"
              >
                Red Squad
              </a>{" "}
              by integrating Tensorflow.js with React.js creating an AI
              moderator for our App that prevents the user form posting toxic
              messages!
            </p>
          </div>
        </div>

        <div className="journey-stage">
          <div className="journey-image-container">
            <img alt="journey continues" src={journeyContinues}></img>
          </div>
          <div className="text">
            <p className="emphasis">
              This is just the beginning! A lot more yet to come!
            </p>
            <p>
              I plan to launch my "Data Analytics Made Simpler" learning series
              and add my Data Engineering projects here in my Website. So stay
              tuned!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;

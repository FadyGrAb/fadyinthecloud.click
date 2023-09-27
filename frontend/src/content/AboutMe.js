import mypic from "../images/me.jpg";
const AboutMe = () => {
  return (
    <div className="subsection">
      <h2>My Story</h2>
      <div className="content">
        <div className="text">
          <p>
            Hi, I'm Fady and I come from Egypt 🇪🇬. I'm a telecommunications
            professional since 2009 with experience in Microwave links, fiber
            optics networks, and Radio Access networks. In my early career days,
            I worked in projects rollout activities after that -since 2012- I
            worked in Manged Services in the Operations and Maintenance domain
            as Field Maintenance Manger firstly for Fiber Networks then recently
            for RAN (Radio Access Networks).
          </p>
          <p>
            I noticed that the Operations and Maintenance activities generates
            tones of data that is underutilized. Therefore in 2018, I developed
            an interest in <i>Data Analytics</i>. I started my "Data" learning
            journey since then and later I became obsessed and fell in love with
            <i> Data Engineering</i> and <i>Cloud</i>! I cleared certs, won in a
            Hackathon, wrote several technical articles (don't forget to check
            out the "Data Analytics Made Easy" at the top), learned web
            development, and built the website that you are visiting right now
            myself!
          </p>
          <p>
            Currently, I hold two roles. One, as a
            <i> Field Maintenance Area Manager</i> serving hundreds of mobile
            sites with a team of 20+ skilled engineers and technicians. And the
            other is <i>Data Analytics SME</i> where I support the whole Managed
            Services project with their analytics needs and create special
            purpose tools (mainly data tools) for them.
          </p>
          <p>
            I may not be the best out there but I consider myself a
            <i> builder</i> and a <i>Data Engineering apprentice</i> who is
            always learning to be better and eventually WILL be a
            <i> Master Builder</i> and a<i> Data Engineering Wizard</i> 🧙‍♂️!
          </p>
          <p>
            Ah! I almost forgot! I love sports (weight lifting and running
            mostly), playing guitar, I enjoy technical writing (I write on
            dev.to, check out my "
            <a
              href="https://dev.to/fadygrab/series/23244"
              rel="noreferrer"
              target="_blank"
            >
              Rust learning Series
            </a>
            " 🦀🦀), and I love Rubik's Cubes 😉
          </p>
        </div>
        <img src={mypic} alt="me" className="profile-pic"></img>
      </div>
    </div>
  );
};

export default AboutMe;

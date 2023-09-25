import mypic from "../images/me.jpg";
const AboutMe = () => {
  return (
    <div className="subsection">
      <h2>About Me</h2>
      <div className="content">
        <p>
          My name is Fady and I come from Egypt 🇪🇬. I'm a telecommunications
          professional since 2009
        </p>
        <img src={mypic} alt="me" className="profile-pic"></img>
      </div>
    </div>
  );
};

export default AboutMe;

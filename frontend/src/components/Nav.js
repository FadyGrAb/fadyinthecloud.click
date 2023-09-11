import "../styles/Nav.css";

const Nav = (props) => {
  const links = props.sections.map((section, key) => {
    return (
      <a key={key} className="nav-item nav-a" href={`#${section.class}`}>
        {section.name}
      </a>
    );
  });
  return (
    <nav id="nav-bar">
      <a className="nav-item nav-brand" href="/">
        FadyInTheCloud
      </a>
      {links}
    </nav>
  );
};

export default Nav;

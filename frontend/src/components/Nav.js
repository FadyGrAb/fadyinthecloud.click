import "../styles/Nav.css";

const Nav = (props) => {
  const links = props.sections.map((section, key) => {
    return (
      <a key={key} className="nav-a nav-active" href={`#${section.class}`}>
        {section.name}
      </a>
    );
  });
  return (
    <nav>
      <a className="nav-brand" href="/">
        FadyInTheCloud
      </a>
      {links}
    </nav>
  );
};

export default Nav;

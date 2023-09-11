import "../styles/Nav.css";

const Nav = (props) => {
  const links = props.sections.map((section, key) => {
    return (
      <li key={key} className="nav-list-item">
        <a className="nav-a nav-active" href={`#${section.class}`}>
          {section.name}
        </a>
      </li>
    );
  });
  return (
    <nav>
      <ul className="nav-list">
        <li className="nav-brand">
          <a className="nav-a" href="/">
            FadyInTheCloud
          </a>
        </li>
        {links}
      </ul>
    </nav>
  );
};

export default Nav;

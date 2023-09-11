import "../styles/Section.css";

const Sections = (props) => {
  const sections = props.sections.map((section, key) => {
    return (
      <div key={key} id={section.class} className={section.class}>
        <h1>{section.name}</h1>
      </div>
    );
  });
  console.log(sections);
  return <div className="sections-container"> {sections} </div>;
};

export default Sections;

import "../styles/Sections.css";

const Sections = (props) => {
  const sections = props.sections.map((section, key) => {
    return (
      <div key={key} id={section.class} className={`${section.class} section`}>
        <h1>{section.name}</h1>
        {section.content}
      </div>
    );
  });
  console.log(sections);
  return <div className="sections-container"> {sections} </div>;
};

export default Sections;

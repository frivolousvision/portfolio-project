import "./projects.css";

const Projects = (props) => {
  return (
    <div
      className={`projects ${props.dark ? "projects-dark" : "projects-light"}`}
    >
      <h2 className='projects-header'>Projects</h2>
    </div>
  );
};
export default Projects;

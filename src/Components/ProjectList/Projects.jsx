import { Link } from "react-router-dom";
import codingChallenge from "./findyourwordle.png";
import clevelandClinic from "../../Assets/cleaveland-clinic-main.png"
import scheduleViewer from "../../Assets/schedule-viewer-main.png"
import "./projects.css";

const Projects = (props) => {
  return (
    <div
      onClick={props.closeAllNav}
      className={`projects ${
        props.showNav ? "show-nav" : "hide-nav"
      }`}
    >
      <div className={`projects-container`}>
        <h2 className={`projects-header`}>
          Projects
        </h2>
        <div className={`projects-content`}>
          <div className={`each-project-container`}>
            <Link to='/find-your-wordle'>
              <h4>
                Find Your Wordle
              </h4>
              <img src={codingChallenge} alt='' />
            </Link>
            <p>
              A React app to that helps users find the solution to the popular
              NY Times game, Wordle
            </p>
          </div>
          <div className={`each-project-container`}>
            <Link to='/cleveland-clinic'>
              <h4>
                Cleveland Clinic
              </h4>
              <img src={clevelandClinic} alt='' />
            </Link>
            <p>
              A TypeScript + React I made to help Cleveland Clinic Recruiters find the right candidates
            </p>
          </div>
          <div className={`each-project-container`}>
            <Link to='/schedule-viewer'>
              <h4>
                Schedule Viewer App
              </h4>
              <img src={scheduleViewer} alt='' />
            </Link>
            <p>
              A Fullstack application I made to help Law GRA students at a local university manage and view semester schedules
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;

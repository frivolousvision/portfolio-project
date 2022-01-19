import "./projects.css";
import { useContext } from "react";
import { DarkContext } from "../../App";
import { Link } from "react-router-dom";
import eCommercePhoto from "./e-commerce-app.jpg";
import redditPhoto from "./reddit-screenshot.jpg";
import codingChallenge from "./coding-challenge.jpg";

const Projects = (props) => {
  const dark = useContext(DarkContext);
  return (
    <div
      onClick={props.closeAllNav}
      className={`projects ${dark ? "projects-dark" : "projects-light"} ${
        props.showNav ? "show-nav" : "hide-nav"
      }`}
    >
      <div className={`projects-container`}>
        <h2 className={`projects-header ${dark ? "text-dark" : "text-light"}`}>
          Projects
        </h2>
        <div className={`projects-content`}>
          <div className={`each-project-container`}>
            <Link to='/e-commerce-app'>
              <h5 className={`${dark ? "text-dark" : "text-light"}`}>
                E-Commerce-App
              </h5>
              <img src={eCommercePhoto} alt='' />
            </Link>
            <p className={`${dark ? "text-dark" : "text-light"}`}>
              A full-stack mock e-commerce application made with the PERN stack
            </p>
          </div>
          <div className={`each-project-container`}>
            <Link to='/reddit-app'>
              <h5 className={`${dark ? "text-dark" : "text-light"}`}>
                Reddit API App
              </h5>
              <img src={redditPhoto} alt='' />
            </Link>
            <p className={`${dark ? "text-dark" : "text-light"}`}>
              A frontend application made with React and Redux using Reddit's
              API
            </p>
          </div>
          <div className={`each-project-container`}>
            <Link to='/coding-challenge'>
              <h5 className={`${dark ? "text-dark" : "text-light"}`}>
                Coding Challenge
              </h5>
              <img src={codingChallenge} alt='' />
            </Link>
            <p className={`${dark ? "text-dark" : "text-light"}`}>
              A frontend application made with React to compare target companies
              with CRUD functionality
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;

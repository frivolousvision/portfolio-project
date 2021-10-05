import "./projects.css";
import { Link } from "react-router-dom";
import eCommercePhoto from "./e-commerce-app.png";
import redditPhoto from "./reddit-screenshot.png";
import codingChallenge from "./coding-challenge.png";

const Projects = (props) => {
  return (
    <div
      onClick={props.closeMobileNav}
      className={`projects ${props.dark ? "projects-dark" : "projects-light"} ${
        props.showNav ? "show-nav" : "hide-nav"
      }`}
    >
      <h2
        className={`projects-header ${props.dark ? "text-dark" : "text-light"}`}
      >
        Projects
      </h2>
      <div className={`projects-container`}>
        <div className={`each-project-container`}>
          <Link to='/e-commerce-app'>
            <h5 className={`${props.dark ? "text-dark" : "text-light"}`}>
              E-Commerce-App
            </h5>
            <img src={eCommercePhoto} alt='' />
          </Link>
          <p className={`${props.dark ? "text-dark" : "text-light"}`}>
            A full-stack mock e-commerce application made with the PERN stack
          </p>
        </div>
        <div className={`each-project-container`}>
          <Link to='/reddit-app'>
            <h5 className={`${props.dark ? "text-dark" : "text-light"}`}>
              Reddit API App
            </h5>
            <img src={redditPhoto} alt='' />
          </Link>
          <p className={`${props.dark ? "text-dark" : "text-light"}`}>
            A frontend application made with React and Redux using Reddit's API
          </p>
        </div>
        <div className={`each-project-container`}>
          <Link to='/coding-challenge'>
            <h5 className={`${props.dark ? "text-dark" : "text-light"}`}>
              Coding Challenge
            </h5>
            <img src={codingChallenge} alt='' />
          </Link>
          <p className={`${props.dark ? "text-dark" : "text-light"}`}>
            A frontend application made with React to compare target companies
            with CRUD functionality
          </p>
        </div>
      </div>
    </div>
  );
};
export default Projects;
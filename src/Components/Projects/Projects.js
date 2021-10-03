import "./projects.css";
import eCommercePhoto from "./e-commerce-app.png";
import redditPhoto from "./reddit-screenshot.png";
import codingChallenge from "./coding-challenge.png";

const Projects = (props) => {
  return (
    <div
      className={`projects ${props.dark ? "projects-dark" : "projects-light"}`}
    >
      <h2
        className={`projects-header ${props.dark ? "text-dark" : "text-light"}`}
      >
        Projects
      </h2>
      <div className={`projects-container`}>
        <div className={`each-project-container`}>
          <a
            href='http://e-commerce-apple-clone.herokuapp.com/'
            target='_blank'
            rel='noreferrer'
          >
            <p className={`${props.dark ? "text-dark" : "text-light"}`}>
              E-Commerce-App
            </p>
            <img src={eCommercePhoto} alt='' />
          </a>
        </div>
        <div className={`each-project-container`}>
          <a
            href='https://www.reddit-dark.com/'
            target='_blank'
            rel='noreferrer'
          >
            <p className={`${props.dark ? "text-dark" : "text-light"}`}>
              Reddit API App
            </p>
            <img src={redditPhoto} alt='' />
          </a>
        </div>
        <div className={`each-project-container`}>
          <a href='https://www.dan-demos.com/' target='_blank' rel='noreferrer'>
            <p className={`${props.dark ? "text-dark" : "text-light"}`}>
              Coding Challenge
            </p>
            <img src={codingChallenge} alt='' />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Projects;

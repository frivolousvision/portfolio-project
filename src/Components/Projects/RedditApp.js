import "./project.css";
import redditPhoto from "../ProjectList/reddit-screenshot.png";

const RedditApp = (props) => {
  return (
    <div
      onClick={props.closeMobileNav}
      className={`project ${props.showNav ? "show-nav" : "hide-nav"} ${
        props.dark ? "background-dark" : "background-light"
      }`}
    >
      <div className={`project-container`}>
        <div className={`each-project-container`}>
          <h2
            className={`project-header ${
              props.dark ? "text-dark" : "text-light"
            }`}
          >
            Reddit-App
          </h2>
          <img src={redditPhoto} alt='' />

          <p className={`${props.dark ? "text-dark" : "text-light"}`}>
            A frontend application made with React and Redux using Reddit's API
          </p>
          <p className={`${props.dark ? "text-dark" : "text-light"}`}>
            View the project live{" "}
            <a
              href='https://www.reddit-dark.com/'
              target='_blank'
              rel='noreferrer'
            >
              here
            </a>
          </p>
          <p className={`${props.dark ? "text-dark" : "text-light"}`}>
            Check out this project's repository{" "}
            <a
              href='https://github.com/frivolousvision/reddit-mimic-app'
              target='_blank'
              rel='noreferrer'
            >
              here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default RedditApp;

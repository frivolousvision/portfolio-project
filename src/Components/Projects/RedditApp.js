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
            <strong>tl;dr</strong> A frontend application made with React and
            Redux using Reddit's API
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
            View this project's repository{" "}
            <a
              href='https://github.com/frivolousvision/reddit-mimic-app'
              target='_blank'
              rel='noreferrer'
            >
              here
            </a>
          </p>
          <br />
          <p className={`${props.dark ? "text-dark" : "text-light"}`}>
            This project was built using React functional components and hooks -
            using Redux to manage more complex state accross the application.
            The app calls Reddit's public API, in essence, recreating a Reddit
            feed. The site is hosted via Netlify and is linked to GitHub to
            allow for continuous integration.
            <br />
            <br />
            The explore tab allows users to navigate between a list of
            subReddits, while the search bar allows the user to search either
            accross the front page from the home screen or within the sub that
            the user is currently navigated to. The app also integrates an
            infinite scroll feature that makes an API call for the subsequent
            data when nearing the ending of the page to allow for endless
            scrolling and content.
          </p>
        </div>
      </div>
    </div>
  );
};
export default RedditApp;

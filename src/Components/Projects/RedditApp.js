import "./project.css";
import redditPhoto from "../ProjectList/reddit-screenshot.jpg";

const RedditApp = (props) => {
  return (
    <div
      onClick={props.closeMobileNav}
      className={`project ${props.showNav ? "show-nav" : "hide-nav"} ${
        props.dark ? "background-dark" : "background-light"
      }`}
    >
      <div className={`project-container`}>
        <div className='outer-container'>
          <h2
            className={`project-header ${
              props.dark
                ? "text-dark project-header-dark"
                : "text-light project-header-light"
            }`}
          >
            Reddit-App
          </h2>
          <div className='project-content'>
            <div className='project-image-container'>
              <img src={redditPhoto} alt='' />
              {/* <p className={`${props.dark ? "text-dark" : "text-light"}`}>
                <strong>tl;dr</strong> A frontend application made with React
                and Redux using Reddit's API
              </p> */}
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
            </div>
            <div className='text-container'>
              <p className={`${props.dark ? "text-dark" : "text-light"}`}>
                A frontend application made with React and Redux using Reddit's
                API. The site is hosted via Netlify and is linked to GitHub to
                allow for continuous integration.
                <br />
                <br />
                The app allows users to navigate between a list of subReddits
                and search within that subReddit. The app also integrates an
                infinite scroll feature calling the subsequent API when nearing
                the end of the page to allow for endless scrolling and content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RedditApp;

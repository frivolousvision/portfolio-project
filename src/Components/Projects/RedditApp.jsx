import redditPhoto from "../ProjectList/reddit-screenshot.jpg";
import "./project.css";

const RedditApp = (props) => {
  return (
    <div
      onClick={props.closeAllNav}
      className={`project ${props.showNav ? "show-nav" : "hide-nav"}`}
    >
      <div className={`project-container`}>
        <div className='outer-container'>
          <h2
            className={`project-header`}
          >
            Reddit API App
          </h2>
          <div className='project-content'>
            <div className='project-image-container'>
              <img src={redditPhoto} alt='' />
              <p>
                View the project live{" "}
                <a
                  href='https://www.reddit-dark.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  here
                </a>
              </p>
              <p>
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
              <p>
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
              <br />
              <p
                className={`view-project-text-desktop`}
              >
                View the project live{" "}
                <a
                  href='https://www.reddit-dark.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  here
                </a>
              </p>
              <p
                className={`view-project-text-desktop`}
              >
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
          </div>
        </div>
      </div>
    </div>
  );
};
export default RedditApp;

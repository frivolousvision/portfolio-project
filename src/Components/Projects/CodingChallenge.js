import "./project.css";
import codingChallenge from "../ProjectList/coding-challenge.jpg";

const CodingChallenge = (props) => {
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
            Coding Challenge
          </h2>
          <div className='project-content'>
            <div className='project-image-container'>
              <img src={codingChallenge} alt='' />
              <p className={`${props.dark ? "text-dark" : "text-light"}`}>
                View the project live{" "}
                <a
                  href='https://www.dan-demos.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  here
                </a>
              </p>
              <p className={`${props.dark ? "text-dark" : "text-light"}`}>
                View this project's repository{" "}
                <a
                  href='https://github.com/frivolousvision/coding-challenge'
                  target='_blank'
                  rel='noreferrer'
                >
                  here
                </a>
              </p>
            </div>
            <div className='text-container'>
              <p className={`${props.dark ? "text-dark" : "text-light"}`}>
                A frontend application made with React to compare target
                companies with CRUD functionality. The site is hosted via
                Netlify and is linked to GitHub to allow for continuous
                integration.
                <br />
                <br />
                The goal of this challenge was to view a list of targets, edit
                an existing target, create a new target and delete a target
                using a modern JavaScript framework.
              </p>

              <br />
              <p
                className={`view-project-text-desktop ${
                  props.dark ? "text-dark" : "text-light"
                }`}
              >
                View the project live{" "}
                <a
                  href='https://www.dan-demos.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  here
                </a>
              </p>
              <p
                className={`view-project-text-desktop ${
                  props.dark ? "text-dark" : "text-light"
                }`}
              >
                View this project's repository{" "}
                <a
                  href='https://github.com/frivolousvision/coding-challenge'
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
export default CodingChallenge;

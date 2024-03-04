import "./project.css";
import codingChallenge from "../ProjectList/findyourwordle.png";
import { useContext } from "react";
import { DarkContext } from "../../App";

const CodingChallenge = (props) => {
  const dark = useContext(DarkContext);
  return (
    <div
      onClick={props.closeAllNav}
      className={`project ${props.showNav ? "show-nav" : "hide-nav"} ${
        dark ? "background-dark" : "background-light"
      }`}
    >
      <div className={`project-container`}>
        <div className='outer-container'>
          <h2
            className={`project-header ${
              dark
                ? "text-dark project-header-dark"
                : "text-light project-header-light"
            }`}
          >
            Find Your Wordle
          </h2>
          <div className='project-content'>
            <div className='project-image-container'>
              <img src={codingChallenge} alt='' />
              <p className={`${dark ? "text-dark" : "text-light"}`}>
                View the project live{" "}
                <a
                  href='https://www.findyourwordle.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  here
                </a>
              </p>
              <p className={`${dark ? "text-dark" : "text-light"}`}>
                View this project's repository{" "}
                <a
                  href='https://github.com/frivolousvision/find-your-wordle'
                  target='_blank'
                  rel='noreferrer'
                >
                  here
                </a>
              </p>
            </div>
            <div className='text-container'>
              <p className={`${dark ? "text-dark" : "text-light"}`}>
                A React app that receives user inputs and queries data from an
                API to help users solve their NY Times' daily Wordle
                <br />
                <br />
                The site is hosted via Netlify and is linked to GitHub for CI/CD
              </p>

              <br />
              {/* <p
                className={`view-project-text-desktop ${
                  dark ? "text-dark" : "text-light"
                }`}
              >
                View the project live{" "}
                <a
                  href='https://www.findyourwordle.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  here
                </a>
              </p> */}
              <p
                className={`view-project-text-desktop ${
                  dark ? "text-dark" : "text-light"
                }`}
              >
                View this project's repository{" "}
                <a
                  href='https://github.com/frivolousvision/find-your-wordle'
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

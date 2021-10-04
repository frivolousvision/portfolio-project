import "./project.css";
import codingChallenge from "../ProjectList/coding-challenge.png";

const CodingChallenge = (props) => {
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
            Coding Challenge
          </h2>
          <img src={codingChallenge} alt='' />

          <p className={`${props.dark ? "text-dark" : "text-light"}`}>
            A frontend application made with React to compare target companies
            with CRUD functionality
          </p>
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
            Check out this project's repository{" "}
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
  );
};
export default CodingChallenge;

import "./project.css";
import eCommercePhoto from "../ProjectList/e-commerce-app.png";

const ECommerceApp = (props) => {
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
            E-Commerce-App
          </h2>
          <img src={eCommercePhoto} alt='' />

          <p className={`${props.dark ? "text-dark" : "text-light"}`}>
            A full-stack mock e-commerce application made with the PERN stack
          </p>
          <p className={`${props.dark ? "text-dark" : "text-light"}`}>
            View the project live{" "}
            <a
              href='https://e-commerce-apple-clone.herokuapp.com/'
              target='_blank'
              rel='noreferrer'
            >
              here
            </a>
          </p>
          <p className={`${props.dark ? "text-dark" : "text-light"}`}>
            Check out this project's repository{" "}
            <a
              href='https://github.com/frivolousvision/e-commerce-app'
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
export default ECommerceApp;

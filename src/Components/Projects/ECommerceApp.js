import "./project.css";
import eCommercePhoto from "../ProjectList/e-commerce-app.jpg";
import { useContext } from "react";
import { DarkContext } from "../../App";

const ECommerceApp = (props) => {
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
            E-Commerce App
          </h2>
          <div className='project-content'>
            <div className='project-image-container'>
              <img src={eCommercePhoto} alt='' />
              <p className={`${dark ? "text-dark" : "text-light"}`}>
                View the project live{" "}
                <a
                  href='https://e-commerce-apple-clone.herokuapp.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  here
                </a>
              </p>
              <p className={`${dark ? "text-dark" : "text-light"}`}>
                View this project's repository{" "}
                <a
                  href='https://github.com/frivolousvision/e-commerce-app'
                  target='_blank'
                  rel='noreferrer'
                >
                  here
                </a>
              </p>
            </div>
            <div className='text-container'>
              <p className={`${dark ? "text-dark" : "text-light"}`}>
                A full-stack mock e-commerce application made with the PERN
                stack. The site is hosted via Heroku and is linked to GitHub to
                allow for continuous integration.
                <br />
                <br />
                The goal of this project was to create an application that
                provides the functionality of an e-commerce website. Users can
                view and add items to their cart either as a guest or as a
                logged in user with an account. Users can checkout and purchase
                items and view previous orders.
              </p>

              <br />
              <p
                className={`view-project-text-desktop ${
                  dark ? "text-dark" : "text-light"
                }`}
              >
                View the project live{" "}
                <a
                  href='https://e-commerce-apple-clone.herokuapp.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  here
                </a>
              </p>
              <p
                className={`view-project-text-desktop ${
                  dark ? "text-dark" : "text-light"
                }`}
              >
                View this project's repository{" "}
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
      </div>
    </div>
  );
};
export default ECommerceApp;

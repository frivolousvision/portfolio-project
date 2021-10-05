import "./home.css";
import { useState, useEffect } from "react";
import DanPhoto from "./Dan-4.21.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";

const Home = (props) => {
  const [menuIcon, setMenuIcon] = useState(false);
  const [firstVisit, setFirstVisit] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setFirstVisit(false);
    }, 1000 * 10);
  }, []);
  setTimeout(() => {
    if (!menuIcon) setMenuIcon(true);
    if (menuIcon) setMenuIcon(false);
  }, 4000);
  return (
    <div>
      <div
        onClick={props.closeMobileNav}
        className={`home ${props.dark ? "home-dark" : "home-light"} ${
          props.showNav ? "show-nav" : "hide-nav"
        }`}
      >
        <p
          className={`menu-icon ${
            menuIcon ? "menu-icon-show" : "menu-icon-hide"
          }`}
        >
          <FontAwesomeIcon icon={faShare} className='fa-share' /> menu!
        </p>
        <div
          className={`home-container ${
            props.dark ? "home-container-dark" : "home-container-light"
          }`}
        >
          <div className='image-container'>
            <img src={DanPhoto} alt='' />
          </div>
          <div className={`text-container`}>
            <h2
              className={`about-header ${
                firstVisit ? "about-header-show" : "about-header-hide"
              }`}
            >
              Hey there! My name's Dan and I design and build websites and
              applications.
            </h2>

            <h2
              className={`goodbye-header ${
                firstVisit ? "goodbye-header-hide" : "goodbye-header-show"
              }`}
            >
              Thanks for stopping by! Hope to see you around!
            </h2>

            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;

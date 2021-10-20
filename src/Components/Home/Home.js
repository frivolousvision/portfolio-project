import "./home.css";
import { useState, useEffect } from "react";
import DanPhoto from "./Dan-photo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";

const Home = (props) => {
  const [menuIcon, setMenuIcon] = useState(false);
  const [firstVisit, setFirstVisit] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setMenuIcon(true);
    }, 2000);
    setTimeout(() => {
      setMenuIcon(false);
    }, 6000);
  }, []);
  setTimeout(() => {
    setFirstVisit(false);
  }, 1000 * 10);

  return (
    <div
      onClick={props.closeAllNav}
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
        <div className='text-container'>
          <h2
            className={`home-header ${
              firstVisit ? "home-header-show" : "home-header-hide"
            }`}
          >
            Hey there! My name's Dan and I design and build websites.
          </h2>

          <h2
            className={`goodbye-header ${
              firstVisit ? "goodbye-header-hide" : "goodbye-header-show"
            }`}
          >
            Thanks for stopping by! Hope to see you around!
          </h2>
        </div>
      </div>
    </div>
  );
};
export default Home;

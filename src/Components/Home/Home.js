import "./home.css";
import React, { useState, useEffect, useContext } from "react";
import DanPhoto from "./Dan-photo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { DarkContext } from "../../App";

const Home = (props) => {
  const [menuIcon, setMenuIcon] = useState(false);
  const [firstVisit, setFirstVisit] = useState(true);
  const dark = useContext(DarkContext);

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
      className={`home ${dark ? "home-dark" : "home-light"} ${
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
          dark ? "home-container-dark" : "home-container-light"
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
          <div className={`home-about-text`}>
            <p>
              I'm an Atlanta based developer specializing in the PERN stack who
              loves learning, problem-solving, creating dynamic content, and
              working with people.
            </p>
            <br />
            <br />
            <p>
              A strong foundation in modern web development languages such as
              JavaScript ES6, CSS3, and HTML5, with an affinity for creating
              dynamic single-page applications with React and Redux. Proficient
              in building responsive UI's that delight users with their
              functionality and a sharp ability to design pages based on
              wireframes.
            </p>
            <br />
            <br />
            <p>
              Versed in back-end design using NodeJS under the Express framework
              to create servers and route requests to manage CRUD functionality.
              Experience in relational databases creating and working with
              RESTful APIs to manage and deliver content via PostgreSQL.
              Extensive experience in customer service building and managing
              relationships.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;

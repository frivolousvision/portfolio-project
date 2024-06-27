import "./home.css";
import React, { useContext } from "react";
import DanPhoto from "./dan-photo-3.jpg";
import { DarkContext } from "../../App";

const Home = (props) => {
  const dark = useContext(DarkContext);

  return (
    <div
      onClick={props.closeAllNav}
      className={`home ${dark ? "home-dark" : "home-light"} ${
        props.showNav ? "show-nav" : "hide-nav"
      }`}
    >
      <div
        onClick={props.closeAllNav}
        className={`home-container inner-container ${
          dark ? "home-container-dark" : "home-container-light"
        }`}
      >
        <div className="image-container">
          <img src={DanPhoto} alt="" />
        </div>
        <div className="text-container">
          <h2 className="home-header ">
            Hi there! My name's Dan and I make web applications
          </h2>
          <div className={`home-about-text`}>
            <p>
              I'm an Atlanta based Full Stack developer. I love learning,
              solving problems, creating dynamic apps, and working with people.
            </p>
            <br />
            <br />
            <p>
              I have experience using modern web development technologies such
              as React, Svelte, Vue, TypeScript, JavaScript ES6, CSS3, HTML5.
              I'm proficient in building responsive, user-friendly UI's and have
              a sharp ability to design pages based on Figma wireframes.
            </p>
            <br />
            <br />
            <p>
              I am well versed in backend services using languages such as Node,
              Python and Java. I have experience working with relational
              databases and RESTful APIs, to deliver dynamic data-driven
              content. Also, I have very extensive experience in hospitality
              building and maintaining relationships.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;

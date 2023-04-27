import "./home.css";
import React, { useContext } from "react";
import DanPhoto from "./dan-photo-3.jpg";
import { DarkContext } from "../../App";

const Home = (props) => {
  // const [menuIcon, setMenuIcon] = useState(false);
  // const [firstVisit, setFirstVisit] = useState(true);
  const dark = useContext(DarkContext);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setMenuIcon(true);
  //   }, 2000);
  //   setTimeout(() => {
  //     setMenuIcon(false);
  //   }, 6000);
  // }, []);
  // setTimeout(() => {
  //   setFirstVisit(false);
  // }, 1000 * 10);

  return (
    <div
      onClick={props.closeAllNav}
      className={`home ${dark ? "home-dark" : "home-light"} ${
        props.showNav ? "show-nav" : "hide-nav"
      }`}
    >
      {/* <p
        className={`menu-icon ${
          menuIcon ? "menu-icon-show" : "menu-icon-hide"
        }`}
      >
        <FontAwesomeIcon icon={faShare} className='fa-share' /> menu!
      </p> */}
      <div
        onClick={props.closeAllNav}
        className={`home-container ${
          dark ? "home-container-dark" : "home-container-light"
        }`}
      >
        <div className='image-container'>
          <img src={DanPhoto} alt='' />
        </div>
        <div className='text-container'>
          <h2
            className='home-header '
            //   ${
            //    firstVisit ? "home-header-show" : "home-header-hide"}`
            // }
          >
            Hey there! My name's Dan and I make websites.
          </h2>

          {/* <h2
            className={`goodbye-header ${
              firstVisit ? "goodbye-header-hide" : "goodbye-header-show"
            }`}
          >
            Thanks for stopping by! Hope to see you around!
          </h2> */}
          <div className={`home-about-text`}>
            <p>
              I'm an Atlanta based Frontend / Fullstack developer. I love
              learning, solving problems, creating dynamic apps, and working
              with people.
            </p>
            <br />
            <br />
            <p>
              I have experience using modern web development technologies such
              as TypeScript, JavaScript ES6, CSS3, HTML5, and like creating
              dynamic single-page applications with React and Redux. I am
              proficient in building screen responsive, user-friendly UI's and
              have a sharp ability to design pages based on Figma wireframes.
            </p>
            <br />
            <br />
            <p>
              I am well versed in backend services using NodeJS / Express and C#
              / ASP.NET to create servers and route requests to implement CRUD
              functionality. I have experience working with relational databases
              and RESTful APIs, connect the client and service to deliver
              dynamic content. Also, I have very extensive experience in
              customer service building and maintaining relationships.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;

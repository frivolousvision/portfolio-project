import "./about.css";
import DanPhoto from "../Home/Dan-4.21.png";

const About = (props) => {
  return (
    <div>
      <div
        onClick={props.closeMobileNav}
        className={`about ${props.dark ? "about-dark" : "about-light"} ${
          props.showNav ? "show-nav" : "hide-nav"
        }`}
      >
        <div
          className={`about-container ${
            props.dark ? "about-container-dark" : "about-container-light"
          }`}
        >
          <div className='text-container'>
            <h2 className='about-header'>About</h2>
            <p>
              I am a self-taught full-stack developer who enjoys building and
              creating dynamic applications that look and feel fantastic. I love
              learning how to solve tricky problems and live for those "aha!"
              moments when everything clicks.
            </p>
            {/* <p>
              A strong foundation in current web development languages such as
              JavaScript ES6, CSS3, and HTML5, with an affinity for creating
              dynamic single-page applications with React and Redux. Proficient
              in building responsive UI's that delight users with their
              functionality and a sharp ability to design pages based on
              wireframes. Proficient in using NodeJS to build the backend under
              the Express framework to create servers and route requests to
              manage CRUD functionality. Experience in relational databases
              creating and working with RESTful APIs to manage and deliver
              content via PostgreSQL. Knowledge and experience with Git/Github
              for version control and continuous integration. Extensive
              experience in customer service building and managing
              relationships.
            </p> */}
            <h2 className='about-header'>Skills</h2>
            <ul>
              <h3>Front / UI:</h3>
              <li>JavaScript ES6</li>
              <li>CSS3</li>
              <li>React</li>
              <li>Redux</li>
              <li>HTML5</li>
              <li>Responsive UI's</li>
              <li>Adobe Illustrator</li>
            </ul>
            <ul>
              <h3>Back:</h3>
              <li>NodeJS</li>
              <li>Express</li>
              <li>PostgreSQL</li>
              <li>RESTful APIs</li>
            </ul>
            <ul>
              <h3>Bit of Both:</h3>
              <li>Git/Github</li>
              <li>Heroku</li>
              <li>Continuous Integration</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;

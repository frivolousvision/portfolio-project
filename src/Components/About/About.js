import "./about.css";
import "./dan-durnell-resume.pdf";
import resumeLight from "./resume-light.png";
import resumeDark from "./resume-dark.png";

const About = (props) => {
  return (
    <div
      onClick={props.closeAllNav}
      className={`about ${props.dark ? "about-dark" : "about-light"} ${
        props.showNav ? "show-nav" : "hide-nav"
      }`}
    >
      <div
        className={`about-container ${
          props.dark ? "about-container-dark" : "about-container-light"
        }`}
      >
        <img
          src={props.dark ? resumeDark : resumeLight}
          alt='resume for Dan Durnell'
          className='resume'
        />
        {/* <div className='resume-container'>
          <img src={resumeLight} />
        </div> */}
        <div className='about-text-container'>
          <h2 className='about-header'>About</h2>
          <p>
            I'm an Atlanta based developer specializing in the PERN stack who
            loves learning, problem-solving, creating dynamic content, and
            working with people. A strong foundation in modern web development
            languages such as JavaScript ES6, CSS3, and HTML5, with an affinity
            for creating dynamic single-page applications with React and Redux.
            Proficient in building responsive UI's that delight users with their
            functionality and a sharp ability to design pages based on
            wireframes. Proficient in using NodeJS to build the backend under
            the Express framework to create servers and route requests to manage
            CRUD functionality. Experience in relational databases creating and
            working with RESTful APIs to manage and deliver content via
            PostgreSQL. Extensive experience in customer service building and
            managing relationships.
          </p>
          <h2 className='skills-header'>Technologies I Use</h2>
          <div className='skills-container'>
            <div>
              <ul>
                <h3>Front:</h3>
                <li>JavaScript ES6</li>
                <li>CSS3</li>
                <li>React</li>
                <li>Redux</li>
                <li>HTML5</li>
                <li>Responsive UI's</li>
                <li>Adobe Illustrator</li>
              </ul>
            </div>
            <div>
              <ul>
                <h3>Back:</h3>
                <li>NodeJS</li>
                <li>Express</li>
                <li>PostgreSQL</li>
                <li>RESTful APIs</li>
              </ul>
            </div>
            <div>
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
    </div>
  );
};
export default About;

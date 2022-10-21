import "./about.css";
import "./dan-durnell-resume.pdf";
// import resumeLight from "./resume-light.png";
// import resumeDark from "./resume-dark.png";
import resumeNew from "./resume-10-22.png";
import { useContext } from "react";
import { DarkContext } from "../../App";

const About = (props) => {
  const dark = useContext(DarkContext);
  return (
    <div
      onClick={props.closeAllNav}
      className={`about ${dark ? "about-dark" : "about-light"} ${
        props.showNav ? "show-nav" : "hide-nav"
      }`}
    >
      <div
        onClick={props.closeAllNav}
        className={`about-container ${
          dark ? "about-container-dark" : "about-container-light"
        }`}
      >
        <img src={resumeNew} alt='resume for Dan Durnell' className='resume' />
        {/* <div className='resume-container'>
          <img src={resumeLight} />
        </div> */}
        <div className='about-text-container' onClick={props.closeAllNav}>
          <h2 className='about-header'>About</h2>
          <p>
            I'm an Atlanta based Frontend / Fullstack developer excelling in
            learning, problem-solving, and architecting modern applications.
            Highly motivated self-starter who loves working with people.
            Knowledge in current web development technologies, with an affinity
            for creating dynamic single-page applications. Experience building
            responsive UI's with clean functionality with precise attention to
            design details based on wire frames. Skilled in using backend
            frameworks to create services to deliver and manage data through
            relational databases. Extensive experience in customer service -
            building and maintaining client relationships.
          </p>
          <h2 className='skills-header'>Technologies I Use</h2>
          <div className='skills-container'>
            <div>
              <ul>
                <h3>Frontend:</h3>
                <li>TypeScript</li>
                <li>JavaScript ES6</li>
                <li>React</li>
                <li>JSX / TSX</li>
                <li>Redux</li>
                <li>CSS3</li>
                <li>Ant Design</li>
                <li>Figma</li>
                <li>HTML5</li>
              </ul>
            </div>
            <div>
              <ul>
                <h3>Backend:</h3>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>PostgreSQL</li>
                <li>SQL Server</li>
                <li>C# / ASP.NET</li>
                <li>Database Design</li>
              </ul>
            </div>
            <div>
              <ul>
                <h3>Other Competancies:</h3>
                <li>RESTful APIs</li>
                <li>Responsive Design</li>
                <li>AJAX</li>
                <li>Git/Github</li>
                <li>Azure</li>
                <li>Netlify</li>
                <li>Heroku</li>
                <li>CI / CD</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;

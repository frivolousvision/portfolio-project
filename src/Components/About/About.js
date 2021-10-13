import "./about.css";

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
        <div className='about-text-container'>
          <h2 className='about-header'>About</h2>
          <p>
            I'm an Atlanta-based developer who enjoys building and creating
            dynamic applications that look and feel fantastic. I love learning
            how to solve tricky problems and live for those "aha!" moments when
            everything clicks.
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

import "./home.css";
import DanPhoto from "./Dan-4.21.png";

const Home = (props) => {
  return (
    <div>
      <div
        className={`home ${props.dark ? "home-dark" : "home-light"} ${
          props.showNav ? "show-nav" : "hide-nav"
        }`}
      >
        <div
          className={`home-container ${
            props.dark ? "home-container-dark" : "home-container-light"
          }`}
        >
          <div className='image-container'>
            <img src={DanPhoto} alt='' />
          </div>
          <div className='text-container'>
            <h2 className='about-header'>About</h2>
            <p>
              Highly motivated self-taught PERN stack developer who loves
              learning, problem-solving, creating dynamic content, and working
              with people. A strong foundation in current web development
              languages such as JavaScript ES6, CSS3, and HTML5, with an
              affinity for creating dynamic single-page applications with React
              and Redux. Proficient in building responsive UI's that delight
              users with their functionality and a sharp ability to design pages
              based on wireframes. Proficient in using NodeJS to build the
              backend under the Express framework to create servers and route
              requests to manage CRUD functionality. Experience in relational
              databases creating and working with RESTful APIs to manage and
              deliver content via PostgreSQL. Knowledge and experience with
              Git/Github for version control and continuous integration.
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

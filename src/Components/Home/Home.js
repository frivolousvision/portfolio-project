import "./home.css";
import DanPhoto from "./Dan-4.21.png";

const Home = (props) => {
  return (
    <div>
      <div
        onClick={props.closeMobileNav}
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
            <h2 className='about-header'>
              Hey there! My name's Dan and I design and build websites.
            </h2>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;

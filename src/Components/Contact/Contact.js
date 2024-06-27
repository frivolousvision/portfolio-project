import "./contact.css";
import { useContext } from "react";
import { DarkContext } from "../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInbox } from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
// import emailjs from "emailjs-com";

const Contact = (props) => {
  const dark = useContext(DarkContext);

  return (
    <div
      onClick={props.closeAllNav}
      className={`contact ${dark ? "contact-dark" : "contact-light"} ${
        props.showNav ? "show-nav" : "hide-nav"
      }`}
    >
      <div className={`contact-container inner-container`}>
        <h3 className={`connect-message ${dark ? "text-dark" : "text-light"}`}>
          Want to connect? Send me an email or hit the links below!
        </h3>
        <div className='contact-links'>
          <div
            className={`contact-link-container ${
              dark ? "text-dark" : "text-light"
            }`}
          >
            <a
              href='mailto:ddurnell1@gmail.com'
              target='_blank'
              rel='noreferrer'
            >
              <p>Email:</p>
              <FontAwesomeIcon icon={faInbox} className='icon' />
            </a>
          </div>
          <div
            className={`contact-link-container ${
              dark ? "text-dark" : "text-light"
            }`}
          >
            <a
              href='https://github.com/frivolousvision/'
              target='_blank'
              rel='noreferrer'
            >
              <p>GitHub:</p>
              <FontAwesomeIcon icon={faGithubSquare} className='icon' />
            </a>
          </div>
          <div
            className={`contact-link-container ${
              dark ? "text-dark" : "text-light"
            }`}
          >
            <a
              href='https://www.linkedin.com/in/daniel-durnell/'
              target='_blank'
              rel='noreferrer'
            >
              <p>LinkedIn:</p>
              <FontAwesomeIcon icon={faLinkedin} className='icon' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;

import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInbox } from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
const Contact = (props) => {
  return (
    <div
      onClick={props.closeMobileNav}
      className={`contact ${props.dark ? "contact-dark" : "contact-light"} ${
        props.showNav ? "show-nav" : "hide-nav"
      }`}
    >
      <h2
        className={`contact-header ${
          props.dark ? "contact-header-dark" : "contact-header-light"
        }`}
      >
        Contact
      </h2>
      <div className={`contact-container`}>
        <p
          className={`connect-message ${
            props.dark ? "text-dark" : "text-light"
          }`}
        >
          I'm happy you found me! Want to connect? Me too!
        </p>
        <div
          className={`contact-link-container ${
            props.dark ? "text-dark" : "text-light"
          }`}
        >
          <a href='mailto:ddurnell1@gmail.com' target='_blank' rel='noreferrer'>
            <p>Email:</p>
            <FontAwesomeIcon icon={faInbox} />
          </a>
        </div>
        <div
          className={`contact-link-container ${
            props.dark ? "text-dark" : "text-light"
          }`}
        >
          <a
            href='https://github.com/frivolousvision/'
            target='_blank'
            rel='noreferrer'
          >
            <p>GitHub:</p>
            <FontAwesomeIcon icon={faGithubSquare} />
          </a>
        </div>
        <div
          className={`contact-link-container ${
            props.dark ? "text-dark" : "text-light"
          }`}
        >
          <a
            href='https://www.linkedin.com/in/daniel-durnell/'
            target='_blank'
            rel='noreferrer'
          >
            <p>LinkedIn:</p>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Contact;

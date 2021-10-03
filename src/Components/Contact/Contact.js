import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInbox } from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
const Contact = (props) => {
  return (
    <div className={`contact ${props.dark ? "contact-dark" : "contact-light"}`}>
      <h2
        className={`contact-header ${
          props.dark ? "contact-header-dark" : "contact-header-light"
        }`}
      >
        Contact
      </h2>
      <div className={`contact-container`}>
        <div
          className={`contact-link-container ${
            props.dark ? "text-dark" : "text-light"
          }`}
        >
          <a href='mailto:ddurnell1@gmail.com' target='_blank'>
            <p>Email:</p>
            <FontAwesomeIcon icon={faInbox} />
          </a>
        </div>
        <div
          className={`contact-link-container ${
            props.dark ? "text-dark" : "text-light"
          }`}
        >
          <a href='https://github.com/frivolousvision/' target='_blank'>
            <p>GitHub:</p>
            <FontAwesomeIcon icon={faGithubSquare} />
          </a>
        </div>
        <div
          className={`contact-link-container ${
            props.dark ? "text-dark" : "text-light"
          }`}
        >
          <a href='https://www.linkedin.com/in/daniel-durnell/' target='_blank'>
            <p>LinkedIn:</p>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Contact;

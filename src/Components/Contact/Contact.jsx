import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInbox, faFile } from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Contact = (props) => {

  return (
    <div
      onClick={props.closeAllNav}
      className={`contact ${
        props.showNav ? "show-nav" : "hide-nav"
      }`}
    >
      <div className="contact-container inner-container">
        <h3 className="connect-message">
          Want to connect? Hit the links below!
        </h3>
        <div className='contact-links'>
          <div
            className="contact-link-container"
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
            className="contact-link-container"
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
          <div className="contact-link-container">
            <a
              href='https://www.linkedin.com/in/daniel-durnell/'
              target='_blank'
              rel='noreferrer'>
              <p>LinkedIn:</p>
              <FontAwesomeIcon icon={faLinkedin} className='icon' />
            </a>
          </div>
          <div className="contact-link-container">
            <a
              href='/Assets/Dan_Durnell.pdf'
              target="_blank" rel="noopener noreferrer">
              <p>Resume:</p>
              <FontAwesomeIcon icon={faFile} className='icon' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;

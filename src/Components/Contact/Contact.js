import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInbox } from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import emailjs from "emailjs-com";
import keys from "../../emailKey";
const Contact = (props) => {
  // console.log(keys.USER_ID);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    emailjs
      .sendForm(keys.SERVICE_ID, keys.TEMPLATE_ID, e.target, keys.USER_ID)
      .then(
        (result) => {
          alert("Message Sent, We will get back to you shortly", result.text);
        },
        (error) => {
          alert("An error occurred, Please try again", error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div
      onClick={props.closeAllNav}
      className={`contact ${props.dark ? "contact-dark" : "contact-light"} ${
        props.showNav ? "show-nav" : "hide-nav"
      }`}
    >
      <div className={`contact-container`}>
        <h2
          className={`contact-header ${
            props.dark ? "contact-header-dark" : "contact-header-light"
          }`}
        >
          Contact
        </h2>
        <h3
          className={`connect-message ${
            props.dark ? "text-dark" : "text-light"
          }`}
        >
          Want to connect? Send me a quick message or click any of the links
          below.
        </h3>
        <div className='form-container'>
          <form onSubmit={handleSubmit}>
            <label className={`${props.dark ? "text-dark" : "text-light"}`}>
              Name
              <input type='text' name='name' required />
            </label>
            <label className={`${props.dark ? "text-dark" : "text-light"}`}>
              Email
              <input type='text' name='name' required />
            </label>
            <label className={`${props.dark ? "text-dark" : "text-light"}`}>
              Message
              <textarea type='text' name='message' required />
            </label>
            <input type='submit' value='Submit' className={`submit-button`} />
          </form>
        </div>
        <div className='contact-links'>
          <div
            className={`contact-link-container ${
              props.dark ? "text-dark" : "text-light"
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
              props.dark ? "text-dark" : "text-light"
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
              props.dark ? "text-dark" : "text-light"
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

import "./contact.css";

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
    </div>
  );
};
export default Contact;

import eCommercePhoto from "../ProjectList/e-commerce-app.png";

const ECommerceApp = (props) => {
  return (
    <div
      onClick={props.closeMobileNav}
      className={`project ${props.showNav ? "show-nav" : "hide-nav"}`}
    >
      <h2
        className={`project-header ${props.dark ? "text-dark" : "text-light"}`}
      >
        E-Commerce-App
      </h2>
      <div className={`project-container`}>
        <div className={`each-project-container`}>
          <a
          // href='http://e-commerce-apple-clone.herokuapp.com/'
          // target='_blank'
          // rel='noreferrer'
          >
            <h5 className={`${props.dark ? "text-dark" : "text-light"}`}>
              E-Commerce-App
            </h5>
            <img src={eCommercePhoto} alt='' />
          </a>
          <p className={`${props.dark ? "text-dark" : "text-light"}`}>
            A full-stack mock e-commerce application made with the PERN stack
          </p>
        </div>
      </div>
    </div>
  );
};
export default ECommerceApp;

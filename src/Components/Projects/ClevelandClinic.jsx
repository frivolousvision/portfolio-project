import "./project.css";
import clevelandClinicMain from "../../Assets/cleaveland-clinic-main.png"
import { useContext } from "react";
import { DarkContext } from "../../App";

const ClevelandClinic = (props) => {
  const dark = useContext(DarkContext);
  return (
    <div
      onClick={props.closeAllNav}
      className={`project ${props.showNav ? "show-nav" : "hide-nav"} ${
        dark ? "background-dark" : "background-light"
      }`}
    >
      <div className={`project-container`}>
        <div className='outer-container'>
          <h2
            className={`project-header ${
              dark
                ? "text-dark project-header-dark"
                : "text-light project-header-light"
            }`}
          >
            Cleveland Clinic Nurse Unit Finder
          </h2>
          <div className='project-content'>
            <div className='project-image-container'>
              <img src={clevelandClinicMain} alt='' />
              <p
                className={`${dark ? "text-dark" : "text-light"}`}
              >
                View the project live{" "}
                <a
                  href='https://ccfnurseunitfinder.aspirant.com/start-the-story/'
                  target='_blank'
                  rel='noreferrer'
                >
                  here
                </a>
              </p>
            </div>
            <div className='text-container'>
              <p className={`${dark ? "text-dark" : "text-light"}`}>
                This is a contracted project I built with TypeScript + React for 
                Cleveland Clinic to assist their recruiting team in finding candidates
                <br />
                <br />
                The goal of this project was to create an application that
                provides information and talking points for Cleveland Clinic recruiters 
                when speaking to candidates based on acuity levels and testimonials from
                others in the industry
              </p>

              <br />
              <p
                className={`view-project-text-desktop ${
                  dark ? "text-dark" : "text-light"
                }`}
              >
                View the project live{" "}
                <a
                  href='https://ccfnurseunitfinder.aspirant.com/start-the-story/'
                  target='_blank'
                  rel='noreferrer'
                >
                  here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ClevelandClinic;

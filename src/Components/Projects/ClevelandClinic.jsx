import clevelandClinicMain from "../../Assets/cleaveland-clinic-main.png"
import clevelandClinicWord from "../../Assets/cleaveland-clinic-word-filter.png"
import clevelandClinicFilter from "../../Assets/cleveland-clinic-filter.png"
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PhotoModal from "../../Atoms/PhotoModal/PhotoModal"
import { useContext, useState } from "react";
import { DarkContext } from "../../App";
import "./project.css";

const ClevelandClinic = (props) => {
  const [photoModal, setPhotoModal] = useState("");
  const dark = useContext(DarkContext);
  const handlePhotoModal =(src)=> {
    setPhotoModal(src)
  }
  return (
    <div
      onClick={props.closeAllNav}
      className={`project ${props.showNav ? "show-nav" : "hide-nav"}`}
    >
      {photoModal && <PhotoModal imgSrc={photoModal} dark={dark} setPhotoModal={setPhotoModal}/>}
      <div className={`project-container`}>
        <div className='outer-container'>
          <h2
            className={`project-header`}
          >
            Cleveland Clinic Nurse Unit Finder
          </h2>
          <div className='project-content'>
            <div onClick={()=> handlePhotoModal(clevelandClinicMain)} className='project-image-container'>
            <div className="click-to-enlarge-container"><p>Click to enlarge <FontAwesomeIcon icon={faAngleDoubleRight} /></p></div>
              <img src={clevelandClinicMain} alt='' />
            </div>
            <div className='text-container'>
              <p>
                This is a project I built with TypeScript + React for 
                Cleveland Clinic to assist their recruiting team in finding candidates
                <br />
                <br />
                The goal of this project was to create an application that
                provides information and talking points for Cleveland Clinic recruiters 
                when speaking to candidates based on acuity levels and testimonials from
                others in the industry
              </p>

              <br />
              <p>
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
            <div className="sample-screenshots-container">
              <p>Key word search for talking points:</p>
              <div onClick={()=> handlePhotoModal(clevelandClinicWord)} className='each-project-image-container'>
              <div className="click-to-enlarge-container"><p>Click to enlarge <FontAwesomeIcon icon={faAngleDoubleRight} /></p></div>
                <img src={clevelandClinicWord} alt='' />
              </div>
              <p>Filters for experience, schedule, acuity, and specialty:</p>
              <div onClick={()=> handlePhotoModal(clevelandClinicFilter)} className='each-project-image-container'>
                <div className="click-to-enlarge-container"><p>Click to enlarge <FontAwesomeIcon icon={faAngleDoubleRight} /></p></div>
                <img src={clevelandClinicFilter} alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ClevelandClinic;

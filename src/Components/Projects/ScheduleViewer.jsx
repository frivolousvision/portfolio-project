import "./project.css";
import scheduleViewerMain from "../../Assets/schedule-viewer-main.png"
import scheduleViewerCreate from "../../Assets/schedule-viewer-create.png"
import scheduleViewerEdit from "../../Assets/schedule-viewer-edit.png"
import PhotoModal from "../../Atoms/PhotoModal/PhotoModal"
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { DarkContext } from "../../App";

const ScheduleViewer = (props) => {
  const [photoModal, setPhotoModal] = useState("");
  const dark = useContext(DarkContext);
  const handlePhotoModal =(src)=> {
    setPhotoModal(src)
  }
  return (
    <div
      onClick={props.closeAllNav}
      className={`project ${props.showNav ? "show-nav" : "hide-nav"} ${
        dark ? "background-dark" : "background-light"
      }`}
    >
      {photoModal && <PhotoModal imgSrc={photoModal} dark={dark} setPhotoModal={setPhotoModal}/>}
      <div className={`project-container`}>
        <div className='outer-container'>
          <h2
            className={`project-header ${
              dark
                ? "text-dark project-header-dark"
                : "text-light project-header-light"
            }`}
          >
            Law School Schedule App
          </h2>
          <div className='project-content'>
            <div onClick={()=> handlePhotoModal(scheduleViewerMain)}  className='project-image-container'>
            <div className="click-to-enlarge-container"><p>Click to enlarge <FontAwesomeIcon icon={faAngleDoubleRight} /></p></div>
              <img src={scheduleViewerMain} alt='' />
              {/* <p
                className={`${dark ? "text-dark" : "text-light"}`}
              >
                View the project live{" "}
                <a
                  href='https://course-schedule.onrender.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  here
                </a>
              </p> */}
            </div>
            <div className='text-container'>
              <p className={`${dark ? "text-dark" : "text-light"}`}>
              A Fullstack application I made to help Law GRA students at a local university manage 
              and view semester schedules
                <br />
                <br />
                The goal of this project was to create an application that
                allowed Law school GRAs to create & manage semester schedules to 
                inform students what classes are available. Admins can login/register to
                create, edit and delete courses
              </p>

              <br />
              <p
                className={`${
                  dark ? "text-dark" : "text-light"
                }`}
              >
                View the project live{" "}
                <a
                  href='https://course-schedule.onrender.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  here
                </a>
              </p>
            </div>
            <div className="sample-screenshots-container">
              <p className={`${
                  dark ? "text-dark" : "text-light"
                }`}>Create Courses:</p>
                <div onClick={()=> handlePhotoModal(scheduleViewerCreate)} className='each-project-image-container'>
                <div className="click-to-enlarge-container"><p>Click to enlarge <FontAwesomeIcon icon={faAngleDoubleRight} /></p></div>
                  <img src={scheduleViewerCreate} alt='' />
                </div>
              <p className={`${
                  dark ? "text-dark" : "text-light"
                }`}>Edit Courses:</p>
                <div onClick={()=> handlePhotoModal(scheduleViewerEdit)} className='each-project-image-container'>
                  <div className="click-to-enlarge-container"><p>Click to enlarge <FontAwesomeIcon icon={faAngleDoubleRight} /></p></div>
                  <img src={scheduleViewerEdit} alt='' />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ScheduleViewer;

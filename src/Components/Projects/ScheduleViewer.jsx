import "./project.css";
import scheduleViewerMain from "../../Assets/schedule-viewer-main.png"
import scheduleViewerCreate from "../../Assets/schedule-viewer-create.png"
import scheduleViewerEdit from "../../Assets/schedule-viewer-edit.png"
import { useContext } from "react";
import { DarkContext } from "../../App";

const ScheduleViewer = (props) => {
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
            Law School Schedule App
          </h2>
          <div className='project-content'>
            <div className='project-image-container'>
              <img src={scheduleViewerMain} alt='' />
              <p
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
              </p>
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
                className={`view-project-text-desktop ${
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
              <img src={scheduleViewerCreate} alt='' />
              <p className={`${
                  dark ? "text-dark" : "text-light"
                }`}>Edit Courses:</p>
              <img src={scheduleViewerEdit} alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ScheduleViewer;

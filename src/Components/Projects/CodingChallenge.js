import { useState } from "react";
import PhotoModal from "../../Atoms/PhotoModal/PhotoModal"  
import findYourWordleMain from "../ProjectList/findyourwordle.png";
import findYourWordleGreen from "../../Assets/find-your-wordle-green.png"
import findYourWordleSelection from "../../Assets/find-your-wordle-selection.png"
import findYourWordleList from "../../Assets/find-your-wordle-list.png"
import { useContext } from "react";
import { DarkContext } from "../../App";
import "./project.css";

const CodingChallenge = (props) => {
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
            Find Your Wordle
          </h2>
          <div className='project-content'>
            <div className='project-image-container'>
              <img onClick={()=> handlePhotoModal(findYourWordleMain)} src={findYourWordleMain} alt='' />
              <p className={`${dark ? "text-dark" : "text-light"}`}>
                View the project live{" "}
                <a
                  href='https://www.findyourwordle.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  here
                </a>
              </p>
              {/* <p className={`${dark ? "text-dark" : "text-light"}`}>
                View this project's repository{" "}
                <a
                  href='https://github.com/frivolousvision/find-your-wordle'
                  target='_blank'
                  rel='noreferrer'
                >
                  here
                </a>
              </p> */}
            </div>
            <div className='text-container'>
              <p className={`${dark ? "text-dark" : "text-light"}`}>
                A React app that receives user inputs and queries data from an
                API to help users solve their NY Times' daily Wordle
                <br />
                <br />
                The site is hosted via Netlify and is linked to GitHub for CI/CD
              </p>

              <br />
              {/* <p
                className={`view-project-text-desktop ${
                  dark ? "text-dark" : "text-light"
                }`}
              >
                View the project live{" "}
                <a
                  href='https://www.findyourwordle.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  here
                </a>
              </p> */}
              <p
                className={`view-project-text-desktop ${
                  dark ? "text-dark" : "text-light"
                }`}
              >
                View this project's repository{" "}
                <a
                  href='https://github.com/frivolousvision/find-your-wordle'
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
                }`}>Enter Green letter you know are in the Wordle:</p>
              <img onClick={()=> handlePhotoModal(findYourWordleGreen)} src={findYourWordleGreen} alt='' />
              <p className={`${
                  dark ? "text-dark" : "text-light"
                }`}>Select letters you know aren't in the Wordle and yellow letters:</p>
              <img onClick={()=> handlePhotoModal(findYourWordleSelection)} src={findYourWordleSelection} alt='' />
              <p className={`${
                  dark ? "text-dark" : "text-light"
                }`}>View list of possible Wordles:</p>
              <img onClick={()=> handlePhotoModal(findYourWordleList)} src={findYourWordleList} alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CodingChallenge;

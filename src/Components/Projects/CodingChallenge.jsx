import { useState } from "react";
import PhotoModal from "../../Atoms/PhotoModal/PhotoModal"  
import findYourWordleMain from "../ProjectList/findyourwordle.png";
import findYourWordleGreen from "../../Assets/find-your-wordle-green.png"
import findYourWordleSelection from "../../Assets/find-your-wordle-selection.png"
import findYourWordleList from "../../Assets/find-your-wordle-list.png"
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      className={`project ${props.showNav ? "show-nav" : "hide-nav"}`}
    >
      {photoModal && <PhotoModal imgSrc={photoModal} dark={dark} setPhotoModal={setPhotoModal}/>}
      <div className={`project-container`}>
        <div className='outer-container'>
          <h2
            className={`project-header`}
          >
            Find Your Wordle
          </h2>
          <div className='project-content'>
            <div onClick={()=> handlePhotoModal(findYourWordleMain)} className='project-image-container'>
              <div className="click-to-enlarge-container"><p>Click to enlarge <FontAwesomeIcon icon={faAngleDoubleRight} /></p></div>
              <img src={findYourWordleMain} alt='' />
            </div>
            <div className='text-container'>
              <p>
                A React app that receives user inputs and queries data from an
                API to help users solve their NY Times' daily Wordle
                <br />
                <br />
                The site is hosted via Netlify and is linked to GitHub for CI/CD
              </p>
                <br />
              <p>
                View the project live{" "}
                <a
                  href='https://www.findyourwordle.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  here
                </a>
              </p>
              <br />
              <p
                className={`view-project-text-desktop`}
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
              <p>Enter Green letter you know are in the Wordle:</p>
          <div onClick={()=> handlePhotoModal(findYourWordleGreen)} className='each-project-image-container'>
              <div className="click-to-enlarge-container"><p>Click to enlarge <FontAwesomeIcon icon={faAngleDoubleRight} /></p></div>
                <img src={findYourWordleGreen} alt='' />
              </div>
              <p>Select letters you know aren't in the Wordle and yellow letters:</p>
              <div onClick={()=> handlePhotoModal(findYourWordleSelection)} className='each-project-image-container'>
              <div className="click-to-enlarge-container"><p>Click to enlarge <FontAwesomeIcon icon={faAngleDoubleRight} /></p></div>
              <img src={findYourWordleSelection} alt='' />
              </div>
              <p>View list of possible Wordles:</p>
              <div onClick={()=> handlePhotoModal(findYourWordleList)} className='each-project-image-container'>
              <div className="click-to-enlarge-container"><p>Click to enlarge <FontAwesomeIcon icon={faAngleDoubleRight} /></p></div>
              <img src={findYourWordleList} alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CodingChallenge;

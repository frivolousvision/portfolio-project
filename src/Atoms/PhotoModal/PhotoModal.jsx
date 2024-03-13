import { useEffect, useRef, useState, useCallback } from 'react';
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './PhotoModal.css';
const PhotoModal =({imgSrc, dark, setPhotoModal})=> {
const [mounted, setMounted] = useState(false);
const ref = useRef(null);

const handleCloseModal = useCallback(()=> {
  setMounted(false)
  setTimeout(()=> {
    setPhotoModal("")
  },300)
},[setPhotoModal])

useEffect(()=> {
    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          handleCloseModal();
        }
      };
      document.addEventListener("click", handleClickOutside, true);
      return () => {
        document.removeEventListener("click", handleClickOutside, true);
      };
}, [setPhotoModal, handleCloseModal])

useEffect(()=> {
  setTimeout(()=> {
    setMounted(true)
  },100)
},[])
return (
    <>
    {imgSrc && <div ref={ref} onClick={handleCloseModal} 
    className={`photo-modal-container ${dark ? 'dark' : 'light'}
     ${mounted ? 'mounted' : null}`}>
    <FontAwesomeIcon
        onClick={handleCloseModal}
        icon={faTimes}
        className={`close-photo-modal`}
      />
        <img src={imgSrc} alt="" />
    </div>}
    </>
)
}
export default PhotoModal;
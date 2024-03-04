import { useEffect, useRef } from 'react';
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './PhotoModal.css';
const PhotoModal =({imgSrc, dark, setPhotoModal})=> {
    const ref = useRef(null);
useEffect(()=> {
    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setPhotoModal("");
        }
      };
      document.addEventListener("click", handleClickOutside, true);
      return () => {
        document.removeEventListener("click", handleClickOutside, true);
      };
}, [setPhotoModal])
return (
    <>
    {imgSrc && <div ref={ref} onClick={()=>setPhotoModal("")} className={`photo-modal-container ${dark ? 'dark' : 'light'}`}>
    <FontAwesomeIcon
        onClick={()=>setPhotoModal("")}
        icon={faTimes}
        className={`close-photo-modal`}
      />
        <img src={imgSrc} alt="" />
    </div>}
    </>
)
}
export default PhotoModal;
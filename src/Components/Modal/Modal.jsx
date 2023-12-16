import { useState, useEffect, useRef } from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Modal = ({ skill, skillType, index, handleEditSkill, closeModal }) => {
  const [value, setValue] = useState(skill);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        closeModal();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [closeModal]);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleEditSkill(value, skillType, index);
    }
  };

  return (
    <div ref={ref} className='edit-modal-container'>
      <FontAwesomeIcon
        onClick={closeModal}
        icon={faTimes}
        className={`close-edit-modal`}
      />
      <input
        autoFocus
        type='text'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyPress}
      ></input>

      <div>
        <button onClick={closeModal}>Cancel</button>
        <button
          disabled={skill === value}
          onClick={() => handleEditSkill(value, skillType, index)}
        >
          Save
        </button>
      </div>
    </div>
  );
};
export default Modal;

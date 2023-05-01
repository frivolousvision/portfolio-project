import { useState } from "react";
import "./modal.css";

const Modal = ({ skill, skillType, index, handleEditSkill, closeModal }) => {
  const [value, setValue] = useState(skill);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleEditSkill(value, skillType, index);
    }
  };

  return (
    <div className='edit-modal-container'>
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

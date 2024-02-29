import "./about.css";
import resumeNew from "./resume-10-22.png";
import { useContext, useState } from "react";
import { DarkContext } from "../../App";
import Modal from "../Modal/Modal";

const About = (props) => {
  const dark = useContext(DarkContext);
  const frontendSkills = [
    "TypeScript",
    "JavaScript ES6",
    "React",
    "MobX",
    "Redux",
    "Vue",
    "Vanilla JS",
    "CSS3",
    "Ant Design",
    "Figma",
    "HTML5",
  ];
  const backendSkills = [
    "Python",
    "Node.js",
    "Express.js",
    "Java",
    "C# / ASP.NET",
    "SQL Server Management Studio",
    "PostgreSQL",
    "Database Design",
    "RESTful Services",
  ];
  const otherSkills = [
    "AEM",
    "Responsive Design",
    "AJAX",
    "Git / Github / Bitbucket",
    "Azure",
    "Agile",
    "Jira",
    "CI / CD",
  ];
  const [skills, setSkills] = useState({
    actionActive: false,
    addMode: false,
    deleteMode: false,
    editMode: false,
    editModalActive: false,
    currentEditingSkill: "",
    currentEditingSkillType: "",
    currentEditingSkillIndex: 0,
    editAboutMode: false,
    aboutMe:
      "I'm an Atlanta-based Frontend / Fullstack developer excelling in problem-solving, building modern applications, and learning constantly! Highly motivated self-starter who loves working with people. Knowledge of current web development technologies, with an affinity for creating dynamic single-page applications. I have extensive experience building UI's with clean functionality with precise attention to design details based on wireframes. Skilled in using backend frameworks to create services to deliver and manage data through relational databases. Extensive experience in customer service - building and maintaining client relationships. Just for fun, this page is editable!",
    newSkill: "",
    newSkillType: "frontendSkills",
    frontendSkills,
    backendSkills,
    otherSkills,
    sortDirection: "default",
    sorted: true,
  });
  const handleDoneWithChanges = () => {
    setSkills({
      ...skills,
      actionActive: false,
      addMode: false,
      deleteMode: false,
      editMode: false,
    });
  };
  const handleSetAddMode = () => {
    // setTimeout(() => {
    //   window.scrollTo(0, "6rem");
    // }, 100);

    setSkills({
      ...skills,
      addMode: !skills.addMode,
      actionActive: !skills.actionActive,
    });
  };
  const handleSetDeleteMode = () => {
    setSkills({
      ...skills,
      actionActive: !skills.actionActive,
      deleteMode: !skills.deleteMode,
    });
  };
  const handleSetEditMode = () => {
    setSkills({
      ...skills,
      actionActive: !skills.actionActive,
      editMode: !skills.editMode,
    });
  };
  const handleAddSkill = (e) => {
    e.preventDefault();
    if (skills.newSkill.length === 0) return;
    let newArray;
    newArray = skills[skills.newSkillType];
    newArray.push(skills.newSkill);
    setSkills({
      ...skills,
      [skills.newSkillType]: newArray,
      newSkill: "",
      sorted: false,
    });
  };
  const handleDeleteSkill = (type, index) => {
    if (!skills.deleteMode) return;
    let newArray;
    if (skills.deleteMode) {
      newArray = skills[type];
      newArray.splice(index, 1);
      setSkills({ ...skills, [type]: newArray, newSkill: "" });
    }
  };
  const handleSetUpModal = (type, index) => {
    if (!skills.editMode) return;
    setSkills({
      ...skills,
      currentEditingSkill: skills[type][index],
      currentEditingSkillType: type,
      currentEditingSkillIndex: index,
      editModalActive: true,
    });
  };
  const closeModal = () => {
    setSkills({ ...skills, editModalActive: false });
  };
  const handleEditSkill = (newValue, type, index) => {
    if (!skills.editMode) return;
    let newArray;
    newArray = skills[type];
    newArray.splice(index, 1, newValue);
    setSkills({
      ...skills,
      type: newArray,
      editModalActive: false,
    });
  };
  const handleSortSkills = (sort = null) => {
    let value = sort;
    let frontendSkillsArray = skills.frontendSkills;
    let backendSkillsArray = skills.backendSkills;
    let otherSkillsArray = skills.otherSkills;
    if (value === "aToZ") {
      frontendSkillsArray = frontendSkillsArray.sort((a, b) => {
        a = a.toLowerCase();
        b = b.toLowerCase();
        if (a === b) return 0;
        return a < b ? -1 : 1;
      });
      backendSkillsArray = backendSkillsArray.sort((a, b) => {
        a = a.toLowerCase();
        b = b.toLowerCase();
        if (a === b) return 0;
        return a < b ? -1 : 1;
      });
      otherSkillsArray = otherSkillsArray.sort((a, b) => {
        a = a.toLowerCase();
        b = b.toLowerCase();
        if (a === b) return 0;
        return a < b ? -1 : 1;
      });
    } else if (value === "zToA") {
      frontendSkillsArray.sort((a, b) => {
        a = a.toLowerCase();
        b = b.toLowerCase();
        if (a === b) return 0;
        return a > b ? -1 : 1;
      });
      backendSkillsArray = backendSkillsArray.sort((a, b) => {
        a = a.toLowerCase();
        b = b.toLowerCase();
        if (a === b) return 0;
        return a > b ? -1 : 1;
      });
      otherSkillsArray = otherSkillsArray.sort((a, b) => {
        a = a.toLowerCase();
        b = b.toLowerCase();
        if (a === b) return 0;
        return a > b ? -1 : 1;
      });
    } else {
      setSkills({ ...skills, sortDirection: value });
      return;
    }
    setSkills({
      ...skills,
      frontendSkills: frontendSkillsArray,
      backendSkills: backendSkillsArray,
      otherSkills: otherSkillsArray,
      sorted: true,
      sortDirection: value,
    });
  };
  return (
    <div
      onClick={props.closeAllNav}
      className={`about ${dark ? "about-dark" : "about-light"} ${
        props.showNav ? "show-nav" : "hide-nav"
      }`}
    >
      {skills.editModalActive && (
        <Modal
          skill={skills.currentEditingSkill}
          skillType={skills.currentEditingSkillType}
          index={skills.currentEditingSkillIndex}
          closeModal={closeModal}
          handleEditSkill={handleEditSkill}
        />
      )}
      <div
        onClick={props.closeAllNav}
        className={`about-container ${
          dark ? "about-container-dark" : "about-container-light"
        }`}
      >
        <img src={resumeNew} alt='resume for Dan Durnell' className='resume' />
        <div className='about-text-container' onClick={props.closeAllNav}>
          <div className='about-header-container'>
            <h2 className='about-header'>About</h2>
            {skills.editAboutMode ? (
              <button
                onClick={() =>
                  setSkills({ ...skills, editAboutMode: !skills.editAboutMode })
                }
              >
                Save
              </button>
            ) : (
              <button
                onClick={() =>
                  setSkills({ ...skills, editAboutMode: !skills.editAboutMode })
                }
              >
                Edit
              </button>
            )}
          </div>
          {skills.editAboutMode ? (
            <textarea
              autoFocus
              value={skills.aboutMe}
              onChange={(e) =>
                setSkills({ ...skills, aboutMe: e.target.value })
              }
            ></textarea>
          ) : (
            <p>{skills.aboutMe}</p>
          )}
          <div className='skills-header-container'>
            <h2 className='skills-header'>Technologies I'm skilled with:</h2>
            <div className='skills-select-container'>
              {!skills.sorted && skills.sortDirection !== "default" ? (
                <button onClick={() => handleSortSkills(skills.sortDirection)}>
                  Sort again
                </button>
              ) : (
                <span>Sort skills:</span>
              )}
              <select onChange={(e) => handleSortSkills(e.target.value)}>
                <option value='default'></option>
                <option value='aToZ'>A to Z</option>
                <option value='zToA'>Z to A</option>
              </select>
            </div>
          </div>
          {skills.editAboutMode ? skills.actionActive ? (
            <div className='actions-container'>
              <button
                onClick={() => handleDoneWithChanges()}
                disabled={skills.editModalActive}
              >
                Done
              </button>
            </div>
          ) : (
            <div className='actions-container'>
              <button onClick={() => handleSetAddMode()}>Add</button>
              <button onClick={() => handleSetEditMode()}>Edit</button>
              <button onClick={() => handleSetDeleteMode()}>Delete</button>
            </div>
          ) : null}
          <div className='add-a-new-skill-container'>
            {skills.addMode && (
              <form onSubmit={(e) => handleAddSkill(e)}>
                <div className='skill-type-check-container'>
                  <label>
                    Frontend
                    <input
                      type='radio'
                      name='new-skill'
                      value='frontendSkills'
                      checked={skills.newSkillType === "frontendSkills"}
                      onChange={(e) =>
                        setSkills({ ...skills, newSkillType: e.target.value })
                      }
                    ></input>
                  </label>
                  <label>
                    Backend
                    <input
                      type='radio'
                      name='new-skill'
                      value='backendSkills'
                      checked={skills.newSkillType === "backendSkills"}
                      onChange={(e) =>
                        setSkills({ ...skills, newSkillType: e.target.value })
                      }
                    ></input>
                  </label>
                  <label>
                    Other
                    <input
                      type='radio'
                      name='new-skill'
                      value='otherSkills'
                      checked={skills.newSkillType === "otherSkills"}
                      onChange={(e) =>
                        setSkills({ ...skills, newSkillType: e.target.value })
                      }
                    ></input>
                  </label>
                </div>
                <input
                  type='text'
                  value={skills.newSkill}
                  onChange={(e) => {
                    setSkills({ ...skills, newSkill: e.target.value });
                  }}
                ></input>
                <button type='submit' disabled={skills.newSkill.length === 0}>
                  Save Skill
                </button>
              </form>
            )}
          </div>
          <div className='skills-container'>
            <div>
              <h3>Frontend:</h3>
              <ul>
                {skills.frontendSkills.length > 0 ? (
                  skills.frontendSkills.map((skill, i) => (
                    <li
                      key={i}
                      {...(skills.deleteMode && {
                        onClick: () => handleDeleteSkill("frontendSkills", i),
                      })}
                      {...(skills.editMode && {
                        onClick: () => handleSetUpModal("frontendSkills", i),
                      })}
                      className={`${
                        skills.deleteMode ? "list-delete-mode" : ""
                      } ${skills.editMode ? "list-edit-mode" : ""}`}
                    >
                      {skill}
                    </li>
                  ))
                ) : (
                  <li className='no-skills'>🙉</li>
                )}
              </ul>
            </div>
            <div>
              <h3>Backend:</h3>
              <ul>
                {skills.backendSkills.length > 0 ? (
                  skills.backendSkills.map((skill, i) => (
                    <li
                      key={i}
                      {...(skills.deleteMode && {
                        onClick: () => handleDeleteSkill("backendSkills", i),
                      })}
                      {...(skills.editMode && {
                        onClick: () => handleSetUpModal("backendSkills", i),
                      })}
                      className={`${
                        skills.deleteMode ? "list-delete-mode" : ""
                      } ${skills.editMode ? "list-edit-mode" : ""}`}
                    >
                      {skill}
                    </li>
                  ))
                ) : (
                  <li className='no-skills'>🙈</li>
                )}
              </ul>
            </div>
            <div>
              <h3>Other:</h3>
              <ul>
                {skills.otherSkills.length > 0 ? (
                  skills.otherSkills.map((skill, i) => (
                    <li
                      key={i}
                      {...(skills.deleteMode && {
                        onClick: () => handleDeleteSkill("otherSkills", i),
                      })}
                      {...(skills.editMode && {
                        onClick: () => handleSetUpModal("otherSkills", i),
                      })}
                      className={`${
                        skills.deleteMode ? "list-delete-mode" : ""
                      } ${skills.editMode ? "list-edit-mode" : ""}`}
                    >
                      {skill}
                    </li>
                  ))
                ) : (
                  <li className='no-skills'>🙊</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;

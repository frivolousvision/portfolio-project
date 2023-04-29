import "./about.css";
import "./dan-durnell-resume.pdf";
// import resumeLight from "./resume-light.png";
// import resumeDark from "./resume-dark.png";
import resumeNew from "./resume-10-22.png";
import { useContext, useState } from "react";
import { DarkContext } from "../../App";

const About = (props) => {
  const dark = useContext(DarkContext);
  const frontendSkills = [
    "TypeScript",
    "JavaScript ES6",
    "React",
    "Vue",
    "Vanilla JS",
    "Redux/MobX",
    "CSS3",
    "Ant Design",
    "Figma",
    "HTML5",
  ];
  const backendSkills = [
    "Python",
    "Node.js",
    "Express.js",
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
    addMode: false,
    deleteMode: false,
    editAboutMode: false,
    aboutMe:
      "I'm an Atlanta based Frontend / Fullstack developer excelling in problem-solving, building modern applications, and learning all the time! Highly motivated self-starter who loves working with people. Knowledge in current web development technologies, with an affinity for creating dynamic single-page applications. Experience building responsive UI's with clean functionality with precise attention to design details based on wire frames. Skilled in using backend frameworks to create services to deliver and manage data through relational databases. Extensive experience in customer service - building and maintaining client relationships.",
    newSkill: "",
    newSkillType: "frontendSkills",
    frontendSkills: frontendSkills,
    backendSkills,
    otherSkills,
    sortDirection: "default",
    sorted: true,
  });

  const handleSetAddMode = () => {
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 100);

    setSkills({
      ...skills,
      addMode: !skills.addMode,
    });
  };
  const handleSetDeleteMode = () => {
    // setTimeout(() => {
    //   window.scrollTo(0, document.body.scrollHeight);
    // }, 100);

    setSkills({
      ...skills,
      deleteMode: !skills.deleteMode,
    });
  };
  const handleAddSkill = (e) => {
    e.preventDefault();
    if (skills.newSkill.length === 0) return;
    let newArray;
    switch (skills.newSkillType) {
      case "frontendSkills":
        newArray = skills.frontendSkills;
        newArray.push(skills.newSkill);
        setSkills({
          ...skills,
          frontendSkills: newArray,
          newSkill: "",
          sorted: false,
        });
        break;
      case "backendSkills":
        newArray = skills.backendSkills;
        newArray.push(skills.newSkill);
        setSkills({
          ...skills,
          backendSkills: newArray,
          newSkill: "",
          sorted: false,
        });
        break;
      case "otherSkills":
        newArray = skills.otherSkills;
        newArray.push(skills.newSkill);
        setSkills({
          ...skills,
          otherSkills: newArray,
          newSkill: "",
          sorted: false,
        });
        break;
      default:
        break;
    }
  };
  const handleDeleteSkill = (type, index) => {
    if (!skills.deleteMode) return;
    let newArray;
    switch (type) {
      case "frontendSkills":
        newArray = skills.frontendSkills;
        newArray.splice(index, 1);
        setSkills({ ...skills, frontendSkills: newArray, newSkill: "" });
        break;
      case "backendSkills":
        newArray = skills.backendSkills;
        newArray.splice(index, 1);
        setSkills({ ...skills, backendSkills: newArray, newSkill: "" });
        break;
      case "otherSkills":
        newArray = skills.otherSkills;
        newArray.splice(index, 1);
        setSkills({ ...skills, otherSkills: newArray, newSkill: "" });
        break;
      default:
        break;
    }
  };
  const handleSortSkills = (sort = null) => {
    let value = sort;
    let frontendSkillsArray = skills.frontendSkills;
    let backendSkillsArray = skills.backendSkills;
    let otherSkillsArray = skills.otherSkills;
    if (value === "aToZ") {
      console.log(frontendSkillsArray);
      frontendSkillsArray = frontendSkillsArray.sort((a, b) => {
        a = a.toLowerCase();
        b = b.toLowerCase();
        if (a == b) return 0;
        return a < b ? -1 : 1;
      });
      backendSkillsArray = backendSkillsArray.sort((a, b) => {
        a = a.toLowerCase();
        b = b.toLowerCase();
        if (a == b) return 0;
        return a < b ? -1 : 1;
      });
      otherSkillsArray = otherSkillsArray.sort((a, b) => {
        a = a.toLowerCase();
        b = b.toLowerCase();
        if (a == b) return 0;
        return a < b ? -1 : 1;
      });
    } else if (value === "zToA") {
      frontendSkillsArray.sort((a, b) => {
        a = a.toLowerCase();
        b = b.toLowerCase();
        if (a == b) return 0;
        return a > b ? -1 : 1;
      });
      backendSkillsArray = backendSkillsArray.sort((a, b) => {
        a = a.toLowerCase();
        b = b.toLowerCase();
        if (a == b) return 0;
        return a > b ? -1 : 1;
      });
      otherSkillsArray = otherSkillsArray.sort((a, b) => {
        a = a.toLowerCase();
        b = b.toLowerCase();
        if (a == b) return 0;
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
      <div
        onClick={props.closeAllNav}
        className={`about-container ${
          dark ? "about-container-dark" : "about-container-light"
        }`}
      >
        <img src={resumeNew} alt='resume for Dan Durnell' className='resume' />
        {/* <div className='resume-container'>
          <img src={resumeLight} />
        </div> */}
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
            <h2 className='skills-header'>Technologies I Use</h2>
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
          <div className='skills-container'>
            <div>
              <h3>Frontend:</h3>
              <ul>
                {skills.frontendSkills.length > 0 ? (
                  skills.frontendSkills.map((skill, i) => (
                    <li
                      className={`${
                        skills.deleteMode ? "list-delete-mode" : ""
                      }`}
                      key={i}
                      onClick={() => handleDeleteSkill("frontendSkills", i)}
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
                      className={`${
                        skills.deleteMode ? "list-delete-mode" : ""
                      }`}
                      key={i}
                      onClick={() => handleDeleteSkill("backendSkills", i)}
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
                      className={`${
                        skills.deleteMode ? "list-delete-mode" : ""
                      }`}
                      key={i}
                      onClick={() => handleDeleteSkill("otherSkills", i)}
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
          <div className='add-a-new-skill-container'>
            {skills.addMode ? (
              <h4 onClick={() => handleSetAddMode()}>
                Click to close this form
              </h4>
            ) : (
              <h4 onClick={() => handleSetAddMode()}>
                Click to add a new skill for me!
              </h4>
            )}
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
          <div className='add-a-new-skill-container'>
            {skills.deleteMode ? (
              <h4 onClick={() => handleSetDeleteMode()}>
                Click to stopping deleting my skills
              </h4>
            ) : (
              <h4 onClick={() => handleSetDeleteMode()}>
                Click to delete some of my skills!
              </h4>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;

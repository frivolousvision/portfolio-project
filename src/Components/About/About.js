import "./about.css";
import "./dan-durnell-resume.pdf";
// import resumeLight from "./resume-light.png";
// import resumeDark from "./resume-dark.png";
import resumeNew from "./resume-10-22.png";
import { useContext, useState } from "react";
import { DarkContext } from "../../App";

const About = (props) => {
  const dark = useContext(DarkContext);
  const [skills, setSkills] = useState({
    editMode: false,
    newSkill: "",
    newSkillType: "frontendSkills",
    frontendSkills: [
      "TypeScript",
      "JavaScript ES6",
      "React",
      "JSX / TSX",
      "Redux",
      "CSS3",
      "Ant Design",
      "Figma",
      "HTML5",
    ],
    backendSkills: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "SQL Server",
      "C# / ASP.NET",
      "Database Design",
    ],
    otherSkills: [
      "RESTful APIs",
      "Responsive Design",
      "AJAX",
      "Git/Github",
      "Azure",
      "Netlify",
      "Heroku",
      "CI / CD",
    ],
  });
  const handleSetEditMode = () => {
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 100);

    setSkills({
      ...skills,
      editMode: !skills.editMode,
    });
  };
  const handleAddSkill = (e) => {
    e.preventDefault();
    if (skills.newSkill.length === 0) return;
    let newArray;
    console.log("new skill", skills.newSkillType);
    switch (skills.newSkillType) {
      case "frontendSkills":
        newArray = skills.frontendSkills;
        newArray.push(skills.newSkill);
        console.log("new array", newArray);
        setSkills({ ...skills, frontendSkills: newArray, newSkill: "" });
        break;
      case "backendSkills":
        newArray = skills.backendSkills;
        newArray.push(skills.newSkill);
        setSkills({ ...skills, backendSkills: newArray, newSkill: "" });
        break;
      case "otherSkills":
        newArray = skills.otherSkills;
        newArray.push(skills.newSkill);
        setSkills({ ...skills, otherSkills: newArray, newSkill: "" });
        break;
      default:
        break;
    }
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
          <h2 className='about-header'>About</h2>
          <p>
            I'm an Atlanta based Frontend / Fullstack developer excelling in
            problem-solving, building modern applications, and learning all the
            time! Highly motivated self-starter who loves working with people.
            Knowledge in current web development technologies, with an affinity
            for creating dynamic single-page applications. Experience building
            responsive UI's with clean functionality with precise attention to
            design details based on wire frames. Skilled in using backend
            frameworks to create services to deliver and manage data through
            relational databases. Extensive experience in customer service -
            building and maintaining client relationships.
          </p>
          <h2 className='skills-header'>Technologies I Use</h2>
          <div className='skills-container'>
            <div>
              <ul>
                <h3>Frontend:</h3>
                {skills.frontendSkills &&
                  skills.frontendSkills.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
              </ul>
            </div>
            <div>
              <ul>
                <h3>Backend:</h3>
                {skills.backendSkills &&
                  skills.backendSkills.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
              </ul>
            </div>
            <div>
              <ul>
                <h3>Other Competancies:</h3>
                {skills.otherSkills &&
                  skills.otherSkills.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
              </ul>
            </div>
          </div>
          <div className='add-a-new-skill-contianer'>
            {skills.editMode ? (
              <h4 onClick={() => handleSetEditMode()}>
                Click here again to close this form
              </h4>
            ) : (
              <h4 onClick={() => handleSetEditMode()}>
                Click here to add a new skill for me!
              </h4>
            )}
            {skills.editMode && (
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
                  Save Changes
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;

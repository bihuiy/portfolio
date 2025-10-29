import "./Skills.css";
import { FaHtml5 } from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { DiDjango } from "react-icons/di";
import { IoLogoNodejs } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { GrHeroku } from "react-icons/gr";
import { SiNetlify } from "react-icons/si";

export default function Skills() {
  const techSkills = [
    { icon: <FaReact />, name: "React.js" },
    { icon: <BiLogoJavascript />, name: "JavaScript" },
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss3Alt />, name: "CSS" },
    { icon: <FaPython />, name: "Python" },
    { icon: <DiDjango />, name: "Django" },
    { icon: <IoLogoNodejs />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express" },
    { icon: <DiMongodb />, name: "MongoDB" },
    { icon: <BiLogoPostgresql />, name: "PostgreSQL" },
    { icon: <FaGithub />, name: "GitHub" },
    { icon: <GrHeroku />, name: "Heroku" },
    { icon: <SiNetlify />, name: "Netlify" },
  ];

  const softSkills = [
    { name: "Stakeholder management" },
    { name: "Communication" },
    { name: "Teamwork" },
    { name: "Problem-solving" },
    { name: "Attention to detail" },
    { name: "Ownership" },
  ];

  return (
    <div className="skills-section">
      <div className="skills-category">
        <h3 className="skills-title">Technical Skills</h3>
        <div className="skills-grid">
          {techSkills.map((skill) => (
            <div key={skill.name} className="skill-item">
              {skill.icon}
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="skills-category">
        <h3 className="skills-title">Soft Skills</h3>
        <div className="skills-grid">
          {softSkills.map((skill) => (
            <div key={skill.name} className="skill-item soft">
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

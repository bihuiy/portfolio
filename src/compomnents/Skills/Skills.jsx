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
  const skills = [
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
    { name: "Stakeholder Management" },
    { name: "Communication" },
    { name: "Teamwork" },
    { name: "Problem Solving" },
  ];

  return (
    <>
      {/* <h1 className="skills-title">My Skills</h1> */}
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-item">
            {skill.icon}
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}

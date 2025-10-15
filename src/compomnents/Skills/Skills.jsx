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
  return (
    <div className="skills">
      <h1 className="skills-title">My Skills</h1>
      <div className="skills-grid">
        <div className="skill-item">
          <FaReact />
          <p>React.js</p>
        </div>
        <div className="skill-item">
          <BiLogoJavascript />
          <p>JavaScript</p>
        </div>
        <div className="skill-item">
          <FaHtml5 />
          <p>HTML</p>
        </div>
        <div className="skill-item">
          <FaCss3Alt />
          <p>CSS</p>
        </div>
        <div className="skill-item">
          <FaPython />
          <p>Python</p>
        </div>
        <div className="skill-item">
          <DiDjango />
          <p>Django</p>
        </div>
        <div className="skill-item">
          <IoLogoNodejs />
          <p>Node.js</p>
        </div>
        <div className="skill-item">
          <SiExpress />
          <p>Express</p>
        </div>
        <div className="skill-item">
          <DiMongodb />
          <p>MongoDB</p>
        </div>
        <div className="skill-item">
          <BiLogoPostgresql />
          <p>PostgreSQL</p>
        </div>
        <div className="skill-item">
          <FaGithub />
          <p>GitHub</p>
        </div>
        <div className="skill-item">
          <GrHeroku />
          <p>Heroku</p>
        </div>
        <div className="skill-item">
          <SiNetlify />
          <p>Netlify</p>
        </div>
      </div>
    </div>
  );
}

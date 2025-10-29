import "./Homepage.css";
import avatar from "../../assets/avatar.JPG";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMdCloudDownload } from "react-icons/io";
import Skills from "../Skills/Skills";

export default function Homepage() {
  return (
    <>
      <section className="hero">
        <div className="hero-left">
          <h2 className="intro">
            Hello, I'm <span className="highlight">Vivien</span>
          </h2>

          <p className="description">
            I enjoy solving problems through code and building full-stack web
            applications that bring logic and order to life.
          </p>

          <div className="buttons">
            <a
              href="https://github.com/bihuiy"
              target="_blank"
              className="download-btn"
            >
              GitHub <FaGithub />
            </a>
            
              <a href="https://www.linkedin.com/in/bihuiy/" target="_blank" className="socials">
                LinkedIn <FaLinkedin />
              </a>
          
          </div>
        </div>

        <div className="hero-right">
          <div className="avatar-border">
            <div className="avatar-wrapper">
              <img src={avatar} alt="Vivien's avatar" className="avatar" />
            </div>
          </div>
        </div>
      </section>

      <div className="skills">
        <Skills />
      </div>
    </>
  );
}

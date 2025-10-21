import "./Homepage.css";
import avatar from "../../assets/avatar.JPG";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMdCloudDownload } from "react-icons/io";

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
              href="/VivienYangCV.pdf"
              download="VivienYangCV"
              className="download-btn"
            >
              Download CV <IoMdCloudDownload />
            </a>

            <div className="socials">
              <a href="https://github.com/bihuiy" target="_blank">
                GitHub <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/bihuiy/" target="_blank">
                LinkedIn <FaLinkedin />
              </a>
            </div>
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

      <div className="label">
        <div className="label-detail">
          <h2>1</h2>
          <p>
            <span>Years of</span>
            <br />
            <span>experience</span>
          </p>
        </div>
        <div className="label-detail">
          <h2>4</h2>
          <p>
            <span>Projects</span>
            <br />
            <span>completed</span>
          </p>
        </div>
        <div className="label-detail">
          <h2>10</h2>
          <p>
            <span>Technologies</span>
            <br />
            <span>across full-stack development</span>
          </p>
        </div>
        <div className="label-detail">
          <h2>270</h2>
          <p>
            <span>Code</span>
            <br />
            <span>commits</span>
          </p>
        </div>
      </div>
    </>
  );
}

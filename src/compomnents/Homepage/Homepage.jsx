import "./Homepage.css";
import avatar from "../../assets/avatar1.JPG";

export default function Homepage() {
  return (
    <>
      <section className="hero">
        <div className="hero-left">
          <h2 className="intro">
            Hello, I'm <span className="highlight">Vivien</span>
          </h2>

          <p className="description">
            I enjoy crafting elegant digital experiences and building
            user-centered web applications using modern technologies.
          </p>

          <div className="buttons">
            <button className="download-btn">Download CV ⬇️</button>
            <div className="socials">
              <a href="https://github.com/bihuiy" target="_blank">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/bihuiy/" target="_blank">
                LinkedIn
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

      <footer>
        <div className="footer-detail">
          <h2>1</h2>
          <p>
            <span>Years of</span>
            <br />
            <span>experience</span>
          </p>
        </div>
        <div className="footer-detail">
          <h2>4</h2>
          <p>
            <span>Projects</span>
            <br />
            <span>completed</span>
          </p>
        </div>
        <div className="footer-detail">
          <h2>8</h2>
          <p>
            <span>Technology</span>
            <br />
            <span>mastered</span>
          </p>
        </div>
        <div className="footer-detail">
          <h2>500</h2>
          <p>
            <span>Code</span>
            <br />
            <span>commits</span>
          </p>
        </div>
      </footer>
    </>
  );
}

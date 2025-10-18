import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="short-bio">
        <p>
          Hi! Want to have a chat? Send me an email or message me on LinkedIn -
          I usually reply within 24 hours! I'm currently open to full-time and
          freelance opportunities as a junior web engineer
        </p>
      </div>
      <div className="contact-details">
        <div className="contact-item">
          <MdEmail />
          <a href="bihuiy7@gmail.com" target="_blank">
            bihuiy7@gmail.com
          </a>
        </div>
        <div className="contact-item">
          <FaLinkedin />
          <a href="https://www.linkedin.com/in/bihuiy/" target="_blank">
            /in/bihuiy
          </a>
        </div>
        <div className="contact-item">
          <FaGithub />
          <a href="https://github.com/bihuiy" target="_blank">
            /bihuiy
          </a>
        </div>
      </div>
    </footer>
  );
}

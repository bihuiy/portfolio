import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "./ContactPage.css";

export default function ContactPage() {
  return (
    <div className="contact">
      <div className="contact-bio">
        <h2>Thanks for stopping by and exploring my work!</h2>
        <h2>
          If you'd like to connect or chat about developer opportunities, feel
          free to reach out using the links below. I'm currently open to
          full-time and freelance opportunities as a junior web engineer.
        </h2>
      </div>
      <div className="contact-details">
        <div className="contact-item">
          <MdEmail />
          <a href="mailto:bihuiy7@gmail.com">
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
    </div>
  );
}

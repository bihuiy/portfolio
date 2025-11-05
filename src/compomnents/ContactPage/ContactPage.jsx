import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "./ContactPage.css";

export default function ContactPage() {
  return (
    <>
      <div className="contact">
        <div className="contact-bio">
          <h1>Thanks for stopping by and exploring my work!</h1>
          <h2>
            If you'd like to connect or chat about developer opportunities, feel
            free to reach out using the links below. I'm currently open to
            full-time and freelance opportunities as a junior web engineer.
          </h2>
        </div>
        <div className="contact-page buttons">
          <a href="mailto:bihuiy7@gmail.com" className="download-btn">
            Email <MdEmail />
          </a>
          <a
            href="https://github.com/bihuiy"
            target="_blank"
            className="download-btn"
          >
            GitHub <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/bihuiy/"
            target="_blank"
            className="download-btn"
          >
            LinkedIn <FaLinkedin />
          </a>
        </div>
      </div>
    </>
  );
}

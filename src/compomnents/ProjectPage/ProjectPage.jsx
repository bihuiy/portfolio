import { useEffect, useState } from "react";
import "./ProjectPage.css";
import { BsArrowUpRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import arrowicon from "../../assets/arrowicon.png";
import leaf from "../../assets/leaf.png";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

export default function ProjectPage() {
  const projects = [
    {
      id: 1,
      title: "Petrol Spy",
      subtitle: "Full Stack Petrol Price Tracking Web Application",
      deployLink: "http://petrolspy.netlify.app/",
      githubFrontend: "https://github.com/bihuiy/petrol-spy-frontend",
      githubBackend: "https://github.com/bihuiy/petrol-spy-backend",
      date: "9-day duration",
      type: "Solo Project",
      description: [
        "Designed and developed a full-stack web application that helps users track real-time petrol prices and manage their favorite stations.",
        "Integrated the free Petrol Stations API provided by the NSW Government.",
      ],
      technology: "Tech Stack: Python, Django, PostgreSQL, React.js.",
      video:
        "https://res.cloudinary.com/dnycwkg4c/video/upload/v1760584189/petrolspyrecording_dfvgcw.mov",
    },
    {
      id: 2,
      title: "Amplify",
      subtitle: "Full Stack Music Player Web Application",
      deployLink: "http://amplify-zone.netlify.app/",
      githubFrontend: "https://github.com/bihuiy/Music-Player-FrontEnd",
      githubBackend: "https://github.com/bihuiy/Music-Player-api",
      date: "10-day duration",
      type: "Pair Project",
      description: [
        "Designed and developed a full-stack web application that allows users to discover, listen to, and manage playlists and songs.",
        "This is a group project completed by two people. I contributed mainly to the Homepage, Song, and Profile features.",
      ],
      technology: "Tech Stack: React.js, Express.js, MongoDB.",
      video:
        "https://res.cloudinary.com/dnycwkg4c/video/upload/v1760596330/AmplifyRecording_qrkfaj.mov",
    },
    {
      id: 3,
      title: "MusicMood",
      subtitle: "Full Stack Music Playlist Web Application",
      deployLink: "https://mymusicmood.netlify.app/",
      githubFrontend: "https://github.com/bihuiy/MusicMood",
      githubBackend: "",
      date: "1-week duration",
      type: "Solo Project",
      description: [
        "Designed and developed a full-stack CRUD application that creates an immersive space where users can share their emotional experiences and feelings about the music they love.",
        "Implemented with secure user authentication, interactive playlists, and relational database design to manage user-generated content efficiently",
      ],
      technology: "Tech Stack: Express, MongoDB, EJS.",
      video:
        "https://res.cloudinary.com/dnycwkg4c/video/upload/v1760595427/MusicmoodRecording_k7mnob.mov",
    },
    {
      id: 4,
      title: "Frogger",
      subtitle: "Browser-based Frogger-style Arcade Action Game",
      deployLink: "http://bihuiy.github.io/Frogger/",
      githubFrontend: "https://github.com/bihuiy/Frogger",
      githubBackend: "",
      date: "1-week duration",
      type: "Solo Project",
      description: [
        "Designed and developed a browser-based game that allows users to use arrow keys to move the frogs to their homes by avoiding cars and jumping on logs.",
        "Built this game as my first project in the General Assembly Software Engineering Bootcamp, applying JavaScript DOM manipulation and JavaScript Array Iterator Methods.",
      ],
      technology: "Tech Stack: HTML, CSS, and JavaScript.",
      video:
        "https://res.cloudinary.com/dnycwkg4c/video/upload/v1760613336/Froggerrecording_aukczp.mov",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentProject = projects[currentIndex];
  const totalProject = projects.length;
  const [animating, setAnimating] = useState(false);

  const handleClick = (index) => {
    setAnimating(true);

    setTimeout(() => {
      setCurrentIndex(index);
      setAnimating(false);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalProject);
        setAnimating(false);
      }, 500);
    }, 30000);
    return () => clearInterval(interval);
  }, [totalProject]);

  let dots = [];
  for (let i = 0; i < totalProject; i++) {
    const isActive = i === currentIndex;
    dots.push(
      <img
        key={i}
        src={leaf}
        alt={isActive ? "active leaf" : "inactive leaf"}
        className={`leaf-icon ${isActive ? "active" : ""}`}
        onClick={() => handleClick(i)}
      ></img>
    );
  }

  return (
    <>
      <div className="project-container">
        <div className={`project-detail ${animating ? "" : "active"}`}>
          <div className="project-title">
            <h1>
              {`0${currentProject.id}.`} {currentProject.title}
            </h1>
          </div>
          <h2>{currentProject.subtitle}</h2>
          <h3>
            {currentProject.date}
            <span className="type">{currentProject.type}</span>
          </h3>
          <ul>
            {currentProject.description.map((item, index) => (
              <li key={index} className="project-item">
                {item}
              </li>
            ))}
          </ul>
          <h3>{currentProject.technology}</h3>
          <div className="project-links">
            <span
              data-tooltip-id="tooltip-Demo"
              data-tooltip-content="Live Demo"
              className="project-links"
            >
              <a href={currentProject.deployLink} target="_blank">
                <BsArrowUpRight />
              </a>
              <Tooltip id="tooltip-Demo" />
            </span>

            <span
              data-tooltip-id="tooltip-GitHub"
              data-tooltip-content="GitHub"
              className="project-links"
            >
              <a href={currentProject.githubFrontend} target="_blank">
                <FaGithub />
              </a>
              <Tooltip id="tooltip-GitHub" />
            </span>

            <span
              data-tooltip-id="tooltip-Backend"
              data-tooltip-content="GitHub Backend"
              className="project-links"
            >
              {currentProject.githubBackend && (
                <a href={currentProject.githubBackend} target="_blank">
                  <FaGithub />
                </a>
              )}
              <Tooltip id="tooltip-Backend" />
            </span>
          </div>
        </div>
        <div className={`project-display ${animating ? "" : "active"}`}>
          <video
            key={currentProject.id}
            controls
            autoPlay
            muted
            playsInline
            className={`project-video ${animating ? "" : "active"}`}
          >
            <source src={currentProject.video} type="video/mp4" />
          </video>
          <div className={`project-actions ${animating ? "" : "active"}`}>
            <div className="pagination-dots">{dots}</div>
            <img src={arrowicon} alt="greenarrow" className="green-arrow" />
            <p>
              Click{" "}
              <img src={leaf} alt="inactive leaf" className="leaf-logo"></img>{" "}
              to check out the next project
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

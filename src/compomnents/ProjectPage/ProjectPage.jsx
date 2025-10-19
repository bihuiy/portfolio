import { useState } from "react";
import "./ProjectPage.css";
import { IoMdArrowDropleftCircle } from "react-icons/io";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { BsArrowUpRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

export default function ProjectPage() {
  const projects = [
    {
      id: 1,
      title: "Petrol Spy",
      subtitle: "Full Stack Petrol Price Tracking Web Application",
      deployLink: "http://petrolspy.netlify.app/",
      githubFrontend: "https://github.com/bihuiy/petrol-spy-frontend",
      githubBackend: "https://github.com/bihuiy/petrol-spy-backend",
      date: "27th Aug - 5th Sep 2025",
      type: "Solo Project",
      description: [
        "Designed and developed a full-stack web application that helps users track real-time petrol prices and manage their favorite stations.",
        "Integrated the free Petrol Stations API provided by the NSW Government.",
      ],
      technology: "Technology used: Python, Django, PostgreSQL, React.js.",
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
      date: "7th Aug - 18th Aug 2025",
      type: "Pair Project",
      description: [
        "Designed and developed a full-stack web application that allows users to discover, listen to, and manage playlists and songs.",
        "This is a group project completed by two people. I contributed mainly to the Homepage, Song, and Profile features.",
      ],
      technology: "Technology used: React.js, Express.js, MongoDB.",
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
      date: "18th Jul - 25th Jul 2025",
      type: "Solo Project",
      description: [
        "Designed and developed a full-stack CRUD application that creates an immersive space where users can share their emotional experiences and feelings about the music they love.",
        "Implemented with secure user authentication, interactive playlists, and relational database design to manage user-generated content efficiently",
      ],
      technology: "Technology used: Express, MongoDB, EJS.",
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
      date: "27th Jun - 4th Jul 2025",
      type: "Solo Project",
      description: [
        "Designed and developed a browser-based game that allows users to use arrow keys to move the frogs to their homes by avoiding cars and jumping on logs.",
        "Built this game as my first project in the General Assembly Software Engineering Bootcamp, applying JavaScript DOM manipulation and JavaScript Array Iterator Methods.",
      ],
      technology: "Technology used: HTML, CSS, and JavaScript.",
      video:
        "https://res.cloudinary.com/dnycwkg4c/video/upload/v1760613336/Froggerrecording_aukczp.mov",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentProject = projects[currentIndex];
  const totalProject = projects.length;

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  let dots = [];
  for (let i = 0; i < totalProject; i++) {
    dots.push(
      <span
        className={i === currentIndex ? "dot active" : "dot"}
        key={i}
        onClick={() => handleClick(i)}
      ></span>
    );
  }

  return (
    <div className="project-container">
      <div className="project-detail">
        <div className="project-title">
          <h1>{`0${currentProject.id}`}</h1>
          <h2>{currentProject.title}</h2>
        </div>
        <h3>{currentProject.subtitle}</h3>
        <p>
          {currentProject.date}
          <span className="type">{currentProject.type}</span>
        </p>
        <ul>
          {currentProject.description.map((item, index) => (
            <li key={index} className="project-item">
              {item}
            </li>
          ))}
        </ul>
        <h4>{currentProject.technology}</h4>
        <a href={currentProject.deployLink} target="_blank">
          <BsArrowUpRight />
        </a>
        <a href={currentProject.githubFrontend} target="_blank">
          <FaGithub />
        </a>
        {currentProject.githubBackend && (
          <a href={currentProject.githubBackend} target="_blank">
            <FaGithub />
          </a>
        )}
      </div>
      <div className="project-display">
        <video
          key={currentProject.id}
          controls
          autoPlay
          muted
          playsInline
          className="project-video"
        >
          <source src={currentProject.video} type="video/mp4" />
        </video>
        <div className="pagination-dots">{dots}</div>
      </div>
    </div>
  );
}

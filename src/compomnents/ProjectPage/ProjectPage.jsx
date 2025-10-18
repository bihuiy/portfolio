import { useState } from "react";
import "./ProjectPage.css";
import { IoMdArrowDropleftCircle } from "react-icons/io";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { BsArrowUpRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import Footer from "../Footer/Footer";

export default function ProjectPage() {
  const projects = [
    {
      id: 1,
      title: "Petrol Spy",
      subtitle: "Full Stack Petrol Price Tracking Web Application",
      githubFrontend: "",
      githubBackend: "",
      date: "27th Aug - 5th Sep 2025 | Solo Project",
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
      githubFrontend: "",
      githubBackend: "",
      date: "7th Aug - 18th Aug 2025 | Pair Project",
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
      githubFrontend: "",
      githubBackend: "",
      date: "18th Jul - 25th Jul 2025 | Solo Project",
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
      githubFrontend: "",
      githubBackend: "",
      date: "27th Jun - 4th Jul 2025 | Solo Project",
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

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div className="project-container">
        <div className="project-detail">
          <h1>{`0${currentProject.id}`}</h1>
          <h2>{currentProject.title}</h2>
          <h3>{currentProject.subtitle}</h3>
          <p>{currentProject.githubFrontend}</p>
          <p>{currentProject.githubBackend}</p>
          <p>{currentProject.date}</p>
          <ul>
            {currentProject.description.map((item, index) => (
              <li key={index} className="project-item">
                {item}
              </li>
            ))}
          </ul>
          <h4>{currentProject.technology}</h4>
          <a href="http://petrolspy.netlify.app/">
            <BsArrowUpRight />
          </a>
          <a href="https://github.com/bihuiy">
            <FaGithub />
          </a>
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
          <div className="project-buttons">
            <button onClick={handlePrev}>
              <IoMdArrowDropleftCircle />
            </button>
            <button onClick={handleNext}>
              <IoMdArrowDroprightCircle />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

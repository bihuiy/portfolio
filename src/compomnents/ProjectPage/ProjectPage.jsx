import { useState } from "react";

export default function ProjectPage() {
  const projects = [
    {
      id: 1,
      title: "Petrol Spy",
      subtitle: "Full Stack Petrol Price Tracking Web Application",
      githubFrontend: "",
      githubBackend: "",
      date: "27th Aug - 5th Sep 2025 | Solo Project",
      description: `
      • Designed and developed a full-stack web application that helps users track real-time petrol prices and manage their favorite stations.
      • Integrated the free Petrol Stations API provided by the NSW Government.
      • Technology used: Python, Django, PostgreSQL, React.js.`,
      video: "",
    },
    {
      id: 2,
      title: "Amplify",
      subtitle: "Full Stack Music Player Web Application",
      githubFrontend: "",
      githubBackend: "",
      date: "7th Aug - 18th Aug 2025 | Pair Project",
      description: `
      • Designed and developed a full-stack web application that allows users to discover, listen to, and manage playlists and songs.
      • Contributed mainly to the Homepage, Song, and Profile features.
      • Technology used: React.js, Express.js, MongoDB.`,
      video: "",
    },
    {
      id: 3,
      title: "MusicMood",
      subtitle: "Full Stack Music Playlist Web Application",
      githubFrontend: "",
      githubBackend: "",
      date: "18th Jul - 25th Jul 2025 | Solo Project",
      description: `
      • Designed and developed a full-stack CRUD application that creates an immersive space where users can share their emotional experiences and feelings about the music they love.
      • Implemented with secure user authentication, interactive playlists, and relational database design to manage user-generated content efficiently
      • Technology used: Express, MongoDB, EJS.`,
      video: "",
    },
    {
      id: 4,
      title: "Frogger",
      subtitle: "Browser-based Frogger-style Arcade Action Game",
      githubFrontend: "",
      githubBackend: "",
      date: "27th Jun - 4th Jul 2025 | Solo Project",
      description: `
      • Designed and developed a browser-based game that allows users to use arrow keys to move the frogs to their homes by avoiding cars and jumping on logs.
      • Built this game as my first project in the General Assembly Software Engineering Bootcamp, applying JavaScript DOM manipulation and JavaScript Array Iterator Methods.
      • Technology used: HTML, CSS, and JavaScript.`,
      video: "",
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
    <div className="project-container">
      <div className="project-detail">
        <h1>{currentProject.id}</h1>
        <h2>{currentProject.title}</h2>
        <h3>{currentProject.subtitle}</h3>
        <p>{currentProject.githubFrontend}</p>
        <p>{currentProject.githubBackend}</p>
        <p>{currentProject.date}</p>
        <p>{currentProject.description}</p>
      </div>
      <div className="project-display">
        <video src={currentProject.video} />
        <button onClick={handlePrev}>left arrow</button>
        <button onClick={handleNext}>right arrow</button>
      </div>
    </div>
  );
}

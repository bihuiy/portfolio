import { useState, useEffect } from "react";
import "./LogoTitle.css";

export default function LogoTitle() {
  const roles = [
    "<🖊️>",
    "Full-Stack Developer",
    "React.js Developer",
    "Node.js Developer",
    "Python & Django Developer",
    "JavaScript Developer",
    "MongoDB Developer",
    "HTML5 & CSS3 Developer",
    "Web Developer",
    "Project Manager",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="logo-display">
      <div className="logo-name">
        <h2>
          VIVIEN
          <br />
          YANG
        </h2>
      </div>
      <h2 key={index} className="flashing-title">
        {roles[index]}
      </h2>
    </div>
  );
}

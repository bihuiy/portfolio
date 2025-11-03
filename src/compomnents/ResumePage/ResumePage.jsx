import { useState } from "react";
import "./ResumePage.css";
import Experience from "../Experience/Experience";
import Education from "../Education/Education";

export default function ResumePage() {
  const [activeSection, setActiveSection] = useState("Experience");
  const [animating, setAnimating] = useState(false);

  const sections = ["Experience", "Education"];

  const renderContent = () => {
    switch (activeSection) {
      case "Experience":
        return <Experience />;
      case "Education":
        return <Education />;
    }
  };

  const handleClick = (section) => {
    if (section === activeSection) return;
    setAnimating(true);

    setTimeout(() => {
      setActiveSection(section);
      setAnimating(false);
    }, 300);
  };

  return (
    <div className="resume">
      <div className="resume-sidebar">
        {sections.map((section) => (
          <button
            key={section}
            className={`resume-tab ${
              activeSection === section ? "active" : ""
            }`}
            onClick={() => handleClick(section)}
          >
            {section}
          </button>
        ))}
      </div>
      <div className={`resume-content ${animating ? "" : "active"}`}>
        {renderContent()}
      </div>
    </div>
  );
}

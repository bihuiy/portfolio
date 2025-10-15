import { useState } from "react";
import "./ResumePage.css";
import Experience from "../Experience/Experience";
import Education from "../Education/Education";
import Skills from "../Skills/Skills";
import AboutMe from "../AboutMe/AboutMe";

export default function ResumePage() {
  const [activeSection, setActiveSection] = useState("Experience");

  const sections = ["Experience", "Skills", "Education", "About me"];

  const renderContent = () => {
    switch (activeSection) {
      case "Experience":
        return <Experience />;
      case "Skills":
        return <Skills />;
      case "Education":
        return <Education />;
      case "About me":
        return <AboutMe />;
    }
  };

  return (
    <section className="resume">
      <div className="resume-sidebar">
        {sections.map((section) => (
          <button
            key={section}
            className={`resume-tab ${
              activeSection === section ? "active" : ""
            }`}
            onClick={() => setActiveSection(section)}
          >
            {section}
          </button>
        ))}
      </div>
      <div className="resume-content">{renderContent()}</div>
    </section>
  );
}

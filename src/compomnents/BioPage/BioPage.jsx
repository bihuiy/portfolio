import { useState } from "react";
import AboutMe from "../AboutMe/AboutMe";
import MyJourney from "../MyJourney/MyJourney";
import TruthsLies from "../TruthsLies/TruthsLies";
import "./BioPage.css";

export default function BioPage() {
  const [activeSection, setActiveSection] = useState("My Journey");
  const [animating, setAnimating] = useState(false);

  const sections = [
    /* "About Me", */
    "My Journey",
    "Three Truths and a Lie",
  ];

  const renderContent = () => {
    switch (activeSection) {
      /* case "About Me":
        return <AboutMe />; */
      case "My Journey":
        return <MyJourney />;
      case "Three Truths and a Lie":
        return <TruthsLies />;
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
    <div className="bio-page">
      <div className="bio-sidebar">
        {sections.map((section) => (
          <button
            key={section}
            className={`bio-tab ${activeSection === section ? "active" : ""}`}
            onClick={() => handleClick(section)}
          >
            {section}
          </button>
        ))}
      </div>
      <div className={`bio-content ${animating ? "" : "active"}`}>
        {renderContent()}
      </div>
    </div>
  );
}

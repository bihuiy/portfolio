import { useState } from "react";
import "./MyJourney.css";

export default function MyJourney() {
  const [activeItem, setActiveItem] = useState(null);

  const data = [
    {
      id: "01",
      title: "In high school",
      text: "Math was my favorite subject. I've been drawn to logic so much that I could lose track of time solving math problems, fascinated by how clear reasoning could turn complex questions into elegant answers.",
      side: "right",
      color: "#cceecf",
    },
    {
      id: "02",
      title: "When I started my career",
      text: "I stepped into project management in telecommunications because I believe it is connected to my technical background. Also, I'd like to challenge myself. I wanted to prove that I could succeed even in areas that didn't come naturally to me. And I did.",
      side: "left",
      color: "#22c55e",
    },
    {
      id: "03",
      title: "As a project manager",
      text: "Over the years, I managed multiple stakeholders, coordinated different teams, and ensured project delivery. I independently led large-scale projects from scratch and later became a subject matter expert. Through these experiences, I grew tremendously.",
      side: "right",
      color: "#6edb8a",
    },
    {
      id: "04",
      title: "What truly excited me",
      text: "As I became more capable, I began to notice: I felt most alive when I was immersed in the logical structure of a project. That love for logic always took me back to the flow state while solving math problems. I realized that while a great project manager keeps things running smoothly, what I truly wanted was to drive creation myself.",
      side: "left",
      color: "#a3e6b3",
    },
    {
      id: "05",
      title: "Naturally, this led me to programming",
      text: "I completed the Software Engineering Immersive at General Assembly. Learning to code felt like reconnecting with a long-lost passion. It fulfilled my desire for logic: a clearly defined problem, a solution I built myself, and immediate, tangible feedback.",
      side: "right",
      color: "#d9e3db",
    },
    {
      id: "06",
      title: "Junior software engineer",
      text: "My previous PM experience allows me to better understand requirements and manage development processes. I aim to bring my technical skills, logical approach, and collaborative mindset to a junior software engineer role, where I can continue to grow, create value, and contribute meaningfully to my team's success.",
      side: "left",
      color: "#16a34a",
    },
  ];

  return (
    <div className="journey-container">
      <div className="timeline">
        {data.map((d) => (
          <div key={d.id} className={`journey-item ${d.side}`}>
            <div className={`journey-icon ${d.side}`}>
              <div className={`journey-subtitle ${d.side}`}>{d.title}</div>
              <div
                className={`journey-circle ${d.side}`}
                style={{ backgroundColor: d.color, color: d.color }}
              >
                <span className="circle-number">{d.id}</span>
              </div>
            </div>
            <div
              className={`journey-text ${d.side}`}
              onClick={() => setActiveItem(d)}
            >
              {d.text}
            </div>
          </div>
        ))}
      </div>

      {activeItem && (
        <div className="popup-overlay" onClick={() => setActiveItem(null)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setActiveItem(null)}>
              ✕
            </button>
            <h3>{`${activeItem.id}. ${activeItem.title}`}</h3>
            <p>{activeItem.text}</p>
          </div>
        </div>
      )}
    </div>
  );
}

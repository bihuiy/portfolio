import "./TruthsLies.css";
import { useState } from "react";
import avatar from "../../assets/avatar.png";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

export default function TruthsLies() {
  const [activeItem, setActiveItem] = useState(null);

  const data = [
    {
      id: "01",
      position: "top",
      color: "",
      truth:
        "I spent a year learning Latin dance and passed my Bronze exam, where most of my fellow test-takers were five-year-olds 💃.",
      answer:
        "01. This one's true! I did spend a year learning Latin dance and passed my Bronze exam. But to be fair, it's the beginner level. Most of my fellow test-takers were around five years old, and literally everyone passes. Still, I worked really hard… mostly because my instructor said it would look bad on him if I failed 🤣.",
      video:
        "https://res.cloudinary.com/dnycwkg4c/video/upload/v1760755539/latindance_enhmup.mov",
    },
    {
      id: "02",
      position: "right",
      color: "",
      truth:
        "I've been snowboarding for two years, and now I can barely make it down a blue run 🏂.",
      answer:
        "02. Yep, the second one is true. After two years, I've graduated from falling on greens to almost not falling on blues.",
      video:
        "https://res.cloudinary.com/dnycwkg4c/video/upload/v1760754213/snowboarding_jluz8z.mov",
    },
    {
      id: "03",
      position: "bottom",
      color: "",
      truth:
        "I took the Software Engineering Immersive wearing a fluffy hoodie, while my classmates and instructor were all in short sleeves.",
      answer:
        "03. The third one's true. We had remote classes and they were based in UK. So while it was summer there, it was winter here in Australia. Time zones weren't the only thing that separated us, the seasons did too!",
    },
    {
      id: "04",
      position: "left",
      color: "",
      truth: "I have a dog.",
      answer:
        "04. Okay, you got me! The dog isn't mine. That's Moca, my friend's fluffy superstar. My love for dogs and cats is 100% real. So please do me a favor and send me photos of your furry friends, it'll make my day!",
    },
  ];

  return (
    <div className="truth-lie-container">
      {/* <h2 className="truth-lie-title">3 Truths and a Lie</h2> */}
      <div className="circle-container">
        <img src={avatar} alt="avatar" className="center-photo" />

        {data.map((d) => (
          <div
            className="truth-lie-item"
            style={{ backgroundColor: d.color }}
            onClick={() => setActiveItem(d)}
          >
            <h3 className={`truth-lie-number ${d.position}`}>{d.id}</h3>
            <p
              className={`truth-text ${d.position}`}
              data-tooltip-id="tooltip-truth"
              data-tooltip-content="Did you guess it right?"
            >
              {d.truth}
              <Tooltip id="tooltip-truth" />
            </p>
          </div>
        ))}
      </div>

      {activeItem && (
        <div className="popup-overlay" onClick={() => setActiveItem(null)}>
          <div
            className="popup-content truth"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={() => setActiveItem(null)}>
              ✕
            </button>
            <p>{activeItem.answer}</p>
            {activeItem.video && (
              <video
                key={activeItem.id}
                controls
                autoPlay
                muted
                playsInline
                className="bio-video"
              >
                <source src={activeItem.video} type="video/mp4" />
              </video>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

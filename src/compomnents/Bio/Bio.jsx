import { useState } from "react";
import "./Bio.css";

export default function AboutMe() {
  const bios = [
    {
      id: 1,
      title: "About Me",
      description: [
        `I enjoy solving complex problems through code and building full-stack
        web applications that bring logic and order to life. My background as a
        project manager in telecommunications taught me to coordinate teams,
        anticipate risks, and communicate efficiently, and I specialised in
        analysing customers'internet and multiline phone numbers service
        configurations to design the most effective migration solutions.`,
        `However what truly excites me is creating systems myself, from a problem
        to a working solution. This love for logic, inspired me to make the move
        into software engineering, led me to complete the General Assembly
        Software Engineering Immersive, where I gained hands-on experience with
        JavaScript, Python, React, Node.js, and full-stack development.`,
        `I am eager to bring my technical skills, logical approach, and
        collaborative mindset to a junior software engineer role where I can
        continue to grow, deliver value, and support my team's success.`,
      ],
    },
    {
      id: 2,
      title: "My Journey",
      description: [
        `In high school, math was my favorite subject. I've been drawn to logic so much that I could lose track of time solving math problems, fascinated by how clear reasoning could turn complex questions into elegant answers.`,
        `But when I started my career, I didn't yet understand what truly motivated me. I stepped into project management in telecommunications because I believe it is connected to my technical background. Also, I'd like to challenge myself. I wanted to prove that I could succeed even in areas that didn't come naturally to me. And I did.`,
        `Over the years, I managed multiple stakeholders, coordinated different teams, and ensured project delivery. I independently led large-scale projects from scratch and later became a subject matter expert. Through these experiences, I grew tremendously.`,
        `I used to feel anxious about waiting for results, which pushed me to take initiative, anticipate risks, and create contingency plans to steer projects in the right direction. I used to find communication exhausting, which pushed me to develop more efficient strategies, providing clear options instead of open-ended questions, and leveraging experience to shorten decision-making paths.`,
        `Yet, as I became more capable, I began to notice what truly excited me: I felt most alive when I was immersed in the logical structure of a project, bringing order to chaos. That love for logic always took me back to the flow state I experienced in middle school while solving math problems. I realized that while a great project manager keeps things running smoothly, what I truly wanted was to drive creation myself. I no longer wanted to just assign tasks and track progress, I needed to build something of my own, from my own ideas.`,
        `Naturally, this led me to programming. I completed the Software Engineering Immersive at General Assembly, deepening my skills in JavaScript, React.js, Python, Django, MongoDB, HTML, and CSS. Through individual and team projects, labs, online lessons, and daily stand-ups, I gained hands-on experience building full-stack applications and developed both technical and collaborative abilities.`,
        `Learning to code felt like reconnecting with a long-lost passion. It fulfilled my desire for logic: a clearly defined problem, a solution I built myself, and immediate, tangible feedback. My previous PM experience allows me to better understand requirements and manage development processes, and now I want to be the person sitting at the computer, turning abstract requirements into concrete, functional systems. I aim to bring my technical skills, logical approach, and collaborative mindset to a junior software engineer role, where I can continue to grow, create value, and contribute meaningfully to my team's success.`,
      ],
    },
    {
      id: 3,
      title: "Three Truths and a Lie",
      description: [
        `1. I spent a year learning Latin dance and passed my Bronze exam, where most of my fellow test-takers were five-year-olds 💃`,
        `2. I've been snowboarding for two years, and now I can barely make it down a blue run 🏂`,
        `3. I took the Software Engineering Immersive wearing a fluffy hoodie, while my classmates and instructor were all in short sleeves.`,
        `4. I have a Coke once a week. Yes, the drink, not--`,
      ],
    },
    {
      id: 4,
      title: "Did you guess it right?",
      description: [
        `1. This one's true! I did spend a year learning Latin dance and passed my Bronze exam. But to be fair, it's the beginner level. Most of my fellow test-takers were around five years old, and literally everyone passes. Still, I worked really hard… mostly because my instructor said it would look bad on him if I failed.`,
        `2. Yep, the second one is true. After two years, I've graduated from falling on greens to almost not falling on blues`,
        `3. The third one's true. We had remote classes and they were based in UK. So while it was summer there, it was winter here in Australia. Time zones weren't the only thing that separated us, the seasons did too!`,
        `4. And yes, the last one was the lie 🤣. I don't have a weekly Coke, I actually drink it whenever the mood strikes me, which isn't very often.`,
      ],
      video1:
        "https://res.cloudinary.com/dnycwkg4c/video/upload/v1760754213/snowboarding_jluz8z.mov",
      video2:
        "https://res.cloudinary.com/dnycwkg4c/video/upload/v1760755539/latindance_enhmup.mov",
    },
  ];

  const [bioIndex, setBioIndex] = useState(0);
  const currentBio = bios[bioIndex];
  const totalPage = bios.length;
  const [animating, setAnimating] = useState(false);

  const handleClick = (index) => {
    setBioIndex(index);
    setAnimating(true);

    setTimeout(() => {
      setBioIndex(index);
      setAnimating(false);
    }, 300);
  };

  let dots = [];
  for (let i = 0; i < totalPage; i++) {
    dots.push(
      <span
        className={i === bioIndex ? "dot active" : "dot"}
        key={i}
        onClick={() => handleClick(i)}
      ></span>
    );
  }

  return (
    <div
      key={currentBio.id}
      className={`about-me ${animating ? "" : "active"}`}
    >
      <h1 className="about-me-title">{currentBio.title}</h1>
      <div className="about-me-description">
        {currentBio.description.map((item, index) => (
          <div key={index} className="about-me-item">
            {item}
          </div>
        ))}
      </div>
      <div className="pagination-dots">{dots}</div>
      <div>
        {currentBio.video1 && (
          <video
            key={currentBio.id}
            controls
            autoPlay
            muted
            playsInline
            className="about-me-video"
          >
            <source src={currentBio.video1} type="video/mp4" />
          </video>
        )}
        {currentBio.video2 && (
          <video
            key={currentBio.id}
            controls
            autoPlay
            muted
            playsInline
            className="about-me-video"
          >
            <source src={currentBio.video2} type="video/mp4" />
          </video>
        )}
      </div>
    </div>
  );
}

import "./AboutMe.css";

export default function AboutMe() {
  const details = {
    id: 1,
    title: "About Me",
    description: [
      `I enjoy solving complex problems through code and building full-stack
        web applications that bring logic and order to life. My background as a
        project manager in telecommunications taught me to coordinate teams,
        anticipate risks, and communicate efficiently, and I specialised in
        analysing customers' internet and multiline phone service
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
  };

  return (
    <div className="about-me">
      <h1 className="about-me-title">{details.title}</h1>
      <div className="about-me-description">
        {details.description.map((item, index) => (
          <div key={index} className="about-me-item">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

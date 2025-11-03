import "./Experience.css";

export default function Experience() {
  const experience = [
    {
      id: 1,
      role: "Software Engineering Immersive Course",
      company: "General Assembly",
      location: "Remote",
      time: "2025",
      description: [
        `Developed and deployed four projects, including three full-stack
          applications, through individual and team-based sprints using Agile
          methodologies.`,
        `Participated in daily stand-ups, labs, and collaborative development
          processes to enhance both front-end and back-end programming
          proficiency as well as teamwork skills.`,
      ],
    },
    {
      id: 2,
      role: "Junior Project Manager",
      company: "Efiniti Telecommunications",
      location: "Sydney, Australia",
      time: "Dec 2019 - Sep 2024",
      description: [
        `Oversaw end-to-end planning, implementation, and delivery of
          multiple large-scale business and technical projects for high-profile
          client Optus using Waterfall and Agile methodologies, driving
          operational excellence and stakeholder satisfaction.`,
        `Provided high level strategic support to cross-functional teams,
          including customer project managers, engineers, and account managers,
          to define project scope, identify priorities, and track milestones in
          the context of ambiguous project requirements.`,
      ],
    },
    {
      id: 3,
      role: "IT Support Intern",
      company: "EnerSys",
      location: "Melbourne, Australia",
      time: "Sep 2019 - Dec 2019",
      description: [
        `Engaged with internal and external stakeholders to understand
          business requirements and provide IT solutions.`,
        `Set up hardware, upgraded software, and resolved technical issues to
          ensure operational efficiency.`,
      ],
    },
  ];

  return (
    <div className="experience">
      <h1 className="experience-title">My Experience</h1>
      {experience.map((item) => (
        <div key={item.id} className="experience-item">
          <div className="experience-line-one">
            <div className="experience-role">{item.role}</div>
            <div className="experience-time">{item.time}</div>
          </div>
          <div className="experience-line-two">
            <div>{item.company}</div>
            <div>{item.location}</div>
          </div>
          <div className="experience-details">
            {item.description.map((d, index) => (
              <div key={index} style={{ marginBottom: "1rem" }}>
                {d}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

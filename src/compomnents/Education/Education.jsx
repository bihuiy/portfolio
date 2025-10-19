import "./Education.css";
import generalassemblylogo from "../../assets/generalassemblylogo.jpeg";
import melbourneunilogo from "../../assets/melbourneunilogo.jpeg";
import universityofwollongonglogo from "../../assets/universityofwollongonglogo.jpeg";

export default function Education() {
  const education = [
    {
      id: 1,
      logo: generalassemblylogo,
      alt: "generalassemblylogo",
      major: "Software Engineering Immersive Course",
      school: "General Assembly",
      time: "2025",
      location: "Remote",
    },
    {
      id: 2,
      logo: melbourneunilogo,
      alt: "melbourneunilogo",
      major: "Master of Telecommunications Engineering",
      school: "The University of Melbourne",
      time: "2015 - 2016",
      location: "Melbourne, Australia",
    },
    {
      id: 3,
      logo: universityofwollongonglogo,
      alt: "universityofwollongonglogo",
      major: "Bachelor of Computer Engineering",
      school: "The University of Wollongong",
      time: "2014 - 2015",
      location: "Wollongong, Australia",
    },
  ];

  return (
    <div className="education">
      <h1 className="education-title">Education</h1>
      {education.map((item) => (
        <div key={item.id} className="education-item">
          <div className="education-detail">
            <img src={item.logo} alt={item.alt} />
            <div className="education-col-one">
              <div className="education-major">{item.major}</div>
              <div>{item.school}</div>
            </div>
          </div>
          <div className="education-col-two">
            <div className="education-time">{item.time}</div>
            <div className="education-location">{item.location}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

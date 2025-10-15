import "./Education.css";

export default function Education() {
  return (
    <div className="education">
      <h1 className="education-title">Education</h1>
      <div className="education-item">
        <div className="education-line-one">
          <div className="education-major">
            Software Engineering Immersive Course
          </div>
          <div>Jun 2025 - Sep 2025</div>
        </div>
        <div className="education-line-two">
          <div>General Assembly</div>
          <div>Remote</div>
        </div>
        <div>
          <div>
            • 12-week immersive program where I furthered my programming
            knowledge, focusing on JavaScript, React.js, Python, Django,
            MongoDB, HTML, and CSS
          </div>
          <div>
            • Gained hands-on experience building full-stack applications
            through individual and group projects, labs, online lessons, and
            daily stand-ups, developing both technical and collaborative skills
          </div>
        </div>
      </div>
      <div className="education-item">
        <div className="education-line-one">
          <div>Master of Telecommunications Engineering</div>
          <div>2015 - 2016</div>
        </div>
        <div className="education-line-two">
          <div>The University of Melbourne</div>
          <div>Melbourne, Australia</div>
        </div>
      </div>
      <div className="education-item">
        <div className="education-line-one">
          <div>Bachelor of Computer Engineering</div>
          <div>2014 - 2015</div>
        </div>
        <div className="education-line-two">
          <div>The University of Wollongong</div>
          <div>Wollongong, Australia</div>
        </div>
      </div>
    </div>
  );
}

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
          <div>2025</div>
        </div>
        <div className="education-line-two">
          <div>General Assembly</div>
          <div>Remote</div>
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

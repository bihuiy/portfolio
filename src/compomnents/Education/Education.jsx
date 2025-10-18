import "./Education.css";
import generalassemblylogo from "../../assets/generalassemblylogo.jpeg";
import melbourneunilogo from "../../assets/melbourneunilogo.jpeg";
import universityofwollongonglogo from "../../assets/universityofwollongonglogo.jpeg";

export default function Education() {
  return (
    <div className="education">
      <h1 className="education-title">Education</h1>
      <div className="education-item">
        <div className="education-detail">
          <img src={generalassemblylogo} alt="generalassemblylogo" />
          <div className="education-col-one">
            <div className="education-major">
              Software Engineering Immersive Course
            </div>
            <div>General Assembly</div>
          </div>
        </div>
        <div className="education-col-two">
          <div className="education-time">2025</div>
          <div>Remote</div>
        </div>
      </div>
      <div className="education-item">
        <div className="education-detail">
          <img src={melbourneunilogo} alt="melbourneunilogo" />
          <div className="education-col-one">
            <div className="education-major">
              Master of Telecommunications Engineering
            </div>
            <div>The University of Melbourne</div>
          </div>
        </div>
        <div className="education-col-two">
          <div className="education-time">2015 - 2016</div>
          <div>Melbourne, Australia</div>
        </div>
      </div>
      <div className="education-item">
        <div className="education-detail">
          <img
            src={universityofwollongonglogo}
            alt="universityofwollongonglogo"
          />
          <div className="education-col-one">
            <div className="education-major">
              Bachelor of Computer Engineering
            </div>
            <div>The University of Wollongong</div>
          </div>
        </div>
        <div className="education-col-two">
          <div className="education-time">2014 - 2015</div>
          <div>Wollongong, Australia</div>
        </div>
      </div>
    </div>
  );
}

import "./Navbar.css";
import { Link } from "react-router";
import LogoTitle from "../LogoTitle/LogoTitle";

export default function Navbar() {
  return (
    <header>
      <div className="logo-title">
        <LogoTitle />
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/projects">Project</Link>
        <Link to="/contact">Contact/Hire me</Link>
      </div>
    </header>
  );
}

import "./Navbar.css";
import { NavLink } from "react-router";
import LogoTitle from "../LogoTitle/LogoTitle";

export default function Navbar() {
  return (
    <nav>
      <div className="logo-title">
        <LogoTitle />
      </div>
      <div className="nav-links">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/resume"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Resume
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Project
        </NavLink>
        <NavLink
          to="/bio"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Bio
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

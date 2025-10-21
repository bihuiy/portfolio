// * Page components related
import { Route, Routes } from "react-router";
import Navbar from "./compomnents/Navbar/Navbar";
import Homepage from "./compomnents/Homepage/Homepage";
import ResumePage from "./compomnents/ResumePage/ResumePage";
import ProjectPage from "./compomnents/ProjectPage/ProjectPage";
import ContactPage from "./compomnents/ContactPage/ContactPage";

// * Google analytics related
import ReactGA from "react-ga4";
import { useEffect } from "react";
import { useLocation } from "react-router";

function App() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize("G-VV6BQRZB7F");
  }, []);

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;

import { Route, Routes } from "react-router";

import Navbar from "./compomnents/Navbar/Navbar";
import Homepage from "./compomnents/Homepage/Homepage";
import ResumePage from "./compomnents/ResumePage/ResumePage";
import ProjectPage from "./compomnents/ProjectPage/ProjectPage";
import ContactPage from "./compomnents/ContactPage/ContactPage";

function App() {
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

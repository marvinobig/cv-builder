import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Nav from "./navbar/NavBar";
import HomePage from "./HomePage";
import CVForm from "./form/CVForm";
import CV from "./CV/CV";
import NoMatch from "./NoMatch";

function RouterSwitch() {
  const [personalInfo, setPersonalInfo] = useState({});
  const [education, setEducation] = useState([]);
  const [work, setWork] = useState([]);
  const [skill, setSkill] = useState([]);

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/cv-builder" element={<HomePage />} />
        <Route
          path="/cv-builder/start"
          element={
            <CVForm
              setPersonalInfo={setPersonalInfo}
              setEducation={setEducation}
              setWork={setWork}
              setSkill={setSkill}
              education={education}
              work={work}
              skill={skill}
            />
          }
        />
        <Route
          path="cv-builder/create"
          element={
            <CV
              personalInfo={personalInfo}
              education={education}
              work={work}
              skill={skill}
            />
          }
        />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterSwitch;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Nav from "./navbar/navbar";
import App from "./main/App";
import CVForm from "./form/CVForm";
import CV from "./CV/CV";

function RouterSwitch() {
  const [personalInfo, setPersonalInfo] = useState({});
  const [education, setEducation] = useState([]);
  const [work, setWork] = useState([]);
  const [skill, setSkill] = useState([]);

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route index element={<App />} />
        <Route
          path="/start"
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
          path="/create"
          element={
            <CV
              personalInfo={personalInfo}
              education={education}
              work={work}
              skill={skill}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterSwitch;

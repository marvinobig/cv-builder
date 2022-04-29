import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./navbar/navbar";
import App from "./main/App";
import CVForm from "./form/CVForm";
import CV from "./CV/CV";

function RouterSwitch() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route index element={<App />} />
        <Route path="/start" element={<CVForm />} />
        <Route path="/create" element={<CV />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterSwitch;

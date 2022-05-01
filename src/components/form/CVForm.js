import { useNavigate } from "react-router-dom";
import "./CVForm.css";

function CVForm(props) {
  const navigate = useNavigate();

  // personal info
  function addPersonalInfo() {
    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const email = document.getElementById("email");
    const telephone = document.getElementById("tel");
    const summary = document.getElementById("summary");

    props.setPersonalInfo({
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      telephone: telephone.value,
      summary: summary.value,
    });

    navigate("/create");
  }

  // education
  function addEducation() {
    const studies = [];
    const institutionInput = document.getElementById("institution");
    const qualificationInput = document.getElementById("qualification");
    const startedInput = document.getElementById("study-started");
    const endedInput = document.getElementById("study-ended");

    studies.push({
      institution: institutionInput.value,
      qualification: qualificationInput.value,
      started: startedInput.value,
      ended: endedInput.value,
    });

    props.setEducation((education) => [...education, ...studies]);

    institutionInput.value = "";
    qualificationInput.value = "";
    startedInput.value = "";
    endedInput.value = "";
  }

  // work
  function addWork() {
    const job = [];
    const companyInput = document.getElementById("company");
    const descriptionInput = document.getElementById("work");
    const startedInput = document.getElementById("work-started");
    const endedInput = document.getElementById("work-ended");

    job.push({
      company: companyInput.value,
      description: descriptionInput.value,
      started: startedInput.value,
      ended: endedInput.value,
    });

    props.setWork((work) => [...work, ...job]);

    companyInput.value = "";
    descriptionInput.value = "";
    startedInput.value = "";
    endedInput.value = "";
  }

  // skills
  function addSkill() {
    const skills = [];
    const skillInput = document.getElementById("skills");

    skills.push(skillInput.value);

    props.setSkill((skill) => [...skill, ...skills]);

    skillInput.value = "";
  }

  return (
    <form className="form" id="form" action="">
      <fieldset>
        <legend>Personal Info</legend>
        <label htmlFor="first-name">First Name</label>
        <input type="text" name="first-name" id="first-name" />

        <label htmlFor="last-name">Last Name</label>
        <input type="text" name="last-name" id="last-name" />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />

        <label htmlFor="tel">Telephone</label>
        <input type="tel" name="tel" id="tel" />

        <label htmlFor="summary">Summary</label>
        <textarea name="summary" id="summary"></textarea>
      </fieldset>

      <fieldset>
        <legend>Education</legend>

        <label htmlFor="institution">Institution</label>
        <input type="text" name="institution" id="institution" />

        <label htmlFor="qualification">Qualification</label>
        <input type="text" id="qualification" name="qualification" />

        <label htmlFor="study-started">Started</label>
        <input type="date" id="study-started" name="study-started" />

        <label htmlFor="study-ended">Ended</label>
        <input type="date" id="study-ended" name="study-ended" />

        <p>You've added: {props.education.length} Education</p>

        <button type="button" className="btn btn--green" onClick={addEducation}>
          Add
        </button>
      </fieldset>

      <fieldset>
        <legend>Work History</legend>

        <label htmlFor="company">Company</label>
        <input type="text" name="company" id="company" />

        <label htmlFor="work">Work Description</label>
        <textarea id="work" name="work"></textarea>

        <label htmlFor="work-started">Started</label>
        <input type="date" id="work-started" name="work-started" />

        <label htmlFor="work-ended">Ended</label>
        <input type="date" id="work-ended" name="work-ended" />

        <p>You've added: {props.work.length} Work</p>

        <button type="button" className="btn btn--green" onClick={addWork}>
          Add
        </button>
      </fieldset>

      <fieldset>
        <legend>Current Skills</legend>

        <label htmlFor="skills">Skilled At</label>
        <input type="text" name="skills" id="skills" />

        <p>You've added: {props.skill.length} Skills</p>

        <button type="button" className="btn btn--green" onClick={addSkill}>
          Add
        </button>
      </fieldset>

      <button
        type="button"
        className="btn btn--green"
        onClick={addPersonalInfo}
      >
        Create
      </button>
    </form>
  );
}

export default CVForm;

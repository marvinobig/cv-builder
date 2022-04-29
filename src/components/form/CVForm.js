import { useNavigate } from "react-router-dom";

function CVForm() {
  const navigate = useNavigate();

  return (
    <form className="form" id="form" action="">
      <fieldset>
        <legend>Personal Info</legend>
        <label htmlFor="first-name">First Name</label>
        <input type="text" name="first-name" id="first-name" required />

        <label htmlFor="last-name">Last Name</label>
        <input type="text" name="last-name" id="last-name" required />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" required />

        <label htmlFor="tel">Telephone</label>
        <input type="tel" name="tel" id="tel" required />

        <label htmlFor="summary">Summary</label>
        <textarea name="summary" id="summary" required></textarea>
      </fieldset>

      <fieldset>
        <legend>Education</legend>

        <label htmlFor="education">Institution</label>
        <input type="text" name="education" id="education" required />

        <label htmlFor="qualification">Qualification</label>
        <input type="text" id="qualification" name="qualification" required />

        <button className="btn btn--green">Add</button>
      </fieldset>

      <fieldset>
        <legend>Work History</legend>

        <label htmlFor="company">Company</label>
        <input type="text" name="company" id="company" required />

        <label htmlFor="work-description">Work Description</label>
        <textarea
          id="work-description"
          name="work-description"
          required
        ></textarea>
        <button className="btn btn--green">Add</button>
      </fieldset>

      <fieldset>
        <legend>Current Skills</legend>

        <label htmlFor="skills">Skilled At</label>
        <input type="text" name="skills" id="skills" required />
        <button className="btn btn--green">Add</button>
      </fieldset>

      <button
        type="submit"
        className="btn btn--green"
        onSubmit={(event) => {
          navigate("/create");
        }}
      >
        Create
      </button>
    </form>
  );
}

export default CVForm;

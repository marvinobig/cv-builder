import "./CV.css";

function CV(props) {
  function print() {
    window.print();
  }

  return (
    <main className="cv">
      <section className="cv__personal">
        <div className="cv__personal__info">
          <p className="cv__personal__info__name">{`${props.personalInfo.firstName} ${props.personalInfo.lastName}`}</p>

          <div className="cv__personal__info__contact">
            <p>{props.personalInfo.email}</p>
            <p>{props.personalInfo.online}</p>
            <p>{props.personalInfo.telephone}</p>
          </div>
        </div>
        <div className="cv__personal__summary">
          <h2 className="cv__personal__summary__title">Summary</h2>
          <p className="cv__personal__summary__info">
            {props.personalInfo.summary}
          </p>
        </div>
      </section>

      <section className="cv__education">
        <h2 className="cv__education__title">Education</h2>

        {props.education.map((study, index) => (
          <div className="cv__education__details" key={index}>
            <div className="cv__education__details__title">
              <h3>{study.institution}</h3>
              <p>
                Start: {study.started} / End: {study.ended}
              </p>
            </div>

            <p className="cv__education__details__qualification">
              {study.qualification}
            </p>
          </div>
        ))}
      </section>

      <section className="cv__work">
        <h2 className="cv__work__title">Work Experience</h2>

        {props.work.map((work, index) => (
          <div className="cv__work__details" key={index}>
            <div className="cv__work__details__title">
              <h3>{work.company}</h3>
              <p>
                Start: {work.started} / End: {work.ended}
              </p>
            </div>

            <p className="cv__work__details__description">{work.description}</p>
          </div>
        ))}
      </section>

      <section className="cv__skills">
        <h2 className="cv__skills__title">Skills</h2>

        <ul className="cv__skills__list">
          {props.skill.map((skill, index) => (
            <li className="cv__skills__list__item" key={index}>
              {skill}
            </li>
          ))}
        </ul>
      </section>

      <section className="cv__action">
        <h1 className="cv__action__title">Share cv</h1>
        <button onClick={print} className="btn btn--green">
          Print
        </button>
      </section>
    </main>
  );
}

export default CV;

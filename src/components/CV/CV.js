function CV(props) {
  function print() {
    window.print();
  }

  return (
    <main className="cv">
      <section className="cv__personal">
        <div className="cv__personal__info">
          <p className="cv__personal__info__name">Marvin Obig</p>

          <div className="cv__personal__info__contact">
            <p>mobig.web@gmail.com</p>
            <p>07599212948</p>
          </div>
        </div>
        <div className="cv__personal__summary">
          <h2 className="cv__personal__summary__title">Summary</h2>
          <p className="cv__personal__summary__info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </section>

      <section className="cv__education">
        <h2 className="cv__education__title">Education</h2>

        <div className="cv__education__details">
          <h3 className="cv__education__details__title">University</h3>
          <p className="cv__education__details__qualification">
            Bachelor of Science in Digital Media
          </p>
        </div>
      </section>

      <section className="cv__work">
        <h2 className="cv__work__title">Work Experience</h2>

        <div className="cv__work__details">
          <h3 className="cv__work__details__title">Start Up</h3>
          <p className="cv__work__details__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </section>

      <section className="cv__skills">
        <h2 className="cv__skills__title">Skills</h2>

        <ul className="cv__skills__list">
          <li className="cv__skills__list__item">MongoDB</li>
          <li className="cv__skills__list__item">Node JS</li>
          <li className="cv__skills__list__item">React</li>
          <li className="cv__skills__list__item">JavaScript</li>
          <li className="cv__skills__list__item">SASS</li>
          <li className="cv__skills__list__item">HTML</li>
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

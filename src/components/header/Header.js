import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <p className="header__p1">
        Welcome to the only CV Builder you'll ever need.
      </p>
      <p className="header__p2">
        Whether you're applying for work experience, part-time job or your first
        full-time job.
      </p>
      <p className="header__p3">You're in the right place.</p>
      <Link to="start">
        <button className="btn btn--green">Start</button>
      </Link>
    </header>
  );
}

export default Header;

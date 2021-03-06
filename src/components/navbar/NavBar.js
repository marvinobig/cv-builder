import { Link } from "react-router-dom";
import "./NavBar.css";

function Nav() {
  return (
    <nav className="nav">
      <Link to="cv-builder">
        <p className="nav__title">CV Builder</p>
      </Link>
      <Link to="cv-builder/start">
        <button className="btn btn--green">Start</button>
      </Link>
    </nav>
  );
}

export default Nav;

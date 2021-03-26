import React from "react";
import { Link, NavLink } from "react-router-dom";
import LinkedIn from "./linkedin.png";
import Github from "./GitHub.png";
import Twitter from "./twitter.png";
import Email from "./email.png";
import "./NavbarHE.css";

export default function NavbarHE(props) {
  return (
    <div className="nav_HE" lang="HE" dir="rtl">
      <h4>
        <Link to="/">לירון דה קסטרו</Link>
      </h4>
      <div className="social_logos">
        <a href="https://www.linkedin.com/in/liron-de-castro/">
          <img src={LinkedIn} alt="LinkedIn logo" />
        </a>
        <a href="https://github.com/lirondco/">
          <img src={Github} alt="Github Logo" />
        </a>
        <a href="https://twitter.com/lirondecastro">
          <img src={Twitter} alt="Twitter logo" />
        </a>
        <a href="mailto:liron.decastro@gmail.com">
          <img src={Email} alt="Email logo" />
        </a>
      </div>
      <hr />
      <ul className="nav_content_HE">
        <li key="projects_HE">
          <NavLink activeClassName="selected_nav_HE" to="/projects">
            פרויקטים
          </NavLink>
        </li>
        <li key="about_HE">
          <NavLink activeClassName="selected_nav_HE" to="/about">
            מי אני
          </NavLink>
        </li>
        <li key="contact_HE">
          <NavLink activeClassName="selected_nav_HE" to="/contact">
            צור קשר
          </NavLink>
        </li>
        <li key="english_HE">
          <button
            type="button"
            onClick={props.handleChangeLang}
            lang="EN"
            dir="ltr"
          >
            English
          </button>
        </li>
      </ul>
    </div>
  );
}

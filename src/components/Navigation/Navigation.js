import React from "react";
import { Link } from "react-scroll";
import UserNavigation from "../UserNavigation";
import "./Navigation.scss";

const options = {
  activeClass: "active",
  spy: true,
  smooth: true,
  hashSpy: true,
  offset: 0,
  duration: 500,
  isDynamic: true
};

const Navigation = ({ loggedIn, userName }) => {
  return (
    <nav className="navigation">
      {loggedIn ? (
        <div>
          <UserNavigation userName={userName} />
        </div>
      ) : (
        <div className="navigation__buttons">
          <a href="./logowanie">Zaloguj</a>
          <a href="./rejestracja">Załóż konto</a>
        </div>
      )}

      <div>
        <ul className="navigation__list">
          <li>
            <Link to="header" {...options}>
              Start
            </Link>
          </li>
          <li>
            <Link to="callToAction" {...options}>
              O co chodzi?
            </Link>
          </li>
          <li>
            <Link to="about" {...options}>
              O nas
            </Link>
          </li>
          <li>
            <Link to="foundationList" {...options}>
              Fundacje i organizacje
            </Link>
          </li>
          <li className="last">
            <Link to="footer" {...options}>
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;

import React from "react";
import { Link } from "react-scroll";
import UserNavigation from "../UserNavigation";
import "./Header.scss";

const options = {
  activeClass: "active",
  spy: true,
  smooth: true,
  hashSpy: true,
  offset: 0,
  duration: 500,
  isDynamic: true
};

const Header = ({ loggedIn, userName }) => {
  return (
    <section id="header" className="header">
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

      <div className="cta">
        <h1 className="cta__title">
          Zacznij Pomagać! <br /> Oddaj niechniane rzeczy w zaufane ręce
        </h1>
        <img
          className="cta__ornament"
          src="/images/ornament.png"
          alt="ornament"
        />
        <div className="cta__buttons">
          <div className="btn">
            <a href="./logowanie">
              <span>Oddaj</span> <span>rzeczy</span>
            </a>
          </div>
          <div className="btn">
            <a href="./logowanie">
              <span>Zorganizuj</span> <span>zbiórkę</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;

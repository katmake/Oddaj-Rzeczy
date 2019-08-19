import React from "react";
// import { Link } from "react-scroll";
import Navigation from "../Navigation";
// import UserNavigation from "../UserNavigation";
import "./Header.scss";

// const options = {
//   activeClass: "active",
//   spy: true,
//   smooth: true,
//   hashSpy: true,
//   offset: 0,
//   duration: 500,
//   isDynamic: true
// };

const Header = ({ loggedIn, userName }) => {
  return (
    <section id="header" className="header">
      <Navigation loggedIn={loggedIn} userName={userName}/>

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
            <a href={loggedIn ? "./oddaj-rzeczy" : "./logowanie"}>
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

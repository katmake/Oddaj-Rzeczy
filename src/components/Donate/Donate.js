import React from "react";
import Navigation from "../Navigation";
import DonateForm from "../DonateForm";
import Footer from "../Footer";
import "./Donate.scss";

const Donate = ({loggedIn, userName}) => {
  return (
    <>
      
      <section className="donateHeader">
      <Navigation loggedIn="true" userName="Tomek"/>
        <div className="donateHeader__container">
          <h1 className="donateHeader__title">
            Oddaj rzeczy, których już nie chcesz
            <span>potrzebujacym</span>
          </h1>
          <img
            className="donateHeader__ornament"
            src="/images/ornament.png"
            alt="ornament"
          />
          <h2 className="donateHeader__subtitle">Wystarczą 4 proste kroki:</h2>
          <div className="donateHeader__steps">
            <div className="donateHeader__step">
              <div className="step__num">1</div>
              <div className="step__text">Wybierz rzeczy</div>
            </div>
            <div className="donateHeader__step">
              <div className="step__num">2</div>
              <div className="step__text">Spakuj je <br/> w worki</div>
            </div>
            <div className="donateHeader__step">
              <div className="step__num">3</div>
              <div className="step__text">Wybierz fundację</div>
            </div>
            <div className="donateHeader__step">
              <div className="step__num">4</div>
              <div className="step__text">Zamów kuriera</div>
            </div>
          </div>
        </div>
      </section>
      <DonateForm />
      <Footer />
    </>
  );
};

export default Donate;

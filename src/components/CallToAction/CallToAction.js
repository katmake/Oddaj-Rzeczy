import React from "react";
import steps from "./steps";
import Step from "../Step";
import "./CallToAction.scss";

const CallToAction = () => {
  return (
    <section id="callToAction" className="callToAction">
      <h2>Wystarczą 4 proste kroki</h2>
      <img
        className="callToAction__ornament"
        src="/images/ornament.png"
        alt="ornament"
      />
      <div className="callToAction__stepsBox">
        {Object.keys(steps).map(key => (
          <Step key={key} step={steps[key]} />
        ))}
      </div>
      <a href="./rejestracja" className="callToAction__btn">Załóż konto</a>

      
    </section>
  );
}

export default CallToAction;

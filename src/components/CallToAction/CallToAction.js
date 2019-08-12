import React from "react";
import steps from "./steps";
import Step from "../Step/Step";
import "./CallToAction.scss";

function CallToAction() {
  return (
    <section className="callToAction">
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
      <button>Załóż konto</button>
    </section>
  );
}

export default CallToAction;

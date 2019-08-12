import React from "react";
import "./Step.scss";

const Step = (props) => {
  return (
    <div className="stepBox">
      <div className="stepBox__icon">
        <img src={props.step.image} alt={props.step.alt} />
      </div>
      <span className="stepBox__title">{props.step.title}</span>
      <hr />
      <div className="stepBox__description">
        <p>{props.step.desc}</p>
      </div>
    </div>
  );
}

export default Step;

import React from "react";
import "./Achievement.scss";

const Achievement = props => {
  return (
    <div className="achievement">
      <div className="achievement__counter">{props.accomplishment.counter}</div>
      <span className="achievement__title">{props.accomplishment.title}</span>
      <div className="achievement__description">
        <p>{props.accomplishment.desc}</p>
      </div>
    </div>
  );
};

export default Achievement;

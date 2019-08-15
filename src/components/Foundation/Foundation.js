import React from "react";
import "./Foundation.scss";

const Foundation = props => {
  const { name, mission, needs } = props.foundation;
  return (
    <div className="found">
      <h3 className="found__title">
        {props.category} "{name}"
      </h3>
      <div className="found__desc">
        <div className="found__desc-mission">
          <p>Cel i misja: {mission}</p>
          <hr />
        </div>
        <div className="found__desc-needs">
          <p>{needs}</p>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Foundation;

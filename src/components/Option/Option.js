import React from "react";
import "./Option.scss";

const Option = ({option}) => {
  return (
        <div className="option">
          <label className="checkbox">
            {option}
            <input type="checkbox" />
            <span className="checkbox__checkmark">
              <i className="fas fa-check" />
            </span>
          </label>
        </div>
  );
};

export default Option;

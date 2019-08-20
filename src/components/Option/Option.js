import React from "react";
import "./Option.scss";

const Option = ({option, name}) => {
  console.log(option)
  return (
        <div className="option">
          <label className="checkbox">
            {option}
            <input type="checkbox" name={name}/>
            <span className="checkbox__checkmark">
              <i className="fas fa-check" />
            </span>
          </label>
        </div>
  );
};

export default Option;

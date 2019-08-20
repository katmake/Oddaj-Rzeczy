import React from "react";
import Option from "../Option";
import options from "./options";
import "./DonateFormStep1.scss";

const DonateFormStep1 = props => {
  const handleOnSubmit = e => {
    e.preventDefault();
    const result = {};
    for (let input of e.target) {
      // console.log(input);
      (input.type === "checkbox") && (result[input.name] = input.checked);
    }
    // console.log(result);
    props.moveToNextPage(result);
  };

  return (
    <div className="donateStep1">
      <span>Krok 1/4</span>
      <h3>Zaznacz co chcesz oddać:</h3>
      <form onSubmit={handleOnSubmit}>
        {Object.keys(options).map(key => (
          <Option key={key} option={options[key]} name={key} />
        ))}
        <button type="submit" className="donateStep1__btn">
          Dalej
        </button>
      </form>
    </div>
  );
};

export default DonateFormStep1;

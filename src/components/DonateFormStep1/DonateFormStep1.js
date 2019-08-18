import React from "react";
import Option from "../Option";
import options from "./options";
import "./DonateFormStep1.scss";

const DonateFormStep1 = (props) => {
  return (
    <div className="donateStep1">
      <span>Krok 1/4</span>
      <h3>Zaznacz co chcesz oddać:</h3>
      <form>
        {options.map(item => (
          <Option key={item} option={item} />
        ))}
        <button className="donateStep1__btn" onClick={props.moveToNextPage}>Dalej</button>
      </form>
    </div>
  );
};

export default DonateFormStep1;
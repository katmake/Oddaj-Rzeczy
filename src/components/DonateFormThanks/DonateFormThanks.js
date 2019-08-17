import React from "react";
import "./DonateFormThanks.scss";

const DonateFormThanks = () => {
  return (
    <div className="thanksMsg">
      <p className="thanksMsg__text">
        Dziękujemy za przesłanie formularza. <br /> Na maila prześlemy wszelkie
        informacje o odbiorze.
      </p>
      <img className="thanksMsg__ornament"
          src="/images/ornament.png"
          alt="ornament"
        />
    </div>
  );
};

export default DonateFormThanks;

import React from "react";
import {
  bagsDeclension,
  beneficientDeclension,
  orgDeclension,
  cityDeclension,
  donationDeclension
} from "./helpers";
import "./DonateFormSummary.scss";

const DonateFormSummary = props => {
  const handleOnSubmit = e => {
    e.preventDefault();
    props.confirmDonation();
  };

  const { numberOfBags, chosenFoundation, clothes, clothesToRecycle, toys, books, other } = props.summary;

  return (
    <div className="donateSummary">
      <h3>Podsumowanie Twojej darowizny</h3>
      <div>
        <h4>Oddajesz:</h4>
        <div className="donateSummary__donation">
          <img src="/images/icon-step-2.png" alt="worki" />
          <p>{numberOfBags} {bagsDeclension(numberOfBags)} {donationDeclension(clothes, clothesToRecycle, toys, books, other)} {beneficientDeclension(chosenFoundation.beneficients)}</p>
        </div>
        <div className="donateSummary__beneficient">
          <img src="/images/icon-step-1.png" alt="dłoń z sercem" />
          <p>{orgDeclension(chosenFoundation.category)} "{chosenFoundation.name}" {cityDeclension(chosenFoundation.location)}</p>
        </div>
      </div>
      <form onSubmit={handleOnSubmit}>
        <div className="shippingForm">
          <div className="shippingForm__column">
            <h4>Adres odbioru</h4>
            <div>
              <label htmlFor="street">Ulica</label>
              <input
                type="text"
                name="street"
                value={props.summary.street}
                readOnly
              />
            </div>
            <div>
              <label htmlFor="city">Miasto</label>
              <input
                type="text"
                name="city"
                value={props.summary.city}
                readOnly
              />
            </div>
            <div>
              <label htmlFor="postalCode">Kod pocztowy</label>
              <input
                type="text"
                name="postalCode"
                value={props.summary.postalCode}
                readOnly
              />
            </div>
            <div>
              <label htmlFor="phoneNumber">Numer telefonu</label>
              <input
                type="text"
                name="phoneNumber"
                value={props.summary.phoneNumber}
                readOnly
              />
            </div>
          </div>

          <div className="shippingForm__column">
            <h4>Termin odbioru</h4>
            <div>
              <label htmlFor="date">Data</label>
              <input
                type="text"
                name="date"
                value={props.summary.date}
                readOnly
              />
            </div>
            <div>
              <label htmlFor="time">Godzina</label>
              <input
                type="text"
                name="time"
                value={props.summary.time}
                readOnly
              />
            </div>
            <div>
              <label htmlFor="notes">Uwagi dla kuriera</label>
              <textarea
                name="notes"
                value={props.summary.notes}
                readOnly
              ></textarea>
            </div>
          </div>
        </div>

        <div>
          <button
            type="button"
            className="donateSummary__btn"
            onClick={props.moveToPrevPage}
          >
            Wstecz
          </button>
          <button
            type="submit"
            className="donateSummary__btn donateSummary__btn-confirm"
          >
            Potwierdzam
          </button>
        </div>
      </form>
    </div>
  );
};

export default DonateFormSummary;

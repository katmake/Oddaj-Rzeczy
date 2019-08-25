import React from "react";
import "./DonateFormSummary.scss";

const DonateFormSummary = props => {
  const handleOnSubmit = e => {
    e.preventDefault();
    props.confirmDonation();
  };

  return (
    <div className="donateSummary">
      <h3>Podsumowanie Twojej darowizny</h3>
      <div>
        <h4>Oddajesz:</h4>
        <div className="donateSummary__donation">
          <img src="/images/icon-step-2.png" alt="worki" />
          <p>4 worki ubrań w dobrym stanie dla dzieci</p>
        </div>
        <div className="donateSummary__beneficient">
          <img src="/images/icon-step-1.png" alt="dłoń z sercem" />
          <p>Dla Fundacji "Mam marzenie" w Warszawie</p>
        </div>
      </div>
      <form onSubmit={handleOnSubmit}>
        <div className="shippingForm">
          <div className="shippingForm__column">
            <h4>Adres odbioru</h4>
            <div>
              <label htmlFor="street">Ulica</label>
              <input type="text" name="street" value={props.summary.street} />
            </div>
            <div>
              <label htmlFor="city">Miasto</label>
              <input type="text" name="city" value={props.summary.city} />
            </div>
            <div>
              <label htmlFor="postalCode">Kod pocztowy</label>
              <input
                type="text"
                name="postalCode"
                value={props.summary.postalCode}
              />
            </div>
            <div>
              <label htmlFor="phoneNumber">Numer telefonu</label>
              <input
                type="text"
                name="phoneNumber"
                value={props.summary.phoneNumber}
              />
            </div>
          </div>

          <div className="shippingForm__column">
            <h4>Termin odbioru</h4>
            <div>
              <label htmlFor="date">Data</label>
              <input type="text" name="date" value={props.summary.date} />
            </div>
            <div>
              <label htmlFor="time">Godzina</label>
              <input type="text" name="time" value={props.summary.time} />
            </div>
            <div>
              <label htmlFor="notes">Uwagi dla kuriera</label>
              <textarea name="notes" value={props.summary.notes}></textarea>
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

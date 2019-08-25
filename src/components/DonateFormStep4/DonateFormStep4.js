import React, { Component } from "react";
import "./DonateFormStep4.scss";

export default class DonateFormStep4 extends Component {
  state = {
    street: "",
    city: "",
    postalCode: "",
    phoneNumber: "",
    date: "",
    time: "",
    notes: ""
  }

  handleOnSubmit = e => {
    e.preventDefault();
    const pickupData = {...this.state};
    this.props.moveToNextPage(pickupData);
  };

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className="donateStep4">
        <span>Krok 4/4</span>
        <h3>Podaj adres oraz termin odbioru rzeczy przez kuriera</h3>
        <form onSubmit={this.handleOnSubmit}>
          <div className="shippingForm">
            <div className="shippingForm__column">
              <h4>Adres odbioru</h4>
              <div>
                <label htmlFor="street">Ulica</label>
                <input type="text" name="street" value={this.state.street} onChange={this.handleOnChange}/>
              </div>
              <div>
                <label htmlFor="city">Miasto</label>
                <input type="text" name="city"  value={this.state.city} onChange={this.handleOnChange}/>
              </div>
              <div>
                <label htmlFor="postalCode">Kod pocztowy</label>
                <input type="text" name="postalCode"  value={this.state.postalCode} onChange={this.handleOnChange}/>
              </div>
              <div>
                <label htmlFor="phoneNumber">Numer telefonu</label>
                <input type="text" name="phoneNumber"  value={this.state.phoneNumber} onChange={this.handleOnChange}/>
              </div>
            </div>

            <div className="shippingForm__column">
              <h4>Termin odbioru</h4>
              <div>
                <label htmlFor="date">Data</label>
                <input type="text" name="date"  value={this.state.date} onChange={this.handleOnChange}/>
              </div>
              <div>
                <label htmlFor="time">Godzina</label>
                <input type="text" name="time"  value={this.state.time} onChange={this.handleOnChange}/>
              </div>
              <div>
                <label htmlFor="notes">Uwagi dla kuriera</label>
                <textarea name="notes"  value={this.state.notes} onChange={this.handleOnChange}></textarea>
              </div>
            </div>
          </div>

          <div>
            <button
              className="donateStep4__btn"
              onClick={this.props.moveToPrevPage}
            >
              Wstecz
            </button>
            <button type="submit" className="donateStep4__btn">
              Dalej
            </button>
          </div>
        </form>
      </div>
    );
  }
}
import React, { Component } from "react";
import "./DonateFormStep2.scss";

export default class DonateFormStep2 extends Component {

  handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.numberOfBags.value);
    const chosenOption = {numberOfBags: parseFloat(e.target.numberOfBags.value)};
    this.props.moveToNextPage(chosenOption);
  }

  get options() {
    let options = [<option key="0" value="">-wybierz-</option>];
    let i = 1;
    while (i <= 10) {
      options.push(
        <option key={i} value={i}>{i}</option>
      );
      i++;
    }
    return options;
  }

  render() {
    return (
      <div className="donateStep2">
        <span>Krok 2/4</span>
        <h3>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h3>
        <form onSubmit={this.handleOnSubmit}>
          <label htmlFor="numberOfBags">Liczba 60 l worków:</label>
          <select id="numberOfBags" name="numberOfBags">{this.options}</select>
          <div>
            <button className="donateStep2__btn" onClick={this.props.moveToPrevPage}>
              Wstecz
            </button>
            <button type="submit" className="donateStep2__btn">
              Dalej
            </button>
          </div>
        </form>
      </div>
    );
  }
}
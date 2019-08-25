import React, { Component } from "react";
import uuid from "uuid";
import beneficients from "./beneficients";
import cities from "./cities";
import "./DonateFormStep3.scss";

export default class DonateFormStep3 extends Component {
  state = {
    foundations: [],
    city: "",
    group: "",
    name: ""
  };

  componentDidMount() {
    fetch("http://localhost:3001/fundations")
      .then(res => res.json())
      .then(foundations => {
        const allFoundations = [];
        foundations.map(item =>
          allFoundations.push(
            ...foundations[foundations.indexOf(item)]["items"]
          )
        );
        this.setState({ foundations: allFoundations });
      });
  }

  handleOnChange = name => e => {
    this.setState({
      [name]: e.target.value
    });
  };

  handleSearch = (e) => {
    e.preventDefault();

    const { foundations, city, group, name } = this.state;

    if (foundations.length) {
      let searchBy;

      if (name.length) {
        searchBy = "name";
      } else if (city.length && group.length) {
        searchBy = "city & group";
      } else if (city.length) {
        searchBy = "city";
      } else if (group.length) {
        searchBy = "group";
      } else {
        searchBy = "";
      }

      let foundFoundations;
      switch (searchBy) {
        case "name":
          foundFoundations = foundations.filter(
            foundation => foundation.name.toLowerCase() === name.toLowerCase()
          );
          break;
        case "city & group":
          foundFoundations = foundations.filter(
            foundation =>
              foundation.location === city && foundation.beneficients === group
          );
          break;
        case "city":
          foundFoundations = foundations.filter(
            foundation => foundation.location === city
          );
          break;
        case "group":
          foundFoundations = foundations.filter(
            foundation => foundation.beneficients === group
          );
          break;
        default:
          foundFoundations = foundations;
      }
      const searchResult = {foundFoundations: foundFoundations};
      this.props.moveToNextPage(searchResult);
    }
  }

  render() {
    return (
      <div className="donateStep3">
        <span>Krok 3/4</span>
        <form onSubmit={this.handleSearch}>
          <div className="donateStep3__inputSelectWrapper">
            <label key={uuid()} htmlFor="location">Lokalizacja:</label>
            <select
              id="location"
              name="location"
              value={this.state.city}
              onChange={this.handleOnChange("city")}
            >
              <option key="wybierz" value="">-wybierz-</option>
              {cities.map(item => (
                <option
                  key={item}
                  value={item}
                >
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className="donateStep3__inputRadioWrapper">
            <p>Komu chcesz pomóc?</p>

            <div className="donateStep3__options">
              {beneficients.map(item => (
                <label key={uuid()}>
                  <input
                    key={item.name}
                    type="radio"
                    value={item.name}
                    checked={this.state.group === item.name}
                    name="group"
                    onChange={this.handleOnChange("group")}
                  />
                  <span className="radio">{item.radioText}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="donateStep3__inputTextWrapper">
            <label key={uuid()} htmlFor="">
              Wpisz nazwę konkretnej organizacji (opcjonalnie)
            </label>
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleOnChange("name")}
            />
          </div>

          <div>
            <button
              className="donateStep3__btn"
              onClick={this.props.moveToPrevPage}
            >
              Wstecz
            </button>
            <button type="submit" className="donateStep3__btn">
              Szukaj
            </button>
          </div>
        </form>
      </div>
    );
  }
}
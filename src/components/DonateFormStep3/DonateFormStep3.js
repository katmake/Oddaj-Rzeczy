import React, { Component } from "react";
import uuid from "uuid";
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

  get foundations() {
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

      return foundFoundations.length ? (
        foundFoundations.map(item => <li key={uuid()}>{item.name}</li>)
      ) : (
        <p>Nie znaleziono fundacji spałniającej wybrane kryteria</p>
      );
    }

    return null;
  }

  validateName = e => {
    if (e.target.value.length < 3) {
      console.log("blad");
    }
  };

  render() {
    return (
      <div className="donateStep3">
        <span>Krok 3/4</span>
        <form onSubmit={this.handleOnSubmit}>
          <div className="donateStep3__inputSelectWrapper">
            <label htmlFor="location">Lokalizacja:</label>
            <select
              id="location"
              name="location"
              value={this.state.city}
              onChange={this.handleOnChange("city")}
            >
              <option value="">-wybierz-</option>
              <option value="Kraków">Kraków</option>
              <option value="Poznań">Poznań</option>
              <option value="Warszawa">Warszawa</option>
              <option value="Gdańsk">Gdańsk</option>
            </select>
          </div>

          <div className="donateStep3__inputCheckboxWrapper">
            <p>Komu chcesz pomóc?</p>

            <div className="donateStep3__options">
              <label>
                <input
                  type="radio"
                  value="dzieci"
                  checked={this.state.group === "dzieci"}
                  name="group"
                  onChange={this.handleOnChange("group")}
                />
                dzieciom
              </label>
              <label>
                <input
                  type="radio"
                  value="samotne matki"
                  checked={this.state.group === "samotne matki"}
                  name="group"
                  onChange={this.handleOnChange("group")}
                />
                samotnym matkom
              </label>
              <label>
                <input
                  type="radio"
                  value="bezdomni"
                  checked={this.state.group === "bezdomni"}
                  name="group"
                  onChange={this.handleOnChange("group")}
                />
                bezdomnym
              </label>
              <label>
                <input
                  type="radio"
                  value="niepełnosprawni"
                  checked={this.state.group === "niepełnosprawni"}
                  name="group"
                  onChange={this.handleOnChange("group")}
                />
                niepełnosprawnym
              </label>
              <label>
                <input
                  type="radio"
                  value="osoby starsze"
                  checked={this.state.group === "osoby starsze"}
                  name="group"
                  onChange={this.handleOnChange("group")}
                />
                osobom starszym
              </label>
            </div>
          </div>

          <div className="donateStep3__inputTextWrapper">
            <label htmlFor="">
              Wpisz nazwę konkretnej organizacji (opcjonalnie)
            </label>
            <input
              type="text"
              value={this.state.name}
              onBlur={this.validateName}
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
        <div>
          <ul>{this.foundations}</ul>
        </div>
      </div>
    );
  }
}
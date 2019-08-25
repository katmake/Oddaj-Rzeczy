import React, { Component } from "react";
import uuid from "uuid";
import "./SearchResult.scss";

export default class SearchResult extends Component {
  state = {
    chosenFoundation: ""
  };

  handleOnSubmit = e => {
    e.preventDefault();
    const chosenFoundation = {
      chosenFoundation: this.props.foundations.find(
        found => found.name === this.state.chosenFoundation
      )
    };
    this.props.moveToNextPage(chosenFoundation);
  };

  handleOnChange = e => {
    this.setState({
      chosenFoundation: e.target.value
    });
  };

  render() {
    return (
      <div className="searchResult">
        <span>Krok 3/4</span>
        <h3>Wybierz organizację, której chcesz pomóc:</h3>
        <hr />
        <form onSubmit={this.handleOnSubmit}>
          {this.props.foundations.length ? (
            this.props.foundations.map(item => (
              <div key={uuid()} className="searchResult__option">
                <label className="radio">
                  <div className="">
                    <h4 className="">
                      {item.category} "{item.name}"
                    </h4>
                    <div className="">
                      <p>Cel i misja: {item.mission}</p>
                    </div>
                  </div>

                  <input
                    type="radio"
                    value={item.name}
                    name="chosenFoundation"
                    checked={this.state.chosenFoundation === item.name}
                    onChange={this.handleOnChange}
                  />
                  <span className="radio__checkmark">
                    <i className="fas fa-check" />
                  </span>
                </label>
                <hr />
              </div>
            ))
          ) : (
            <p>Nie znaleziono fundacji spałniającej wybrane kryteria</p>
          )}

          <div>
            <button
              type="button"
              className="searchResult__btn"
              onClick={this.props.moveToPrevPage}
            >
              Wstecz
            </button>
            <button type="submit" className="searchResult__btn">
              Dalej
            </button>
          </div>
        </form>
      </div>
    );
  }
}
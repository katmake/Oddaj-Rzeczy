import React, { Component } from "react";
import classNames from "classnames";
import Foundation from "../Foundation";
import Pagination from "../Pagination";
import "./FoundationList.scss";

export default class FoundationList extends Component {
  state = {
    foundations: [],
    clicked: "Fundacja",
    currentPage: 1,
    itemsPerPage: 3
  };

  get items() {
    const { foundations, clicked, currentPage, itemsPerPage } = this.state;
    if (foundations.length) {
      const foundation = foundations.find(found => found.category === clicked);
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      const currentItems = foundation.items.slice(
        indexOfFirstItem,
        indexOfLastItem
      );
      return (
        <>
          <ul className="foundationList__list">
            {currentItems.map(item => (
              <Foundation key={currentItems.indexOf(item)} foundation={item} category={clicked} />
            ))}
          </ul>
          <Pagination
            itemsPerPage={this.state.itemsPerPage}
            totalItems={foundation.items.length}
            paginate={this.paginate}
            currentPage={this.state.currentPage}
          />
        </>
      );
    }
    return null;
  }

  componentDidMount() {
    fetch("http://localhost:3001/fundations")
      .then(res => res.json())
      .then(foundations => this.setState({ foundations }));
  }

  getFundations() {
    return this.state.foundations.map(item => (
      <button
        key={item.btnText}
        className={classNames("foundationList__btn", {
          active: this.state.clicked === item.category
        })}
        onClick={this.handleOnClick(item.category)}
      >
        <span>{item.btnText}</span>
      </button>
    ));
  }

  handleOnClick = category => () => this.setState({ clicked: category, currentPage: 1 });

  paginate = (pageNumber) => {
    this.setState({ currentPage: pageNumber })
  }

  render() {
    return (
      <section id="foundationList" className="foundationList">
        <div className="foundationList__header">
          <h2>Komu pomagamy?</h2>
          <img
            className="foundationList__ornament"
            src="/images/ornament.png"
            alt="ornament"
          />
          <div className="foundationList__buttonsContainer">
            {this.getFundations()}
          </div>
          <p className="foundationList__desc">
            W naszej bazie znajdziesz listę zweryfikowanych Fundacji, <br /> z
            którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu
            pomagają i czego potrzebują.
          </p>
        </div>
        <div className="foundationList__listContainer">
          {this.items}
        </div>
      </section>
    );
  }
}

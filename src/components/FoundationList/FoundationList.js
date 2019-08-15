import React, { Component } from "react";
import classNames from 'classnames';
import Foundation from "../Foundation";
import "./FoundationList.scss";

export default class FoundationList extends Component {
  state = {
    foundations: [],
    clicked: "Fundacja"
  }

  get items() {
    const { foundations, clicked } = this.state;
    if (foundations.length) {
      const foundation = foundations.find(found => found.category === clicked );
      return foundation.items.map(item => <Foundation foundation={item} category={clicked} />);
    }
    return null;
  }

  componentDidMount() {
    fetch('http://localhost:3001/fundations')
      .then(res => res.json())
      .then(foundations => this.setState({ foundations }))
  }

  getFundations() {
    return this.state.foundations.map(item => (
      <button className={classNames('foundationList__btn', {
        'active': this.state.clicked === item.category
      })} onClick={this.handleOnClick(item.category)} >
        <span>{item.btnText}</span>
      </button>
    ))
  }

  handleOnClick = (category) => () => this.setState({ clicked: category })


  render() {
    console.log(this.state.foundations)
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
        <div className="listOfFounds__container">
          <ul class="listOfFounds">
            {this.items}
          </ul>
        </div>
      </section>
    );
  }
}

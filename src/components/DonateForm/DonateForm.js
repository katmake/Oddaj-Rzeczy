import React, { Component } from "react";
import DonateFormStep1 from "../DonateFormStep1";
import DonateFormStep2 from "../DonateFormStep2";
import DonateFormThanks from "../DonateFormThanks";
import "./DonateForm.scss";

export default class DonateForm extends Component {
  state = {
    currentPage: 1
  };

  moveToNextPage = () => {
    this.setState(prevState => {
      return {
        currentPage: prevState.currentPage + 1
      };
    });
  };

  moveToPrevPage = () => {
    this.setState(prevState => {
      return {
        currentPage: prevState.currentPage - 1
      };
    });
  };

  get form() {
    let msg;
    let page;
    switch (this.state.currentPage) {
      case 1:
        msg = (
          <p>
            Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy
            wiedzieć komu najlepiej je przekazać.
          </p>
        );
        page = <DonateFormStep1 moveToNextPage={this.moveToNextPage} />;
        break;
      case 2:
        msg = (
          <p>
            Wszystkie rzeczy do oddania zapakuj w 60 l worki. Dokładną
            instrukcję jak poprawnie spakować rzeczy znajdziesz
            <a href="./" target="_blank">
              TUTAJ.
            </a>
          </p>
        );
        page = (
          <DonateFormStep2
            moveToNextPage={this.moveToNextPage}
            moveToPrevPage={this.moveToPrevPage}
          />
        );
        break;
      case 3:
        msg = <p>msg 3</p>;
        page = <h2>Step 3</h2>;
        break;
      case 4:
        msg = <p>msg 4</p>;
        page = <h2>Step 4</h2>;
        break;
      default:
        msg =
          "Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.";
        page = <DonateFormStep1 moveToNextPage={this.moveToNextPage} />;
    }
    if (this.state.currentPage === 5) {
      return (
        <div className="donateForm__thanks">
          <DonateFormThanks />
        </div>
      );
    }
    return (
      <>
        <div className="donateForm__msg">
          <h4>Ważne!</h4>
          {msg}
        </div>
        <div className="donateForm__form">{page}</div>
      </>
    );
  }

  render() {
    return <section className="donateForm">{this.form}</section>;
  }
}

import React, { Component } from "react";
import DonateFormStep1 from "../DonateFormStep1";
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

  get form() {
    let msg;
    let page;
    switch (this.state.currentPage) {
      case 1:
        msg =
          "Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.";
        page = <DonateFormStep1 moveToNextPage={this.moveToNextPage} />;
        break;
      case 2:
        msg = "msg 2";
        page = <h2>Step 2</h2>;
        break;
      case 3:
        msg = "msg 3";
        page = <h2>Step 3</h2>;
        break;
      case 4:
        msg = "msg 4";
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
          <p>{msg}</p>
        </div>
        <div className="donateForm__form">{page}</div>
      </>
    );
  }

  render() {
    return <section className="donateForm">{this.form}</section>;
  }
}

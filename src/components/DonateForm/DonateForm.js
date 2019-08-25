import React, { Component } from "react";
import DonateFormStep1 from "../DonateFormStep1";
import DonateFormStep2 from "../DonateFormStep2";
import DonateFormStep3 from "../DonateFormStep3";
import SearchResult from "../SearchResult";
import DonateFormStep4 from "../DonateFormStep4";
import DonateFormSummary from "../DonateFormSummary";
import DonateFormThanks from "../DonateFormThanks";
import "./DonateForm.scss";

export default class DonateForm extends Component {
  state = {
    currentPage: 5,
    foundFoundations: []
  };

  moveToNextPage = data => {
    this.setState(prevState => {
      return {
        ...prevState,
        ...data,
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

  confirmDonation = () => {
    this.setState(prevState => {
      return {
        currentPage: prevState.currentPage + 1
      }
    })
  }

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
        msg = (
          <p>
            Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w
            wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji
            bądź celu ich pomocy.
          </p>
        );
        page = (
          <DonateFormStep3
            moveToNextPage={this.moveToNextPage}
            moveToPrevPage={this.moveToPrevPage}
          />
        );
        break;
      case 4:
        msg = (
          <p>
            Na podstawie Twoich kryteriów oraz rzeczy, które masz do oddania
            wybraliśmy organizacje, którym możesz pomóc. Wybierz jedną, do
            której trafi Twoja przesyłka.
          </p>
        );
        page = (
          <SearchResult
            moveToNextPage={this.moveToNextPage}
            moveToPrevPage={this.moveToPrevPage}
            foundations={this.state.foundFoundations}
          />
        );
        break;
      case 5:
        msg = <p>Podaj adres oraz termin odbioru rzeczy.</p>;
        page = (
          <DonateFormStep4
            moveToPrevPage={this.moveToPrevPage}
            moveToNextPage={this.moveToNextPage}
          />
        );
        break;
      case 6:
        msg = <p>Potwierdź swoją darowiznę.</p>;
        page = (
          <DonateFormSummary
            moveToPrevPage={this.moveToPrevPage}
            confirmDonation={this.confirmDonation}
            summary={this.state}
          />
        );
        break;
      default:
        msg =
          "Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.";
        page = <DonateFormStep1 moveToNextPage={this.moveToNextPage} />;
    }
    if (this.state.currentPage === 7) {
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
    console.log(this.state);
    return <section className="donateForm">{this.form}</section>;
  }
}

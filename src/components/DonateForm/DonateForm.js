import React, { Component } from 'react';
import DonateFormThanks from "../DonateFormThanks";
import "./DonateForm.scss";

export default class DonateForm extends Component {
  render() {
    return (
      <div className="donateForm">
        <DonateFormThanks />
      </div>
    )
  }
}

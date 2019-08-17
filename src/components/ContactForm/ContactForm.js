import React, { Component } from 'react';
import "./ContactForm.scss";


export default class ContactForm extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <form className="contactForm" onSubmit={this.handleSubmit}>
      <h3 className="contactForm__title">Formularz Kontaktowy</h3>
      <div className="contactForm__contactData">
        <input type="text" placeholder="Imię"/>
        <input type="email" placeholder="Email"/>
      </div>

      <textarea className="contactForm__contactMsg" name="" id="" rows="3" placeholder="Wiadomość"/>
      <button type="submit" className="contactForm__btn">Wyślij</button>
    </form>
    )
  }
}
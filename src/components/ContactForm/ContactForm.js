import React, { Component } from 'react';
import "./ContactForm.scss";


export default class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    msg: ""
  }

  handleOnChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    let name = this.state.name;
    let email = this.state.email;
    let msg = this.state.msg;

    fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({name, email, msg})
    })
    .then(function(response) {
      return response.text();
    })
    .then(function(text) {
      console.log(text);
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  render() {
    return (
      <form className="contactForm" onSubmit={this.handleSubmit}>
      <h3 className="contactForm__title">Formularz Kontaktowy</h3>
      <div className="contactForm__contactData">
        <input type="text" placeholder="Imię" name="name" value={this.state.name} onChange={this.handleOnChange}/>
        <input type="email" placeholder="Email" name="email" value={this.state.email} onChange={this.handleOnChange}/>
      </div>

      <textarea className="contactForm__contactMsg" rows="3" placeholder="Wiadomość" name="msg" value={this.state.msg} onChange={this.handleOnChange}/>
      <button type="submit" className="contactForm__btn">Wyślij</button>
    </form>
    )
  }
}
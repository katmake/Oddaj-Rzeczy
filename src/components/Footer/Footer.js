import React, { Component } from "react";
import ContactForm from "../ContactForm";
import "./Footer.scss";

export default class Footer extends Component {
  render() {
    return (
      <footer id="footer" className="footer">
        <div className="footer__contact">
          <h2>Skontaktuj się z nami</h2>
          <img
            className="footer__ornament"
            src="/images/ornament.png"
            alt="ornament"
          />
          <ContactForm />
        </div>

        <div className="footer__bottom">
          <div className="footer__socialIcons">
            <div>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f" />
              </a>
            </div>
            <div>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>

          <span className="footer__copyrightInfo">Copyright 2015 &copy; by Anna Dadej</span>
        </div>
      </footer>
    );
  }
}

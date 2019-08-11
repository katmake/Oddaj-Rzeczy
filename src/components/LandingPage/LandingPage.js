import React, { Component } from 'react';
import Header from "../Header/Header";
import Achievements from "../Achievements/Achievements";
import CallToAction from "../CallToAction/CallToAction";
import About from "../About/About";
import FoundationList from "../FoundationList/FoundationList";
import Footer from "../Footer/Footer";
import './LandingPage.scss';

export default class LandingPage extends Component {
  render() {
    return (
      <div className="landingPage">
        <Header />
        <Achievements />
        <CallToAction />
        <About />
        <FoundationList />
        <Footer />
      </div>
    )
  }
}

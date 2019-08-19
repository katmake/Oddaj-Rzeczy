import React, { Component } from 'react';
import Header from "../Header";
import Achievements from "../Achievements";
import CallToAction from "../CallToAction";
import About from "../About";
import FoundationList from "../FoundationList";
import Footer from "../Footer";
import './LandingPage.scss';

export default class LandingPage extends Component {

  state = {
    loggedIn: true
  }

  render() {
    return (
      <div className="landingPage">
        <Header loggedIn={this.state.loggedIn} userName="Tomek"/>
        <Achievements />
        <CallToAction />
        <About />
        <FoundationList />
        <Footer />
      </div>
    )
  }
}

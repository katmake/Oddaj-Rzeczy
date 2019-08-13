import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "../LandingPage";
import SignUpForm from "../SignUpForm";
import LogInForm from "../LogInForm"

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LandingPage}/>
      <Route exact path="/rejestracja" component={SignUpForm}/>
      <Route exact path="/logowanie" component={LogInForm}/>
    </Switch>
  </BrowserRouter>
);

export default Router;
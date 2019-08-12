import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "../LandingPage";
import SignUpForm from "../SignUpForm";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LandingPage}/>
      <Route exact path="/logowanie" component={SignUpForm}/>
    </Switch>
  </BrowserRouter>
);

export default Router;
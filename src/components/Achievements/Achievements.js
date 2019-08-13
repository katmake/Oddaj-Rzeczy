import React, { Component } from "react";
import accomplishments from "./accomplishments";
import Achievement from "../Achievement";
import "./Achievements.scss";

export default class Achievements extends Component {
  render() {
    return (
      <section id="achievements" className="achievements">
        <div className="achievementsBox">
          {Object.keys(accomplishments).map(key => (
            <Achievement key={key} accomplishment={accomplishments[key]} />
          ))}
        </div>
      </section>
    );
  }
}

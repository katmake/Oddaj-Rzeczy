import React, { Component } from "react";
import ClickOutHandler from "react-onclickout";
import "./UserNavigation.scss";

export default class UserNavigation extends Component {
  state = {
    active: false
  };

  handleClick = () => {
    this.setState(prevState => {
      return {
        active: !prevState.active
      };
    });
  };

  render() {
    return (
      <div className="userNav">
      <ClickOutHandler onClickOut={() => this.setState({ active: false })}>
        <div className="userNav__header">
          <div className="userNav__greeting">{`Witaj ${this.props.userName}`}</div>
          <div className="userNav__icon" onClick={this.handleClick}>
            <i className="fas fa-cog" />
          </div>
        </div>
        
          <div>
            <ul className={this.state.active ? "open" : ""}>
              <li>
                <a href="#header" onClick={() => this.setState({ active: false })}>Profil</a>
              </li>
              <li>
                <a href="#header" onClick={() => this.setState({ active: false })}>Ustawienia</a>
              </li>
              <li>
                <a href="#header" onClick={() => this.setState({ active: false })}>Moje zbiórki</a>
              </li>
              <li>
                <a href="#header" onClick={() => this.setState({ active: false })}>Wyloguj</a>
              </li>
            </ul>
          </div>
        </ClickOutHandler>
      </div>
    );
  }
}

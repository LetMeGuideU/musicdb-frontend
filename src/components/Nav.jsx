import React, { Component } from "react";
import logo from "../assists/logo colored-01.png";
import profile from "../assists/profile icon-01.png";
export default class Nav extends Component {
  render() {
    return (
      <>
        <nav className="navbar music-navbar">
          <div className="container">
            <span className="navbar-brand mb-0 h1">
              <img src={logo} alt="musicdb" className="img-fluid logo" />
            </span>
            <a href="/" className="profile">
              profile&ensp;
              <img src={profile} alt="profile" className="img-fluid" />
            </a>
          </div>
        </nav>
      </>
    );
  }
}

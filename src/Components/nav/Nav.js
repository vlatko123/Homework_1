import React, { Component } from "react";
import "./Nav.css";

class Nav extends Component {
  render() {
    return (
      <nav className="nav-wrapper">
        <div className="contact">
          <a href="#"><i class="fa fa-facebook-square"></i></a>
          <a href="#"><i class="fa fa-instagram"></i></a>
          <a href="#"><i class="fa fa-github-square"></i></a>
        </div>
      </nav>
    );
  }
}

export default Nav;

import React, { Component } from "react";
import "./Input.css";

class Input extends Component {
  render() {
    return (
      <div className="input-wrapper">
        <label htmlFor={this.props.type}>{this.props.placeholder}</label>
        <input id={this.props.type} className="input-field" type={this.props.type} placeholder={this.props.placeholder}/>
      </div>
    );
  }
}

export default Input;

import React, { Component } from "react";
import "./Main.css";

class RightSide extends Component {
  render() {
    return (
      <div className="info-paragraph">

        <div className="heading">
          <h3>What i do?</h3>
        </div>
        <div className="description">
          <p>
            I am front-end developer, skilled in {this.props.skill1}, {this.props.skill2}, {this.props.skill3}, 
            {this.props.skill4}, {this.props.skill5}, {this.props.skill6}
          </p>
        </div>
      </div>
    );
  }
}

export default RightSide;

import React, { Component } from "react";
import "./SingleCard.css";

class SingleCard extends Component {
  render() {
    return (
      <div>
        <div className="cardContainer">
          <div className="id">
            <p>{this.props.id}</p>
          </div>
          <div className="pictureBox">
            <img src={this.props.url} alt="pic" />
          </div>
          <div className="body">
            <h6>{this.props.title}</h6>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleCard;

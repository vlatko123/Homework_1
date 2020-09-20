import React, { Component } from "react";
import "./SingleProject.css";
import img1 from "../SingleProject/img1.jpeg";

class SingleProject extends Component {
  render() {
    return (
      <div className="card-wrapper">
        <img className="thumbnail" src={img1} alt="picture" />
        <div className="content">
          <h5 className="post-title">{this.props.title}</h5>
          <p className="post-intro">{this.props.paragraph}</p>
          <a href={this.props.link} target="_blank">
            Check it
          </a>
        </div>
      </div>
    );
  }
}

export default SingleProject;

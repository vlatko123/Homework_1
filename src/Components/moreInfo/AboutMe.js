import React, { Component } from "react";
import "./AboutMe.css";

class AboutMe extends Component {
  render() {
    return (
      <div className="about-me">
        <div className="about-me-description">
          <h3>More About Me</h3>
          <p>
            I am begginer in this field, but i'm working constantly, with other
            words i'm taking courses and trainings so i can strength my
            knowledge in Web Development.
          </p>
        </div>
        <div className="about-me-top-expertise">
          <div className="expertise-heading">
            <h2>Top Expertise</h2>
          </div>

          <div className="list">
            <ul>
              <li>{this.props.expertise1}</li>
              <li>{this.props.expertise2}</li>
              <li>{this.props.expertise3}</li>
            </ul>
            <ul>
              <li>{this.props.expertise4}</li>
              <li>{this.props.expertise5}</li>
              <li>{this.props.expertise6}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;

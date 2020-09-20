import React, { Component } from "react";
import "./Projects.css";
import SingleProject from "../SingleProject/SingleProject";

class Projects extends Component {
  render() {
    return (
      <div className="cards-field">
        <h2>Some of my past projects</h2>
        <div className="cards">
          <div className="card1">
            <SingleProject
              title="Single Project"
              paragraph="Using Bootstrap and Flex to build a simple web page"
              link="https://vlatko123.github.io/Project-3/"
            />
          </div>
          <div className="card2">
            <SingleProject
              title="Bike Shop"
              paragraph="Application made by using JavaScrip and jQuery"
              link="https://vlatko123.github.io/Project-2/"
            />
          </div>
          <div className="card3">
            <SingleProject
              title="Logic games"
              paragraph="Application made by using JavaScrip and jQuery"
              link="https://vlatko123.github.io/Project-4/"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;

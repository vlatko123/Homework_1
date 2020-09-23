import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import Posts from "./Components/Posts/Posts";

class App extends Component {
  render() {
    return (
      <div className="main">
        <Container>
          <Posts />
        </Container>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import './Singlepost.css';


class SinglePost extends Component {
  clickHandler = () => {
   alert("It works")
  };

  render() {
    return (
      <div className="cardStyle">
        <Card style={{ width: "18rem" }}>
          {/* <Card.Img variant="top" src={"holder.js/100px180"} /> */}
          <Card.Body className="bodyHeight">
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.body}</Card.Text>
            <Button onClick={this.clickHandler} variant="primary">Click me!</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default SinglePost;

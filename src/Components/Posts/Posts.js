import React, { Component } from "react";
import axios from "axios";
// import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import SinglePost from "../SinglePost/SinglePost";
import './Posts.css';

class Posts extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }
  componentDidMount() {
    axios.get("http://jsonplaceholder.typicode.com/posts").then(response => {
      this.setState({
        posts: response.data,
      });
      console.log(response);
    });
  }

  render() {
    return (
      <div className="flex">
        {this.state.posts.map((post, index) => {
          return (
            <div key={index} className="style">
            {/* <Row> */}
            <Col md="4" className="cardHeight">
                <SinglePost title={post.title} body={post.body} />
              </Col>

            {/* </Row> */}
              
            </div>
          );
        })}
      </div>
    );
  }
}

export default Posts;

import React, { Component } from "react";
import "./PhotoGalery.css";
import axios from "axios";
import SingleCard from '../Card/SingleCard';

class PhotoGalery extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
    };
  }
  componentDidMount() {
    axios.get("http://jsonplaceholder.typicode.com/photos")
    .then(response => {
      this.setState({
        photos: response.data,
    });
    console.log(this.state.photos);
});
  }
  render() {
    return (
      <div className="wrapper">
        {this.state.photos.slice(0, 100).map((photo, index) => {
            return (
                <div key={index}>
                    <SingleCard url ={photo.thumbnailUrl} title = {photo.title} id={photo.id} />
                </div>
            )
        })}
      </div>
    );
  }
}

export default PhotoGalery;

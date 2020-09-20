import React, { Component } from "react";
import "./intro.css";

function Intro(props) {
  return (
    <div className="my-name">
      <h1>HI, I AM {props.name}</h1>
    </div>
  );
}

export default Intro;

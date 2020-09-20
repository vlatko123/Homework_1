import React, { Component } from "react";
import "./App.css";
import Intro from "./Components/Intro/intro";
import LeftSide from "./Components/mainInfo/LeftSide";
import RightSide from "./Components/mainInfo/RightSide";
import Nav from "./Components/nav/Nav";
import AboutMe from "./Components/moreInfo/AboutMe";
import Projects from './Components/Projects/Projects';
import GetInTouchForm from './Components/GetInTouchForm/GetInTouchForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Intro name="VLATKO BOGOJEVSKI" />
        <div className="wrapper">
          <Nav />
          <div className="main-info">
            <LeftSide />
            <RightSide
              skill1="HTML"
              skill2="CSS"
              skill3="JavaScript"
              skill4="React.js"
              skill5="AJAX"
              skill6="GIT"

            />
          </div>
        </div>
        <div className="more-info">
          <AboutMe
            expertise1="HTML"
            expertise2="CSS"
            expertise3="JavaScript"
            expertise4="React.js"
            expertise5="AJAX"
            expertise6="GIT"
          />
        </div>
        <Projects />
        <GetInTouchForm />
      </div>
    );
  }
}

export default App;

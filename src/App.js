import React, {Component} from 'react';
import './App.css';
import PhotoGalery from './Components/PhotoGalery/PhotoGalery';
import Title from './Components/Title/Title';



class App extends Component {
  render() {
    return(
      <div className="main">
        <Title />
        <PhotoGalery />

      </div>
    )
  }
}

export default App;

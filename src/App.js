import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/navigation/Navigation';
import ImageLinkForm from './components/imagelinkform/ImageLinkForm';
import FaceRecognition from './components/facerecognition/FaceRecognition';
import Rank from './components/rank/Rank';
import Clarifai from 'clarifai';
import './App.css';

const app = new Clarifai.App({
  apiKey: 'a2aca3c2cb3d40c6b2ec2f055463c782'
 });

const particlesOptions = {
  particles: {
    width: '100%',
    height: '100%',
    number:{
value: 100,
density: {
  enable: true,
  value_area: 800
},

    }

  }
  
}
class App extends Component {
  constructor(){
    super();
    this.state = {
      input: ''
    }
  }
  onInputChange = (event) => {
console.log(event.target.value);
  }
  onButtonSubmit = () => {
    console.log('click');
    app.models.predict("a403429f2ddf4b49b307e318f00e528b", "https://samples.clarifai.com/face-det.jpg").then(
    function(response) {
      // do something with response
      console.log(response);
    },
    function(err) {
      // there was an error
    }
  );
  }
  render(){
    return (
  
      <div className="App">
        <Particles 
        className="particles"
        params={particlesOptions}
      
            />
      <Navigation />
      <Rank />
      <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
      <FaceRecognition />
       
      </div>
    );
  }

}

export default App;

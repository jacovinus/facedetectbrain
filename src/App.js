import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import SignIn from './components/signin/SigIn';
import Navigation from './components/navigation/Navigation';
import ImageLinkForm from './components/imagelinkform/ImageLinkForm';
import FaceRecognition from './components/facerecognition/FaceRecognition';
import Rank from './components/rank/Rank';

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
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin'
    }
  }

  calculateFaceLocation = (data) => {
const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
const image = document.getElementById('inputimage');
const width = Number(image.width);
const height = Number(image.height);
return {
  topRow: clarifaiFace.top_row * height,
  rightCol: width - (clarifaiFace.right_col * width),
  bottomRow: height - (clarifaiFace.bottom_row * height),
  leftCol: clarifaiFace.left_col * width
  

  }
}

displayFaceBox = (box) => {
  console.log(box);
  return this.setState({box})
}
  onInputChange = (event) => {
this.setState({input: event.target.value});
  }
  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models
    .predict(Clarifai.FACE_DETECT_MODEL, 
      this.state.input)
    .then( response => this.displayFaceBox(this.calculateFaceLocation(response)))
    .catch(err => console.log(err));
  }

  onRouteChange = () => {
   this.setState({route:'home'});
  }
  render(){
    return (
  
      <div className="App">
        <Particles 
        className="particles"
        params={particlesOptions}
      
            />
        
      <Navigation />
      { this.state.route === 'signin' ?
      <SignIn onRouteChange={this.onRouteChange}/> :
<div>
      <Rank />
      <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
      <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl}/>
      </div>
      }
      </div>
      );
    }
    
  

}

export default App;

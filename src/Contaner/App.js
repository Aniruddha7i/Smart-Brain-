import './App.css';
import React, { Component } from 'react';
import ParticleBackground from '../Component/Particle/ParticleBackground'
import Navigation from '../Component/Navication/Navigation';
import Logo from '../Component/Logo/Logo';
import UrlForm from '../Component/UrlForm/UrlForm';
import Rank from '../Component/Rank/Rank';
import Boxes from '../Component/Face/Boxes';
import FaceRecognation from '../Component/Face/FaceRecognation';
import SignIn from '../Component/SignIn/SignIn';
import SignUp from '../Component/SignUp/SignUp';

// this function to get the image bytes string value
// async function getImageBytesString(url) {
//   try {
//     const response = await fetch(url, {
//       mode: 'cors', // Enable CORS for cross-origin images
//     });
//     const arrayBuffer = await response.arrayBuffer();
//     const bytesString = btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)));
//     return bytesString;
//   } catch (error) {
//     console.error('Error fetching image:', error);
//     return null;
//   }
// }
// getImageBytesString(this.state.IMAGE_URL)
//   .then(bytesString => {
//     // this.state.IMAGE_BYTES_STRING=bytesString;
//     // console.log(this.state.IMAGE_BYTES_STRING);
//     this.setState({IMAGE_BYTES_STRING:bytesString});
//     console.log(this.state.IMAGE_BYTES_STRING);
//     // console.log(this.state.IMAGE_BYTES_STRING); // Base64-encoded bytes string
//   })
//   .catch(error => {
//     console.error(error);
//   });



class App extends Component { 
  constructor() {
    super();
    this.state={
      intput: '',
      IMAGE_URL:'',
      IMAGE_BYTES_STRING:'',
      box:[],
      rout:'signup',
      signIn:true,
    }
  }
  
 
  onInputchange=(event)=>{
    console.log(event.target.value);
    this.setState({intput:event.target.value});
    // console.log(this.state.intput) ---> it gives emty string because still this.state.input is not 
    // updated we can use it in onSubmit function
  }
  OnsignState=()=>{
    if(this.state.rout==='home'){
      this.setState({signIn:true});
      return true;
    }
    else{
      this.setState({signIn:false});
      return false;
    }
  }
  OnchangeRout=(routs)=>{
    this.setState({rout:routs});
    if(routs==='home'){ 
      this.setState({signIn:true})
    }
    else {
      this.setState({signIn:false})
    };
  }
  onSubmit=()=>{
    this.setState({IMAGE_URL:this.state.intput});    
// ////////
///////////////////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, user and app ID, model details, and the URL
// of the image we want as an input. Change these strings to run your own example.
//////////////////////////////////////////////////////////////////////////////////////////////////

// Your PAT (Personal Access Token) can be found in the portal under Authentification
const PAT = '74ef80101d8d4a5a89c495778f075462';
// Specify the correct user_id/app_id pairings
// Since you're making inferences outside your app's scope
const USER_ID = '8s8hm0epxcvj';
const APP_ID = 'test';
// Change these to whatever model and image URL you want to use
const MODEL_ID = 'face-detection';
// const MODEL_VERSION_ID = '6dc7e46bc9124c5c8824be4822abe105';
// const IMAGE_URL = 'https://samples.clarifai.com/metro-north.jpg';
// To use image bytes, assign its variable   
// const IMAGE_BYTES_STRING = '/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAoACgDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAYDBQcE/8QAMBAAAQMDAwMDAgQHAAAAAAAAAQIDBAAFEQYSIQcTMTJBURRhCBYikSNScXKhsdH/xAAZAQACAwEAAAAAAAAAAAAAAAAFBgIDBAf/xAAtEQABAwMBBgQHAQAAAAAAAAABAgMRAAQhMQUSE0FRYQaBocEUFiJCcrHR8P/aAAwDAQACEQMRAD8A3+RYY1unSYzCS0ttZUkAgktn0q5yT7jPyDUC4wdGwycH5U2Kt9ZQ7VI1qw5PkvQy3CSVPpf7aQjuKyFH25xzn3pHn3TVNy01Hl2hyy6YdkSpKsS9sl/6RlI3rRu3dxWd6spwnAGPIJTfl925fcLaoSDHXvyo6i9SlCQrU9wKln3OyWiaDN1RAbW3kKbSd7gPtwMkH/tTWy9afuy1iPfnXMAblITwkE4yf08cn3pSbYt1uts24XH6fUbiLAuY1MWyGkLEmUW0rcCRvUpQ5CtwKQCPgi4S1ZbDe4sd9NntDEe79m3uOBLTr0IR9jzodSMqUpTu9JJ8owD7UTT4ZCfv9PbP7860m+s+HBSrejWRuz2kAxoesGYxTW/Zlpkwo1vkuSly3UgKWQUhHJUvIHsAaKTemF8XE6sWmxyZkiaZrMh1jv8ArQNpUVqB8FW0njHqx4zRVVhsph1KlKk5xQ+7uHmikaSJrQerMByet2IwvtuTLa4xv2k7Rk84H9x/esHv92d01boenLXGcuiWrFIhLlpbcaQ2/JdK3VJCkAq2pAR7Zz7YxWudY9fxNIdQbNGkR5TyX4aisNNpUMFZAzkj4NK0jq9ZpbLr0PSlzkhrlZDaQlP3P8Q4/ap3F87bPucJEkx/hHv60b2TYXLrKN5sramYECSQRk9M6c6zmJ+eb5Hi22M7cnWGIQgFLbX0zSo4PDa1YBcTgDyMjJ/qbGPabH08SJt1Uzc9QqRliGg5QySPKvgc+TyfYDmmTUWpNYz7ctxoQdPQshCktupckDJUPUcJT6DwMq8YyaQ9VL0pCS8zapcq4SVOBZmPDO8/cnknlWcDBwn4NYnPjLkQ+qE9OtOVlYpeVHDCEkkkJyT+SuQzy5Y0ru6Ez511/Efa5s1fdkOtyVurIxgdlQAA9gOKKPwolU7remU5hCGYEgo38KUv9I/0TRTDYJCWQBSF4rIN/CRgAR0iTpVD1j1g/qDqJcJqlKcjB9bcda142MpOEJAzgeMnjyTSyze5KEuNRpDoDvC0oe4X9iAeaKKFK+oya6fbOqYbDTeEiAPKpHdS3gBLYc7RQkp3ApQog+cq8nwPJrljzxnPZbUfnugn/NFFRgEVch9xKsH0H8pg6e3x3T3UC1ajaZITGkJLoS4MKbOUrzz/ACKVRRRVzVwtoQmhG1NkWu0HuI+JI8u/Kv/Z';
// const IMAGE_BYTES_STRING=getImageBytesString(this.state.IMAGE_URL);
///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////



const raw = JSON.stringify({
    "user_app_id": {
        "user_id": USER_ID,
        "app_id": APP_ID
    },
    "inputs": [
        {
            "data": {
                "image": {
                    "url": this.state.intput,
                    // "base64": this.state.IMAGE_BYTES_STRING,
                }
            }
        }
    ]
});

const requestOptions = {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Authorization': 'Key ' + PAT
    },
    body: raw
};

// NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
// https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
// this will default to the latest version_id

fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/outputs", requestOptions)
    .then(response => response.json())
    .then(result => {
      
        const BoxList=[];
        const regions = result.outputs[0].data.regions;

        regions.forEach(region => {
            // Accessing and rounding the bounding box values
            const boundingBox = region.region_info.bounding_box;
            // Those values measer from top and left of the image.(TOP most point is 0 and left most point is 0)
            const topRow = boundingBox.top_row.toFixed(3);
            const leftCol = boundingBox.left_col.toFixed(3);
            const bottomRow = boundingBox.bottom_row.toFixed(3);
            const rightCol = boundingBox.right_col.toFixed(3);
            const image = document.getElementById('inputImage');
            const width= Number(image.width);
            const height = Number(image.height);
            const Box ={
              h:bottomRow*height-topRow*height,
              w:rightCol*width-leftCol*width,
              L:leftCol*width,
              R:width-(rightCol*width),
              T:topRow*height,
              B: height-(bottomRow*height),
            };
            BoxList.push(Box);
          });
          this.setState({box:BoxList});

    })
    .catch(error => console.log('error', error));


  }
  render(){
    // console.log(this.state.box);
    if(!this.state.signIn){
      if(this.state.rout==='signup'){
        return(
          <div className='App'>
            {"This is a test"}
            <ParticleBackground/>
            <Navigation OnchangeRout={this.OnchangeRout} signin={this.state.signIn}/>
            <SignUp OnchangeRout={this.OnchangeRout}/>
          </div>
      
        );
      }
      else{
        return(
          <div className='App'>
            <ParticleBackground/>
            <Navigation OnchangeRout={this.OnchangeRout} signin={this.state.signIn}/>
            <SignIn OnchangeRout={this.OnchangeRout}/>
          </div>
  
        );
      }
    }
    else{
      return (
        <div className="App">
          <ParticleBackground/>
          <Navigation OnchangeRout={this.OnchangeRout} signin={true}/>
          <Logo/>
          <Rank/>
          <UrlForm onInput={this.onInputchange} onSubmit={this.onSubmit}/>
          <FaceRecognation imageurl={this.state.IMAGE_URL}/>
          <Boxes boxes={this.state.box}/>
        </div>
      );
    }
  }
}

export default App;

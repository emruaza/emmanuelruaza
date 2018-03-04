import React, { Component } from 'react';
import Particles from 'react-particles-js';

const s = {
  canvasBg: {
    background: "-moz-linear-gradient(left, rgba(22,7,38,1) 0%, rgba(31,14,39,1) 43%, rgba(43,23,40,0.9) 100%)",
    background: "-webkit-linear-gradient(left, rgba(22,7,38,1) 0%,rgba(31,14,39,1) 43%,rgba(43,23,40,0.9) 100%)",
    background: "linear-gradient(to right, rgba(22,7,38,1) 0%,rgba(31,14,39,1) 43%,rgba(43,23,40,0.9) 100%)",
    height: "100%",
    left: "0",
    position: "absolute",
    top: "0",
    width: "100%",
    zIndex: "1"
  }
}

class CParticle extends Component {
  render() {
    return (
      <div>
        <Particles params={{
          "particles": {
            "number": {
              "value": 34,
              "density": {
                "enable": true,
                "value_area": 800
              }
            },
            "color": {
              "value": "#512C68"
            },
            "shape": {
              "type": "circle",
              "stroke": {
                "width": 0,
                "color": "#000000"
              },
              "polygon": {
                "nb_sides": 5
              },
              "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
              }
            },
            "opacity": {
              "value": 1,
              "random": true,
              "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0,
                "sync": false
              }
            },
            "size": {
              "value": 3,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 4,
                "size_min": 0.3,
                "sync": false
              }
            },
            "line_linked": {
              "enable": true,
              "distance": 15,
              "color": "#ffffff",
              "opacity": 0.2,
              "width": 1
            },
            "move": {
              "enable": true,
              "speed": 1,
              "direction": "none",
              "random": true,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 600
              }
            }
          }
        }}/>
        <div style={s.canvasBg}></div>
      </div>
    )
  }
}

export default CParticle;
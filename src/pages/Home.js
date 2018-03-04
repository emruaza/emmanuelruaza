import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Particle from './Particle';

import bg from '../images/bg.jpg';
import clck from '../images/clck.svg';
import fingr from '../images/fingr.svg';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      mountedHeight: false,
      redirect: false,
      showdv: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({showdv: true});

    setTimeout(() => {
      this.setState({ redirect: true })
    }, 1010);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ mountedHeight: true })
    }, 500);
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/about-me" />
    }

    return(
      <div id="custBG" className="homepage" style={{backgroundImage: "url("+bg+")"}}>
        <div className="clearfix homepage__container">
          <div className="homepage__border-left" style={{height: this.state.mountedHeight ? "100%" : ""}}></div>
          <h1 className="karma homepage__header">Hello! I'm Emman.</h1>
          <h2 className="hind homepage__header--big">
            A passionate
            <br/>
            <span className="homepage__header--bigger">Front-end Developer</span>
          </h2>
        </div>
        <span onClick={this.handleClick} className="hind text-center pulse homepage__anchor">
          ABOUT ME<br/>
          <img src={clck} alt="click" className="clickEffect homepage__icon-click"/>
          <img src={fingr} alt="click homepage__icon-finger"/>
        </span>
        <Particle />
        <div className={(this.state.showdv ? "homepage__aboutme-show" : "")+" grad-bgdiv"}></div>
      </div>
    )
  }
}

export default Home;

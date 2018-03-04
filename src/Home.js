import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Particle from './Particle';

import bg from './bg.jpg';
import clck from './clck.svg';
import fingr from './fingr.svg';

class Home extends Component {
  constructor() {
    super();

    this.state = {
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

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/about-me" />
    }

    return(
      <div id="custBG" className="homepage" style={{backgroundImage: "url("+bg+")"}}>
        <div className="clearfix homepage__container">
          <h1>
            <span className="hind homepage__introduction">Hello, I'm <strong>emman</strong> a</span>
            <p className="karma homepage__passionate-wrap"><span className="homepage__passion-txt">Passionate</span><br/>Web Developer.</p>
          </h1>
          <p className="hind homepage__intro-skills">
            Front End Developer <span className="homepage__intro-spacer">|</span> Wordpress <span className="homepage__intro-spacer">|</span> Ruby on Rails
          </p>
        </div>
        <span onClick={this.handleClick} className="hind text-center pulse homepage__anchor">
          About Me<br/>
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

import React, { Component } from 'react';
import Myskills from './Myskills';

class About extends Component {
  constructor() {
    super();

    this.state = {
      mounted: false,
      mountskills: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ mounted: true })
    }, 500);

    setTimeout(() => {
      this.setState({ mountskills: true })
    }, 1000);
  }

  render() {
    return(
      <div className="clearfix">
        <div className={(this.state.mounted ? "showComp" : "hideComp")+" aboutme "+(this.state.mountskills ? "showComp-2" : "hideComp-2")}>
          <div className="hind clearfix">
            <h1 className="aboutme__header">I'm Emmanuel Ruaza, Front-end Developer.</h1>
            <section className="karma aboutme__top-content">
              <p>I am a natural born Filipino. My hometown is in Dumaguete City, but I'm currently in Manila working as a web developer. I've been in the industry for 5 years now. I started my career as a Freelancer Graphic Designer back in college. Then I became a Wordpress Developer for a little over a year. Now I'm on my 3rd year in Ruby on Rails as a Front-end Developer. Coding has always been my passion and it has become my hobby that I do it even in my free time. In addition to my technical development, I have also grown personally and interpersonally with the diverse situations I encounter in and out of the workplace.</p>
            </section>
          </div>
        </div>
        <Myskills />
      </div>
    )
  }
}

export default About;

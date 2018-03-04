import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './style.scss';

import Home from './Home';
import About from './About';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/about-me" component={About} />
        </div>
      </Router>
    )
  }
}

export default App;

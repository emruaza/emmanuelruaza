import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './style.scss';

import Home from './pages/Home';
import About from './pages/About';

class App extends Component {
  render() {
    return (
      <Router basename="/emmanuelruaza/">
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/about-me" component={About} />
        </div>
      </Router>
    )
  }
}

export default App;

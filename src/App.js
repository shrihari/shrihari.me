import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { AnimatedSwitch } from 'react-router-transition';
import logo from './logo.svg';

import Home from './Home.js';
import About from './About.js';
import ScrollToTop from './ScrollToTop.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <div className="App">
            <div className="container">

              <div className="header">
                <div className="header-logo">
                  <Link to="/"><img src={logo} alt="Shri" /></Link>
                </div>

                <div className="header-menu">
                </div>
              </div>

              <AnimatedSwitch
                atEnter={{ opacity: 0, top: 12 }}
                atLeave={{ opacity: 0, top: 12 }}
                atActive={{ opacity: 1, top: 0 }}
                className="switch-wrapper"
              >
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
              </AnimatedSwitch>

            </div>
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;

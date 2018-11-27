import React, { Component } from 'react';
import { Link } from "react-router-dom";
import moviemonkey from './moviemonkey.jpg';
import moviemonkey2x from './moviemonkey@2x.jpg';
import freshcaller from './freshcaller.jpg';
import freshcaller2x from './freshcaller@2x.jpg';
import booknplay from './booknplay.jpg';
import booknplay2x from './booknplay@2x.jpg';
import mileageapp from './mileageapp.png';
import mileageapp2x from './mileageapp@2x.png';
import spaces from './spaces.jpg';
import spaces2x from './spaces@2x.jpg';

import Footer from './Footer.js';

import './App.css';
import './Home.css';

class Home extends Component {
  render() {
    // window.jQuery('html,body').animate({ scrollTop: 0 }, 300);
    return (
      <div className="Home">

          <div className="intro">
            <div><span role="img" aria-label="Hey">👋</span></div>
            <div>Hey, I’m <strong>Shrihari</strong></div>
          </div>

          <div className="intro-2">I <strong style={{color: '#CC5289'}}>design</strong> &amp; <strong style={{color: '#5295CC'}}>build</strong> digital products</div>

          <div className="intro-3">You can read <Link to="/about">about me</Link> or check out some of my work below.</div>

          <div className="project moviemonkey">

            <div className="project-image">
              <img src={moviemonkey}  srcSet={moviemonkey + ' 1x,' + moviemonkey2x + ' 2x'} alt="Movie Monkey" />
            </div>
            <div className="project-details">
              <div className="project-name">Movie Monkey</div>
              <div className="project-description">
              A simple desktop application to organise movies. First built in 2011, I recently redesigned and developed Movie Monkey using Electron.
              </div>
              <div className="project-link"><a href="http://getmoviemonkey.com">getmoviemonkey.com</a></div>
            </div>

          </div>

          <div className="project freshcaller">

            <div className="project-image">
              <img src={freshcaller}  srcSet={freshcaller + ' 1x,' + freshcaller2x + ' 2x'} alt="Freshcaller" />
            </div>
            <div className="project-details">
              <div className="project-name">Freshcaller</div>
              <div className="project-description">
              A SaaS phone product for sales and support teams. This is the product I design at my current job at Freshworks.
              </div>
              <div className="project-link"><a href="http://freshcaller.com">freshcaller.com</a></div>
            </div>

          </div>

          <div className="project booknplay">

            <div className="project-image">
              <img src={booknplay}  srcSet={booknplay + ' 1x,' + booknplay2x + ' 2x'} alt="Book n Play" />
            </div>
            <div className="project-details">
              <div className="project-name">BooknPlay</div>
              <div className="project-description">
              An online platform to find and book sports facilities. I designed the first version of their web and mobile apps. Recently I redesigned the product, and developed the frontend using React. It's currently being integrated with the backend.
              </div>
              <div className="project-link"><a href="http://booknplay.in">booknplay.in</a></div>
            </div>

          </div>

          <div className="project mileageapp">

            <div className="project-image">
              <img src={mileageapp}  srcSet={mileageapp + ' 1x,' + mileageapp2x + ' 2x'} alt="Mileage Tracker app" />
            </div>
            <div className="project-details">
              <div className="project-name">Mileage Tracker App</div>
              <div className="project-description">
              A simple app to keep track of fuel economy of a vehicle. This is a side project I'm working on, to learn React Native.
              </div>
              <div className="project-link"></div>
            </div>

          </div>

          <div className="project spaces">

            <div className="project-image">
              <img src={spaces}  srcSet={spaces + ' 1x,' + spaces2x + ' 2x'} alt="Spaces" />
            </div>
            <div className="project-details">
              <div className="project-name">Spaces</div>
              <div className="project-description">
              An indoor-map-based app to find and book meeting rooms. I designed and built this during an internal hackathon at Freshworks. 
              </div>
              <div className="project-link"></div>
            </div>

          </div>

          
          <Footer />

      </div>
    );
  }
}

export default Home;

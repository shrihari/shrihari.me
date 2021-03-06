import React, { Component } from 'react';
import shrihari from './shrihari.png';
import shrihari2x from './shrihari@2x.png';

import Footer from './Footer.js';

import './about.css';

class About extends Component {
  render() {
    // window.jQuery('html,body').animate({ scrollTop: 0 }, 300);
    return (
      <div>
        <div className="about">

          <div className="about-photo">
            <img src={shrihari}  srcSet={shrihari + ' 1x,' + shrihari2x + ' 2x'} alt="Shrihari" />
          </div>
          <div className="about-text">

            <div>I'm <strong>Shrihari Sankaran</strong>, a product designer + frontend developer based out of London.</div>

            <div>I got into tech &amp; design when I was 15, building simple websites on <a href="https://en.wikipedia.org/wiki/Yahoo!_GeoCities">Geocities</a> over dial-up internet. </div>

            <div>These days, I spend most of my time designing simple &amp; usable experiences for digital products. I design in Sketch and build in HTML, CSS and Javascript. Recently, my focus has been on creating scalable design systems.</div>

            <div>While I'm not making stuff, I like to travel, learn/play guitar or ponder about life, universe and everything.</div>

            <div>You can reach out to me at <a href="mailto:iamshrihari@gmail.com">iamshrihari@gmail.com</a></div>

            <div>Elsewhere: <a href="https://www.linkedin.com/in/sshrihari/">LinkedIn</a> • <a href="http://twitter.com/shrihari">Twitter</a></div>
          </div>

        </div>

        <Footer />

      </div>
    );
  }
}

//<div>While in college, I built <a href="http://getmoviemonkey.com">Movie Monkey</a> in an effort to learn Python. </div>
//After learning HTML, CSS and some PHP, in 2007, I built the first version of <a href="http://kontactr.com">Kontactr</a>, shortly before going to college.
//            <div><small>Tools I usually work with:</small> Pen & paper, Sketch, Invision, Sublime Text</div>
//            <div><small>Tech I use:</small> HTML, CSS, Javascript, React, React Native</div>

export default About;

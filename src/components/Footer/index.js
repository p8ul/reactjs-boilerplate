import React from 'react';

const Footer = () => (
  <div className="ui inverted vertical footer segment">
    <div className="ui container">
      <div className="ui stackable inverted divided equal height stackable grid">
        <div className="three wide column">
          <h4 className="ui inverted header">Help</h4>
          <div className="ui inverted link list">
            <a href="#sdf" className="item">Getting started</a>
            <a href="#sf" className="item">Contact Us</a>
          </div>
        </div>
        <div className="three wide column">
          <h4 className="ui inverted header">Careers</h4>
          <div className="ui inverted link list">
            <a href="#sdf" className="item">Authors</a>
            <a href="#sdf" className="item">Reviewers</a>
          </div>
        </div>
        <div className="seven wide column">
          <h4 className="ui inverted header">Blog</h4>
          <a href="#sdf" className="item">More</a>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;

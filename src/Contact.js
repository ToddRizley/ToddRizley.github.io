import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div id='contact' className='row odd'>
        <h2 id='heading'>Contact</h2>
        <div className='social-link-row'>
          <a href="mailto:todd.rizley@gmail.com" target="_top"><i className="fa fa-envelope-o left"></i> Email </a>
          <a href="https://github.com/ToddRizley" target="_blank"><i className="fa fa-github left"></i> GitHub </a>
          <a href="https://www.linkedin.com/in/toddrizley/" target="_blank"><i className="fa fa-linkedin left"></i> LinkedIn </a>
        </div>
      </div>
    );
  }
}

export default Contact;

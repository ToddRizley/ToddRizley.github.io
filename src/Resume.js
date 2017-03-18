import React, { Component } from 'react';

class Resume extends Component {
  render() {
    return (
      <div id='resume' className='row even'>
        <div className='resume-container'>
          <h2 id='heading'>Resume</h2>
          <a href="resume.pdf" target="_blank"><i className="fa fa-file-pdf-o left"></i> Resume </a>
        </div>
      </div>
    );
  }
}


export default Resume;

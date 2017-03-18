import React, { Component } from 'react';
import NavBar from './NavBar';
import TitleArea from './TitleArea';
import AboutMe from './AboutMe';
import SkillsAndInterests from './SkillsAndInterests';
import Portfolio from './Portfolio';
import Blog from './Blog';
import Resume from './Resume';
import Contact from './Contact';

class SiteContainer extends Component {
  render() {
    return (
      <div className='site-container'>
        <NavBar />
        <TitleArea />
        <AboutMe />
        {/* <SkillsAndInterests /> */}
        <Portfolio />
        {/* <Blog /> */}
        <Resume />
        <Contact />
      </div>
    );
  }
}

export default SiteContainer;

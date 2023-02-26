import React from 'react';
import Hero from '../components/hero';
import About from '../components/about';
import Projects from '../components/projects';
import Skills from '../components/skills';
import Contact from '../components/contact';

export default function Mainpage() {
  return (
    <div>
      <div className='main'>
        <Hero></Hero>
        <div id="about">
          <About></About>
        </div>
        <div id="projects">
          <Projects></Projects>
        </div>
        <div id="skills">
          <Skills></Skills>
        </div>
        <div id="contact">
          <Contact></Contact>
        </div>
      </div>
    </div>
  )
}
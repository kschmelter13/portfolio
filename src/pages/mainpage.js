import React from 'react'
import Hero from '../components/hero';
import About from '../components/about';
import Projects from '../components/projects';
import Skills from '../components/skills';

export default function mainpage() {
  return (
    <div>
        <div className='main'>
            <Hero></Hero>
            <About></About>
            <Projects></Projects>
            <Skills></Skills>
        </div>
    </div>
  )
}

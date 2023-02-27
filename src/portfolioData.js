import pods from './assets/pods.webp'
import binarytree from './assets/binarytree.webp'
import returns from './assets/returns.webp'
import portfolio from './assets/portfolio.webp'

import resume from './assets/Resume.pdf'

import java from 'devicon/icons/java/java-original.svg';
import javascript from 'devicon/icons/javascript/javascript-original.svg';
import python from 'devicon/icons/python/python-original.svg';
import css3 from 'devicon/icons/css3/css3-original.svg';
import html5 from 'devicon/icons/html5/html5-original.svg';
import cplusplus from 'devicon/icons/cplusplus/cplusplus-original.svg';
import react from 'devicon/icons/react/react-original.svg';
import bootstrap from 'devicon/icons/bootstrap/bootstrap-original.svg';
import express from 'devicon/icons/express/express-original.svg';
import nodejs from 'devicon/icons/nodejs/nodejs-original.svg';
import sql from 'devicon/icons/mysql/mysql-original.svg';
import tailwind from 'devicon/icons/tailwindcss/tailwindcss-plain.svg';


export const resumeData = 
  {
      name: 'Resume',
      image: resume,
  };

export const projectData = [
    {
        name: 'Portfolio',
        image: portfolio,
        description: 'Paradox! My portfolio website I built from scratch using React and Tailwind, and hosted on Render.com also using Formspree. Full source on Github.',
        link: 'https://github.com/kschmelter13/portfolio'
    },
    {
      name: 'Pods',
      image: pods,
      description: 'A bank account budgeter that allows users to separate their money in "Pods". Uses React and Bootstrap for the frontend, and Supabase for the backend.',
      link: 'https://youtube.com'
    },
    {
      name: 'Returns Automation',
      image: returns,
      description: 'A web app I built for Rug Pad USA that loads, parses, and tracks amazon xml returns using the UPS API. Built with React, Bootstrap, Supabase and secured with OAuth Azure.',
      link: 'https://github.com/kschmelter13'
    },
    {
      name: 'Binary Tree',
      image: binarytree,
      description: 'A project built for my data structures and algorithms class written in C++. Has a menu for executing operations on a binary tree that stores course information.',
      link: 'https://github.com/kschmelter13/Data-Structures-Algorithms-Class'
  },  
];

  
export const skillData = [
    {
      name: 'HTML',
      image: html5,
    },
    {
      name: 'CSS',
      image: css3,
    },
    {
      name: 'Javascript',
      image: javascript,
    },
    
    {
      name: 'Bootstrap',
      image: bootstrap,
    },
    {
      name: 'Tailwind',
      image: tailwind,
    },
    {
      name: 'React',
      image: react,
    },
    {
      name: 'Python',
      image: python,
    },
    {
      name: 'Java',
      image: java,
    },
    {
      name: 'C++',
      image: cplusplus,
    },
    {
      name: 'Express',
      image: express,
    },
    {
      name: 'SQL',
      image: sql,
    },
    {
      name: 'Node',
      image: nodejs,
    },
  ];
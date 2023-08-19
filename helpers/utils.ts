import resipisImg from '@/images/resipis.png';
import bankifyImg from '@/images/bankify.png';
import burgersImg from '@/images/burgers.png';

export const navLinks = [
  { id: 1, name: 'about', href: '#about' },
  { id: 2, name: 'experience', href: '#jobs' },
  { id: 3, name: 'work', href: '#projects' },
  { id: 4, name: 'contact', href: '#contact' },
  { id: 5, name: 'education', href: '/study' },
];

export const techStack = [
  { id: 1, name: 'JavaScript (es6)' },
  { id: 2, name: 'TypeScript' },
  { id: 3, name: 'Next.JS' },
  { id: 4, name: 'Node.JS' },
  { id: 5, name: 'React' },
  { id: 6, name: 'Python' },
  { id: 7, name: 'Ruby' },
  { id: 8, name: 'Mongoose' },
];

export const positions = [
  {
    id: 1,
    company: 'microverse',
    title: 'mentor & web developer',
    period: 'april 2023 - present',
    roles: [
      {
        id: 1,
        description:
          'Performed 200+ code reviews of peers’ projects developed using languages and tech like React, Redux, Ruby, Rails, and JavaScript.',
      },
      {
        id: 2,
        description:
          'Mentored 3 junior web developers, providing technical development support in their web development journey.',
      },
      {
        id: 3,
        description:
          'Spent 1300+ hours mastering algorithms, data structures, and full-stack development while simultaneously developing projects with Ruby, Rails, JavaScript, React, and state management with Redux.',
      },
      {
        id: 4,
        description:
          'Developed skills in remote pair programming using GitHub, industry standard git-flow, and daily standups to communicate and collaborate with international remote developers',
      },
    ],
  },
  {
    id: 2,
    company: 'freelancer',
    title: 'full-stack engineer',
    period: 'january 2022 - march 2023',
    roles: [
      {
        id: 1,
        description:
          'Developed production ready backend microservices using Rails, SQL, Node.js, Express framework and databases like MongoDB and Postgres.',
      },
      {
        id: 2,
        description:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, excepturi possimus fugiat odio delectus consequuntur ea? Dicta assumenda.',
      },
      {
        id: 3,
        description:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, excepturi possimus fugiat odio delectus consequuntur ea? Dicta assumenda.',
      },
    ],
  },
  {
    id: 3,
    company: 'amazon',
    title: 'frontend engineer',
    period: 'march - june 2021',
    roles: [
      {
        id: 1,
        description:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, excepturi possimus fugiat odio delectus consequuntur ea? Dicta assumenda.',
      },
      {
        id: 2,
        description:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, excepturi possimus fugiat odio delectus consequuntur ea? Dicta assumenda.',
      },
      {
        id: 3,
        description:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, excepturi possimus fugiat odio delectus consequuntur ea? Dicta assumenda.',
      },
    ],
  },
  {
    id: 4,
    company: 'facebook',
    title: 'UI engineer',
    period: 'september - december 2022',
    roles: [
      {
        id: 1,
        description:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, excepturi possimus fugiat odio delectus consequuntur ea? Dicta assumenda.',
      },
      {
        id: 2,
        description:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, excepturi possimus fugiat odio delectus consequuntur ea? Dicta assumenda.',
      },
      {
        id: 3,
        description:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, excepturi possimus fugiat odio delectus consequuntur ea? Dicta assumenda.',
      },
    ],
  },
];

export const projects = [
  {
    id: 1,
    name: 'resipis app',
    badge: 'react based',
    image: resipisImg,
    github: 'https://github.com/hassanShakur',
    live: 'https://github.com/hassanShakur',
    techs: [
      { id: 1, name: 'react' },
      { id: 2, name: 'javaScript' },
      { id: 3, name: 'express' },
      { id: 4, name: 'material UI' },
      { id: 5, name: 'mongoose' },
    ],
    summary:
      'A recipe management web app. View suggestions, search for recipes, filter by category, profile management for saving & bookmarking favourite recipes for future exploration.',
  },
  {
    id: 2,
    name: 'bankify website',
    badge: 'javaScript based',
    image: bankifyImg,
    github: 'https://github.com/hassanShakur',
    live: 'https://github.com/hassanShakur',
    techs: [
      { id: 1, name: 'javaScript' },
      { id: 2, name: 'SCSS' },
      { id: 4, name: 'UI design' },
    ],
    summary:
      'Be able to visualize transactions modelled as simple JavaScript arrays. I built this while learning JavaScript & the project combines some of the most crucial concept in the language.',
  },
  {
    id: 3,
    name: 'the burgers',
    badge: 'javaScript based',
    image: burgersImg,
    github: 'https://github.com/hassanShakur',
    live: 'https://github.com/hassanShakur',
    techs: [
      { id: 1, name: 'javaScript' },
      { id: 2, name: 'express' },
      { id: 3, name: 'webpack' },
      { id: 4, name: 'node' },
      { id: 5, name: 'mongoose' },
    ],
    summary:
      'Built as a clone with reference to the burger king website. A full-stack side project for visualizing different available snacks in a smooth & appealing interface.',
  },
];

export const otherProjects = [
  {
    id: 1,
    name: 'second level project',
    github: 'https://github.com/hassanShakur',
    live: 'https://github.com/hassanShakur',
    techs: [
      { id: 1, name: 'typeScript' },
      { id: 2, name: 'react' },
      { id: 3, name: 'styled components' },
    ],
    summary:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, reprehenderit.',
  },
  {
    id: 2,
    name: 'chrome browser',
    github: 'https://github.com/hassanShakur',
    live: 'https://github.com/hassanShakur',
    techs: [
      { id: 1, name: 'typeScript' },
      { id: 2, name: 'react' },
      { id: 3, name: 'styled components' },
    ],
    summary:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, reprehenderit.',
  },
  {
    id: 3,
    name: 'firefox browser',
    github: 'https://github.com/hassanShakur',
    live: 'https://github.com/hassanShakur',
    techs: [
      { id: 1, name: 'typeScript' },
      { id: 2, name: 'react' },
      { id: 3, name: 'styled components' },
    ],
    summary:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, reprehenderit.',
  },
];

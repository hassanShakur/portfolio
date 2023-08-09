import projectImg from '@/images/hack-3.jpg';
import resipisImg from '@/images/resipis.png';
import bankifyImg from '@/images/bankify.png';
import burgersImg from '@/images/burgers.png';

export const navLinks = [
  { id: 1, name: 'about', href: '#about' },
  { id: 2, name: 'experience', href: '#jobs' },
  { id: 3, name: 'work', href: '#projects' },
  { id: 4, name: 'contact', href: '#contact' },
];

export const techStack = [
  { id: 1, name: 'JavaScript (es6)' },
  { id: 2, name: 'TypeScript' },
  { id: 3, name: 'NextJS' },
  { id: 4, name: 'NodeJS' },
  { id: 5, name: 'React' },
  { id: 6, name: 'Python' },
  { id: 7, name: 'Ruby' },
  { id: 8, name: 'Mongoose' },
];

export const positions = [
  {
    id: 1,
    company: 'apple',
    title: 'web developer',
    period: 'april - december 2017',
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
    ],
  },
  {
    id: 2,
    company: 'google',
    title: 'backend engineer',
    period: 'january - june 2020',
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
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nihil accusantium, quod et quam facere odio. Accusamus, eum? Repudiandae, quo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, facere.',
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
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nihil accusantium, quod et quam facere odio. Accusamus, eum? Repudiandae, quo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, facere.',
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
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nihil accusantium, quod et quam facere odio. Accusamus, eum? Repudiandae, quo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, facere.',
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

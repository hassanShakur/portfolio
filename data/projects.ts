import resipisImg from '@/images/projects/resipis.png';
import bankifyImg from '@/images/projects/bankify.png';
import burgersImg from '@/images/projects/burgers.png';

const projects = [
  {
    id: 1,
    name: 'resipis app',
    badge: 'react based',
    image: resipisImg,
    github: 'https://github.com/hassanShakur/resipis',
    live: 'https://github.com/hassanShakur/resipis',
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
    github: 'https://github.com/hassanShakur/bankify_demo',
    live: 'https://hassanshakur.github.io/bankify_demo/',
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
    github: 'https://github.com/hassanShakur/burger-ing',
    live: 'https://burger-ing.netlify.app/',
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

export default projects;

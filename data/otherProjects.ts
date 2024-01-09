const otherProjects = [
  {
    id: 1,
    name: 'my things catalog',
    github: 'https://github.com/hassanShakur/my-things-catalog',
    techs: [
      { id: 1, name: 'ruby' },
      { id: 2, name: 'shell' },
      { id: 3, name: 'SQL' },
    ],
    summary:
      'This is a console app that will help you to keep a record of the stuff you own, stored on app exit.',
  },
  {
    id: 2,
    name: 'space travellers',
    github: 'https://github.com/microhass/space-travellers',
    live: 'https://micro-space-travellers.netlify.app/',
    techs: [
      { id: 1, name: 'react' },
      { id: 2, name: 'redux' },
      { id: 3, name: 'api' },
    ],
    summary:
      'Project on active space rockets, missions and dragons, extracted from the Space Data API.',
  },
  {
    id: 3,
    name: 'todo list',
    github: 'https://github.com/microhass/todo-list',
    live: 'https://microhass-todo.netlify.app/',
    techs: [
      { id: 1, name: 'html' },
      { id: 2, name: 'css' },
      { id: 3, name: 'javaScript' },
    ],
    summary:
      'My version of a to-do list app. It allows you to add, edit, delete and mark tasks as done.',
  },
];

export type OtherProjects = typeof otherProjects;
export default otherProjects;

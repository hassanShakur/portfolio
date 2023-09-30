import googleITCerts from './miniCerts/googleIT';
import googlePMCerts from './miniCerts/googlePM';
import microverseCerts from './miniCerts/microverse';


const certifications = [
  {
    id: 0,
    name: 'Fullstack Web Development',
    ...microverseCerts,
  },
  {
    id: 1,
    name: 'Google Project Management',
    ...googlePMCerts,
  },
  {
    id: 2,
    name: 'Google IT Support',
    ...googleITCerts,
  },
];

export default certifications;

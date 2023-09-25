import googleITCerts from './miniCerts/googleIT';
import googlePMCerts from './miniCerts/googlePM';

const certifications = [
  {
    id: 0,
    name: 'Google IT Support',
    ...googleITCerts,
  },
  {
    id: 1,
    name: 'Google Project Management',
    ...googlePMCerts,
  },
];

export default certifications;

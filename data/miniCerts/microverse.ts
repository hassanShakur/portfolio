import MV_1 from '@/images/certificates/microverse/certs/mv-1.jpg';
import MV_2 from '@/images/certificates/microverse/certs/mv-2.jpg';
import MV_3 from '@/images/certificates/microverse/certs/mv-3.jpg';
import MV_4 from '@/images/certificates/microverse/certs/mv-4.jpg';

const microverseCerts = {
  origin: 'Microverse',
  mainCert: MV_4,
  summary:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus sit architecto ipsum et officia error! Mollitia fugit similique nesciunt, consequatur dolorum quas ipsam rerum, cumque eos, repellat ex consectetur corrupti!',
  minis: [
    {
      id: 1,
      course: 'HTML & CSS Module',
      certificate: MV_1,
    },
    {
      id: 2,
      course: 'JavaScript Module',
      certificate: MV_2,
    },
    {
      id: 3,
      course: 'React & Redux Module',
      certificate: MV_3,
    },
    {
      id: 4,
      course: 'Ruby & Databases Module',
      certificate: MV_4,
    },
  ],
};

export default microverseCerts;

import './study.css';
import Gallery from './Gallery';
import { certifications } from '@/helpers/utils';
import Cert from './Cert';

export const metadata = {
  title: 'Hassan | Study Journey',
  description:
    "Hassan Shakur's learning journey, education & certifications .",
};

const StudyPage = () => {
  return (
    <section id='study'>
      <Gallery />
      <div className='certs'>
        {certifications.map((c) => (
          <Cert key={c.id} cert={c} />
        ))}
      </div>
    </section>
  );
};

export default StudyPage;

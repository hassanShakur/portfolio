import './study.scss';
import Gallery from './modal/Gallery';
import { certifications } from '@/helpers/utils';
import Cert from './cert';
import StudySummary from './summary';

export const metadata = {
  title: 'Hassan | Study Journey',
  description:
    "Hassan Shakur's learning journey, education & certifications .",
};

const StudyPage = () => {
  return (
    <section id='study'>
      <StudySummary />
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

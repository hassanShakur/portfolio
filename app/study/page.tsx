import './study.scss';
import { certifications } from '@/helpers/utils';
import Cert from '@/components/study/cert';
import StudySummary from '@/components/study/summary';
import Gallery from '@/components/study/modal/Gallery';

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

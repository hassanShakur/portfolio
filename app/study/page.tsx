import Gallery from '@/components/study/modal/Gallery';
import StudySummary from '@/components/study/summary';
import certifications from '@/data/certifications';
import Cert from '@/components/study/cert';
import './study.scss';

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

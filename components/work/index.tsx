import SectionTitle from '../sectionTitle';
import CompanyTabs from './CompanyTabs';
import './work.scss';
import './info.scss'

const Work = () => {
  return (
    <section id='jobs'>
      <SectionTitle number={2} title="where i've worked" />
      <CompanyTabs />
    </section>
  );
};

export default Work;

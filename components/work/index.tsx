import SectionTitle from '../sectionTitle';
import CompanyTabs from './CompanyTabs';
import './work.css';
import './info.css'

const Work = () => {
  return (
    <section id='work'>
      <SectionTitle number={2} title="where i've worked" />
      <CompanyTabs />
    </section>
  );
};

export default Work;

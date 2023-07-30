import SectionTitle from '../sectionTitle';
import CompanyTabs from './CompanyTabs';
import './work.css';
import './info.css'

const Work = () => {
  return (
    <section id='jobs'>
      <SectionTitle number={2} title="where i've worked" />
      <CompanyTabs />
    </section>
  );
};

export default Work;

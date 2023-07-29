import SectionTitle from '../sectionTitle';
import AboutText from './AboutText';
import TechStack from './TechStack';
import './about.css';

const About = () => {
  return (
    <section id='about'>
      <div className='about-text'>
        <SectionTitle number={1} title='about me' />
        <AboutText />
        <TechStack />
      </div>
      <div className='about-img'></div>
    </section>
  );
};

export default About;

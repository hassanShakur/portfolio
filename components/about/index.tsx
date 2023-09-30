// 'use client'
import SectionTitle from '../sectionTitle';
import AboutText from './aboutText/AboutText';
import TechStack from './TechStack';
import myPortrait from '@/images/hassan-shakur.jpg';
import './about.scss';
import Image from 'next/image';

const About = () => {
  return (
    <section id='about'>
      <div className='about-text'>
        <SectionTitle number={1} title='about me' />
        <AboutText />
        <TechStack />
      </div>
      <div id='about-img'>
        <div id='outline'></div>
        <div id='front-drop'></div>
        <Image
          src={myPortrait}
          placeholder='blur'
          priority
          style={{
            width: '100%',
            height: 'auto',
          }}
          alt='A portrait of Hassan Shakur'
        />
      </div>
    </section>
  );
};

export default About;

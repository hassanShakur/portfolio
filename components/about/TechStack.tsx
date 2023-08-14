'use client';
import { techStack } from '@/helpers/utils';
import './tech.css';
import { Fade } from 'react-awesome-reveal';

const TechStack = () => {
  return (
    <>
      <Fade direction='up' fraction={1} triggerOnce>
        <p className='text'>
          Below are some of the technologies I have interacted with:
        </p>
      </Fade>
      {/* <Fade
        direction='up'
        duration={600}
        damping={0.2}
        cascade
        triggerOnce
      > */}
        <ul>
          {techStack.map((tech) => (
            <li key={tech.id}>
              <span className='clg'>⇨</span>
              <span>{tech.name}</span>
            </li>
          ))}
        </ul>
      {/* </Fade> */}
    </>
  );
};

export default TechStack;

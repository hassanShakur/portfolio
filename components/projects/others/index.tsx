'use client';
import { Slide, Fade } from 'react-awesome-reveal';

import otherProjects from '@/data/otherProjects';
import CardProject from './CardProject';
import './otherProjects.scss';

const OtherProjects = () => {
  return (
    <div className='other-projects'>
      <Slide direction='up' fraction={0.5} triggerOnce>
        <h3>other noteworthy projects</h3>
      </Slide>
      <div className='cards'>
        <Fade
          direction='up'
          cascade
          triggerOnce
          // duration={800}
          damping={0.2}
        >
          {otherProjects.map((card) => (
            <CardProject key={card.id} project={card} />
          ))}
        </Fade>
      </div>
    </div>
  );
};

export default OtherProjects;

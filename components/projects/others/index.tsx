'use client';
import otherProjects from '@/data/otherProjects';
import CardProject from './CardProject';
import './otherProjects.scss';
import { Slide, Fade, Zoom } from 'react-awesome-reveal';

const OtherProjects = () => {
  return (
    <div className='other-projects'>
      <Slide direction='up' fraction={1} triggerOnce>
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

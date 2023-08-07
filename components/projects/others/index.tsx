'use client'
import { otherProjects } from '@/helpers/utils';
import CardProject from './CardProject';
import './otherProjects.css';
import { Slide } from 'react-awesome-reveal';

const OtherProjects = () => {
  return (
    <div className='other-projects'>
      <Slide direction='up' fraction={1} triggerOnce>
        <h3>other noteworthy projects</h3>
      </Slide>
      <div className='cards'>
        {otherProjects.map((card) => (
          <CardProject key={card.id} project={card} />
        ))}
      </div>
    </div>
  );
};

export default OtherProjects;

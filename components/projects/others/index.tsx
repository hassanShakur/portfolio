import { otherProjects } from '@/helpers/utils';
import CardProject from './CardProject';
import './otherProjects.css';

const OtherProjects = () => {
  return (
    <div className='other-projects'>
      <h3>other noteworthy projects</h3>
      <div className='cards'>
        {otherProjects.map((card) => (
          <CardProject key={card.id} project={card} />
        ))}
      </div>
    </div>
  );
};

export default OtherProjects;

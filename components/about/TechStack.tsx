import { techStack } from '@/helpers/utils';
import './tech.css';

const TechStack = () => {
  return (
    <>
      <p className='text'>
        Below are some of the technologies I have interacted with:
      </p>
      <ul>
        {techStack.map((tech) => (
          <li key={tech.id}>
            <span className='color-gr'>⇨</span>
            <span>{tech.name}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TechStack;

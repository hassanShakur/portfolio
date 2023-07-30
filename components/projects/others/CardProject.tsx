import { CardProjectProps } from '@/types/appTypes';
import { TbBrandGithub, TbLink, TbFolder } from 'react-icons/tb';
import Link from 'next/link';
import './cardProject.css';

const CardProject = ({ project }: { project: CardProjectProps }) => {
  return (
    <div className='project-card'>
      <div className='card-header'>
        <span className='folder'>
          <TbFolder />
        </span>
        <span className='links'>
          <button type='button'>
            <Link href={project.github} target='_blank'>
              <TbBrandGithub />
            </Link>
          </button>
          <button type='button'>
            <Link href={project.live} target='_blank'>
              <TbLink />
            </Link>
          </button>
        </span>
      </div>

      <div className='card-info'>
        <h4>{project.name}</h4>
        <p className='card-summary text'>{project.summary}</p>
        <p className='card-tech text'>
          {project.techs.map((tech) => `${tech.name} `)}
        </p>
      </div>
    </div>
  );
};

export default CardProject;

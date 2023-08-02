import { ProjectProps } from '@/types/appTypes';
import Image from 'next/image';
import Link from 'next/link';
import { TbBrandGithub, TbLink } from 'react-icons/tb';
import './project.css';

const Project = ({ project }: { project: ProjectProps }) => {
  return (
    <div className='project'>
      <div className='project-img'>
        <Image
          src={project.image}
          alt={project.name}
          placeholder='blur'
          // fill
          // style={{
          //   objectFit: 'cover',
          // }}
        />
      </div>

      <div className='project-info'>
        <span id='badge'>{project.badge}</span>
        <h3>{project.name}</h3>
        <p className='project-description text'>{project.summary}</p>
        <p className='project-tech text'>
          {project.techs.map((tech) => `${tech.name} `)}
        </p>

        <div className='project-actions'>
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
        </div>
      </div>
    </div>
  );
};

export default Project;

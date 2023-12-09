'use client';
import Image from 'next/image';
import Link from 'next/link';
import { TbBrandGithub, TbLink } from 'react-icons/tb';
import './project.scss';
import { Slide } from 'react-awesome-reveal';
import ProjectType from '@/types/projectType';

const Project = ({ project }: { project: ProjectType }) => {
  return (
    <div className='project'>
      <Link href={project.live} className='project-img'>
        {/* <Slide direction='up' fraction={0.2} triggerOnce> */}
          <Image
            src={project.image}
            alt={project.name}
            placeholder='blur'
            style={{
              borderRadius: '8px',
              objectFit: 'cover',
              width: '100%',
              height: '100%',
            }}
          />
        {/* </Slide> */}
      </Link>

      <div className='project-info'>
        <Slide direction='up' fraction={0.2} triggerOnce>
          <span id='badge' className='text-mono'>
            {project.badge}
          </span>
          <Link href={project.live}>
            <h3>{project.name}</h3>
          </Link>
          <p className='project-description text'>
            {project.summary}
          </p>
          <p className='project-tech text'>
            {project.techs.map((tech) => (
              <span key={tech.id} className='text-mono'>
                {tech.name}{' '}
              </span>
            ))}
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
        </Slide>
      </div>
    </div>
  );
};

export default Project;

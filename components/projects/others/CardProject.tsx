'use client'
import { TbBrandGithub, TbLink, TbFolder } from 'react-icons/tb';
import Link from 'next/link';
import './cardProject.scss';
import { Slide } from 'react-awesome-reveal';
import ProjectCardProps from '@/types/projectCardProps';

const CardProject = ({ project }: { project: ProjectCardProps }) => {
  return (
    // <Slide direction='up' cascade fraction={0.2} triggerOnce>
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
            {project.techs.map((tech) => (
              <span key={tech.id} className='text-mono'>
                {tech.name}{' '}
              </span>
            ))}
          </p>
        </div>
      </div>
    // </Slide>
  );
};

export default CardProject;

'use client';
import { TbBrandGithub, TbLink, TbFolder } from 'react-icons/tb';
import { Zoom } from 'react-awesome-reveal';
import Link from 'next/link';

import ProjectCardType from '@/types/projectCardType';
import './cardProject.scss';

const CardProject = ({ project }: { project: ProjectCardType }) => {
  return (
    <Zoom triggerOnce>
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
            {project.live && (
              <button type='button'>
                <Link href={project.live} target='_blank'>
                  <TbLink />
                </Link>
              </button>
            )}
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
    </Zoom>
  );
};

export default CardProject;

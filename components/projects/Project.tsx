'use client';
import { ProjectProps } from '@/types/appTypes';
import Image from 'next/image';
import Link from 'next/link';
import { TbBrandGithub, TbLink } from 'react-icons/tb';
import './project.css';
import { Fade, Slide } from 'react-awesome-reveal';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const Project = ({ project }: { project: ProjectProps }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [show, setShow] = useState({
    transform: 'translateY(40px)',
    opacity: 0,
  });

  useEffect(() => {
    if (!inView) return;
    setShow({
      transform: 'translateY(0)',
      opacity: 1,
    });
  }, [inView]);

  return (
    <div className='project'>
      <Link href={project.live} className='project-img'>
        {/* <Fade direction='up' cascade fraction={0.1} triggerOnce>
          <div> */}
        <Image
          src={project.image}
          alt={project.name}
          placeholder='blur'
          ref={ref}
          style={{
            borderRadius: '8px',
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            ...show
          }}
        />
        {/* </div>
        </Fade> */}
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

'use client';
import { Fade } from 'react-awesome-reveal';
import Link from 'next/link';

import Button from '../button';
import './hero.scss';

const myName = 'Hassan Shakur.';

const Hero = () => {
  return (
    <section id='hero'>
      <div className='hero-text'>
        <Fade
          direction='up'
          cascade
          duration={500}
          damping={0.2}
          delay={6000}
          triggerOnce
        >
          <h3 className='intro clg text-mono'>Hi, my name is</h3>
          <h1 className='name'>{myName}</h1>

          <div className='title'>A software engineer.</div>

          <p className='description text'>
            I&apos;m a software engineer specializing in full-stack
            web development for a fantastic &amp; smooth online
            experience. Currently, I&apos;m a Web Developer and Mentor
            at{' '}
            <Link
              href={'https://www.microverse.org'}
              className='clg'
              target='_blank'
            >
              Microverse
            </Link>
            .
          </p>
        </Fade>
      </div>
      <Fade direction='up' delay={6200} triggerOnce>
        <a
          className='hero-actions'
          href='mailto:dev.hassanshakur@gmail.com'
        >
          <Button text='say hello!' />
        </a>
      </Fade>
    </section>
  );
};

export default Hero;

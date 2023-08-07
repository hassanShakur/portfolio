'use client';
import Link from 'next/link';
import Button from '../button';
import './hero.css';
import useShuffle from '@/helpers/useShuffle';
import { Fade } from 'react-awesome-reveal';

const myName = 'Hassan Shakur.';

const Hero = () => {
  // const { ref, text: name } = useShuffle({
  //   shuffleText: myName,
  //   delay: 10000,
  // });

  return (
    <section id='hero'>
      <div className='hero-text'>
        <Fade
          direction='up'
          cascade
          duration={500}
          damping={0.2}
          delay={1500}
          triggerOnce
        >
          <h3 className='intro clg text-mono'>Hi, my name is</h3>
          <h1 className='name'>Hassan Shakur.</h1>

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
      <Fade direction='up' delay={1800} triggerOnce>
        <div className='hero-actions'>
          <Button text='say hello ✅!' />
        </div>
      </Fade>
    </section>
  );
};

export default Hero;

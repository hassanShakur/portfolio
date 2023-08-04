import Link from 'next/link';
import Button from '../button';
import './hero.css';

const Hero = () => {
  return (
    <section id='hero'>
      <div className='hero-text'>
        <h3 className='intro clg text-mono'>Hi, my name is</h3>
        <h1 className='name'>Hassan Shakur.</h1>

        <div className='title'>A software engineer.</div>

        <p className='description text'>
          I&apos;m a software engineer specializing in full-stack web
          development for a fantastic &amp; smooth online experience.
          Currently, I&apos;m a Web Developer and Mentor at{' '}
          <Link
            href={'https://www.microverse.org'}
            className='clg'
            target='_blank'
          >
            Microverse
          </Link>
          .
        </p>
      </div>

      <div className='hero-actions'>
        <Button text='say hello ✅!' />
      </div>
    </section>
  );
};

export default Hero;

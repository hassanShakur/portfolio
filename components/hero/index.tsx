import Link from 'next/link';
import './hero.css';
import Button from '../button';

const Hero = () => {
  return (
    <section id='hero'>
      <div className='hero-text'>
        <div className='drop'>
          <span id='drop-cap' className='clg'>
            h
          </span>
          <div className='drop-content'>
            <h3 className='intro clg'>
              <span id='invisible'>H</span>i, my name is
            </h3>
            <h1 className='name'>
              <span id='invisible'>H</span>assan Shakur.
            </h1>
          </div>
        </div>

        <div className='title'>A software engineer.</div>

        <p className='description text'>
          I&apos;m a software engineer specializing in full-stack web
          development for fantastic &amp; smooth online experience.
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
        <Button text='reach out to me!' />
      </div>
    </section>
  );
};

export default Hero;

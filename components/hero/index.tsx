import Link from 'next/link';
import './hero.css';
import Button from '../button';

const Hero = () => {
  return (
    <section id='hero'>
      <div className='hero-text'>
        <div className='drop'>
          <span id='drop-cap' className='color-gr'>
            h
          </span>
          <div className='intro color-gr'>i, my name is</div>
          <h1 className='name'>
            <span id='invisible'>h</span>assan Shakur.
          </h1>
        </div>

        <div className='title'>A software engineer.</div>

        <p className='description text'>
          I&apos;m a software engineer specializing in full-stack web
          development for fantastic &amp; smooth online experience.
          Currently, I&apos;m a Web Developer and Mentor at{' '}
          <Link
            href={'https://www.microverse.org'}
            className='color-gr'
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

'use client';
import { Fade } from 'react-awesome-reveal';

const AboutText = () => {
  return (
    <>
      <Fade direction='up' fraction={0.2} triggerOnce>
        {/* Use an icon from Angela Yu  */}
        <p className='text'>
          Nǐ Háo! I&apos;m Hassan -
          at least that&apos;s what I was told. A couple of years ago
          in early 2016, I wrote my first Hello World program in a
          High School Computer class.
        </p>
        <p className='text'>
          3 years later, I was drowning in a passion for programming
          as I joined the <span className='clg'>University</span>{' '}
          pursuing a degree in{' '}
          <span className='clg'>Computer Science</span>.
        </p>

        <p className='text'>
          Fast-foward to today, and I&apos;ve had the pleasure of
          constributing to several tech organizations as a{' '}
          <span className='clg'>freelancer</span>,{' '}
          <span className='clg'>frontend and backend developer</span>,
          and a <span className='clg'>mentor</span>.
        </p>
      </Fade>
    </>
  );
};

export default AboutText;

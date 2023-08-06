'use client';
import { Fade } from 'react-awesome-reveal';
import Link from 'next/link';

const SocialEmail = () => {
  return (
    <div id='email'>
      <Fade
        direction='down'
        cascade
        duration={600}
        damping={0.5}
        delay={2600}
        triggerOnce
      >
        <Link
          href={'mailto:dev.hassanshakur@gmail.com'}
          className='text-mono'
        >
          dev.hassanshakur@gmail.com
        </Link>
        <div id='email-line'></div>
      </Fade>
    </div>
  );
};

export default SocialEmail;

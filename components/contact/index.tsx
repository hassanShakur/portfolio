'use client';
import { Fade } from 'react-awesome-reveal';
import Link from 'next/link';

import ContactText from './ContactText';
import Button from '../button';
import './contact.scss';

const Contact = () => {
  return (
    <section id='contact'>
      <Fade direction='up' cascade triggerOnce duration={800}>
        <div className='contact-title'>
          <Fade direction='up' cascade triggerOnce duration={800}>
            <h6 className='clg text-mono'>where to now?</h6>
            <h3>get in touch</h3>
          </Fade>
        </div>

        <ContactText />

        <div className='contact-actions'>
          <Link href={'mailto:dev.hassanshakur@gmail.com'}>
            <Button text='say hello' />
          </Link>
        </div>
      </Fade>
    </section>
  );
};

export default Contact;

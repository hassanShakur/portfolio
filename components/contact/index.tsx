'use client';
import Link from 'next/link';
import Button from '../button';
import './contact.css';
import ContactText from './ContactText';
import { Fade } from 'react-awesome-reveal';

const Contact = () => {
  return (
    <section id='contact'>
      <div className='contact-title'>
        <Fade direction='up' cascade fraction={0.5} triggerOnce>
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
    </section>
  );
};

export default Contact;

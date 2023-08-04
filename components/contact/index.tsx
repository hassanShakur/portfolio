import Link from 'next/link';
import Button from '../button';
import './contact.css';

const Contact = () => {
  return (
    <section id='contact'>
      <div className='contact-title'>
        <h6 className='clg text-mono'>where to now?</h6>
        <h3>get in touch</h3>
      </div>

      <p className='contact-text text'>
        I&apos;m open to any new opportunities. Leave me a message in
        my inbox and I will get back to you. Whether it&apos;s a
        position, project, collaborations or just wanna say{' '}
        <span className='clg'>Hi</span>, I&apos;ll be happy to hear
        from <span className='clg'>you</span>!
      </p>

      <div className='contact-actions'>
        <Link href={'mailto:dev.hassanshakur@gmail.com'}>
          <Button text='say hello' />
        </Link>
      </div>
    </section>
  );
};

export default Contact;

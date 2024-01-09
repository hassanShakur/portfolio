'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const SocialEmail = () => {
  const [show, setShow] = useState({
    transform: 'translateX(20px) rotate(90deg)',
    opacity: '0',
  });

  useEffect(() => {
    setTimeout(() => {
      setShow({
        transform: 'translateX(0) rotate(90deg)',
        opacity: 'inherit',
      });
    }, 2600);
  }, []);

  return (
    <div id='email' style={show}>
      <Link
        href={'mailto:dev.hassanshakur@gmail.com'}
        className='text-mono'
      >
        dev.hassanshakur@gmail.com
      </Link>
      <div id='email-line'></div>
    </div>
  );
};

export default SocialEmail;

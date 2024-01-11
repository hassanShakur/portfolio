'use client';
import { TbBrandGithub } from 'react-icons/tb';
import {
  FaLinkedinIn,
  FaTwitter,
  FaAngellist,
  FaMediumM,
} from 'react-icons/fa';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export const footerIcons = [
  {
    id: 1,
    name: 'GitHub',
    icon: <TbBrandGithub />,
    href: 'https://github.com/hassanShakur',
  },
  {
    id: 2,
    name: 'LinkedIn',
    icon: <FaLinkedinIn />,
    href: 'https://www.linkedin.com/in/hassanShakur',
  },
  {
    id: 3,
    name: 'Twitter',
    icon: <FaTwitter />,
    href: 'https://twitter.com/HassShakur',
  },
  {
    id: 4,
    name: 'WellFound',
    icon: <FaAngellist />,
    href: 'https://wellfound.com/u/hassanshakur',
  },
  {
    id: 5,
    name: 'Medium',
    icon: <FaMediumM />,
    href: 'https://medium.com/@hassanShakur',
  },
];

const SocialIcons = () => {
  const [show, setShow] = useState({
    transform: 'translateX(-20px)',
    opacity: '0',
  });

  useEffect(() => {
    setTimeout(() => {
      setShow({
        transform: 'translateX(0)',
        opacity: 'inherit',
      });
    }, 6500);
  }, []);

  return (
    <div className='social-icons' style={show}>
      {footerIcons.map((platform) => (
        <Link
          id='some'
          key={platform.id}
          href={platform.href}
          target='_blank'
        >
          {platform.icon}
        </Link>
      ))}
      <div id='social-line'></div>
    </div>
  );
};

export default SocialIcons;

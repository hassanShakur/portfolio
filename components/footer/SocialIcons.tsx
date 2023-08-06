'use client';
import { TbBrandGithub } from 'react-icons/tb';
import {
  FaLinkedinIn,
  FaTwitter,
  FaAngellist,
  FaMediumM,
} from 'react-icons/fa';
import { Fade } from 'react-awesome-reveal';
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
  return (
    <div className='social-icons'>
      <Fade
        direction='left'
        cascade
        duration={300}
        damping={0.5}
        delay={2000}
        triggerOnce
      >
        {footerIcons.map((platform) => (
          <Link
            key={platform.id}
            href={platform.href}
            target='_blank'
          >
            {platform.icon}
          </Link>
        ))}
        <div id='social-line'></div>
      </Fade>
    </div>
  );
};

export default SocialIcons;

import { TbBrandGithub } from 'react-icons/tb';
import {
  FaLinkedinIn,
  FaTwitter,
  FaAngellist,
  FaMediumM,
} from 'react-icons/fa';
import './footer.css';
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

const Footer = () => {
  return (
    <footer>
      <div className='social-icons'>
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
      </div>
      <div id='email'>
        <Link href={'mailto:dev.hassanshakur@gmail.com'}>
          dev.hassanshakur@gmail.com
        </Link>
        <div id='email-line'></div>
      </div>
      <p className='attribution text'>
        Designed &amp; Built by{' '}
        <Link
          href={'https://github.com/hassanShakur'}
          target='_blank'
          className='clg'
        >
          Hassan Shakur
        </Link>
        .
        <br />
        Original Design by{' '}
        <Link
          href={'https://github.com/bchiang7'}
          target='_blank'
          className='clg'
        >
          Brittany Chiang
        </Link>
        .
      </p>
    </footer>
  );
};

export default Footer;

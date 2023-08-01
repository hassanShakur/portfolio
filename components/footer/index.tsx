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
          <Link key={platform.id} href={platform.href}>
            {platform.icon}
          </Link>
        ))}
      </div>
      <p className='attribution text'>
        Designed &amp; Built by{' '}
        <Link
          href={'https://github.com/hassanShakur'}
          className='clg'
        >
          Hassan Shakur
        </Link>
        .
        <br />
        Original Design by{' '}
        <Link href={'https://github.com/bchiang7'} className='clg'>
          Britanny Chiang
        </Link>
        .
      </p>
    </footer>
  );
};

export default Footer;

import './footer.scss';
import Link from 'next/link';

import SocialIcons from './SocialIcons';
import SocialEmail from './SocialEmail';

const Footer = () => {
  return (
    <footer>
      <SocialIcons />
      <SocialEmail />
      <p className='attribution text text-mono'>
        <Link
          href={'https://github.com/hassanShakur'}
          target='_blank'
          className='text-mono'
        >
          Designed &amp; Built by Hassan Shakur
        </Link>
        .
        <br />
        <Link
          href={'https://brittanychiang.com/'}
          target='_blank'
          className='text-mono'
        >
          Original Design by Brittany Chiang
        </Link>
        .
      </p>
    </footer>
  );
};

export default Footer;

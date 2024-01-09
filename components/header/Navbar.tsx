import { Fade } from 'react-awesome-reveal';
import { useDispatch } from 'react-redux';
import Link from 'next/link';

import { menuActions } from '@/redux/app/menuSlice';
import navLinks from '@/data/navLinks';
import Resume from './Resume';
import './navLinks.scss';

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Fade
        direction='down'
        cascade
        duration={600}
        damping={0.3}
        delay={300}
        triggerOnce
      >
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                href={link.href}
                onClick={() => dispatch(menuActions.toggleMenu())}
              >
                {/* <span className='number'>yi</span> */}
                <span className='number'>{link.id}</span>
                <span className='link'>{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Fade>
      <Fade
        direction='down'
        cascade
        duration={700}
        delay={800}
        triggerOnce
      >
        <Resume />
      </Fade>
    </>
  );
};

export default Navbar;

import Link from 'next/link';
import navLinks from '@/data/navLinks';
import './navLinks.scss';
import Button from '../button';
import { useDispatch } from 'react-redux';
import { menuActions } from '@/redux/app/menuSlice';
import { Fade } from 'react-awesome-reveal';
import Resume from './Resume';

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

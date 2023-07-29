import { navLinks } from '@/helpers/utils';
import Link from 'next/link';
import './navLinks.css';
import Button from '../button';

const Navbar = () => {
  return (
    <>
      <ul>
        {navLinks.map((link) => (
          <li key={link.id}>
            <Link href={link.href}>
              {/* <span className='number'>yi</span> */}
              <span className='number'>{link.id}</span>
              <span className='link'>{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      <Button text='resume' />
    </>
  );
};

export default Navbar;

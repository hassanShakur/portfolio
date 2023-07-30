import { navLinks } from '@/helpers/utils';
import Link from 'next/link';
import './navLinks.css';
import Button from '../button';
import { useDispatch } from 'react-redux';
import { menuActions } from '@/redux/app/menuSlice';

const Navbar = () => {
  const dispatch = useDispatch()

  return (
    <>
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
      <Button text='resume' />
    </>
  );
};

export default Navbar;

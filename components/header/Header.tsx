'use client';

import { useSelector } from 'react-redux';
import Sticks from './Sticks';
import './header.css';
import { Store } from '@/types/appTypes';
import Navbar from './Navbar';

const Header = () => {
  const { isOpen } = useSelector((store: Store) => store.menu);

  return (
    <>
      <header>
        <div className='nav-pane'>
          <div className='logo'>H</div>
          <Sticks />
        </div>
        <nav className={isOpen ? 'menu-open' : ''}>
          <Navbar />
        </nav>
      </header>
      {isOpen && <div className='backdrop'></div>}
    </>
  );
};

export default Header;

'use client';

import { useDispatch, useSelector } from 'react-redux';
import Sticks from './Sticks';
import './header.css';
import { ReduxStoreType } from '@/types/appTypes';
import Navbar from './Navbar';
import { menuActions } from '@/redux/app/menuSlice';
import { Fade } from 'react-awesome-reveal';

const Header = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector(
    (store: ReduxStoreType) => store.menu
  );

  return (
    <>
      <header>
        <Fade direction='down' cascade duration={500} triggerOnce>
          <div className='nav-pane'>
            <div className='logo'>H</div>
            <Sticks />
          </div>
        </Fade>
        <nav className={isOpen ? 'menu-open' : ''}>
          <Navbar />
        </nav>
      </header>

      {isOpen && (
        <div
          className='backdrop'
          onClick={() => dispatch(menuActions.toggleMenu())}
        ></div>
      )}
    </>
  );
};

export default Header;

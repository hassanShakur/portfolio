'use client';

import { useDispatch, useSelector } from 'react-redux';
import Sticks from './Sticks';
import './header.scss';
import ReduxStoreType from '@/types/reduxStore';
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
        <div className='nav-pane'>
          <Fade direction='down' cascade duration={500} triggerOnce>
            {/* logo h with flickering lights */}
            <div className='logo'>H</div>
            <Sticks />
          </Fade>
        </div>
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

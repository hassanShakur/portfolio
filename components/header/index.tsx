'use client';
import { useDispatch, useSelector } from 'react-redux';
import { Fade } from 'react-awesome-reveal';

import { menuActions } from '@/redux/app/menuSlice';
import ReduxStoreType from '@/types/reduxStore';
import Sticks from './Sticks';
import Navbar from './Navbar';
import './header.scss';

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

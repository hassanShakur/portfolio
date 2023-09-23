'use client';
import { useDispatch, useSelector } from 'react-redux';
import { menuActions } from '@/redux/app/menuSlice';
import './sticks.css';
import ReduxStoreType from '@/types/reduxStore';

const Sticks = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector(
    (store: ReduxStoreType) => store.menu
  );

  return (
    <div
      className={`sticks ${isOpen ? 'menu-open' : ''}`}
      onClick={() => dispatch(menuActions.toggleMenu())}
    >
      <div className='stick-1'></div>
      <div className='stick-2'></div>
      <div className='stick-3'></div>
    </div>
  );
};

export default Sticks;

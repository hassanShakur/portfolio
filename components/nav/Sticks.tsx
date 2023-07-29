'use client';
import { useState } from 'react';
import './sticks.css';
import { useDispatch, useSelector } from 'react-redux';
import { Store } from '@/types/appTypes';
import { menuActions } from '@/redux/app/menuSlice';

const Sticks = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((store: Store) => store.menu);

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

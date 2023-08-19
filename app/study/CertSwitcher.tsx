'use client'
import { TbArrowLeft, TbArrowRight } from 'react-icons/tb';
import './switcher.css';
import { useDispatch } from 'react-redux';
import { certActions } from '@/redux/app/certsSlice';

const CertSwitcher = () => {
  const dispatch = useDispatch();

  return (
    <div className='switcher'>
      <TbArrowLeft
        className='arrow'
        onClick={() => dispatch(certActions.prevIndex())}
      />
      <span className='mid-arrow'></span>
      <TbArrowRight
        className='arrow'
        onClick={() => dispatch(certActions.nextIndex())}
      />
    </div>
  );
};

export default CertSwitcher;

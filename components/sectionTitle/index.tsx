'use client';
import { Slide } from 'react-awesome-reveal';

import { SectionTitleProps } from '@/types/appTypes';
import './title.scss';

const SectionTitle = ({ number, title }: SectionTitleProps) => {
  return (
    <Slide direction='up' fraction={1} triggerOnce>
      <h2>
        <span className='number'>{number}.</span>
        <span className='section-title'>{title}</span>
        <div className='line'></div>
      </h2>
    </Slide>
  );
};

export default SectionTitle;

'use client';
import { Fade } from 'react-awesome-reveal';
import { useState } from 'react';

import positions from '@/data/positions';
import Positions from './Positions';

const CompanyTabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <Fade direction='up' cascade triggerOnce>
      <div className='companies-container'>
        <ul className='companies'>
          {positions.map((position) => (
            <li
              key={position.id}
              className={
                activeTab === position.id
                  ? 'text-mono active'
                  : 'text-mono'
              }
              onClick={() => setActiveTab(position.id)}
            >
              {position.company}
            </li>
          ))}
        </ul>
        <Positions activeTab={activeTab} />
      </div>
    </Fade>
  );
};

export default CompanyTabs;

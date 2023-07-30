'use client';
import { useState } from 'react';
import Positions from './Positions';
import { positions } from '@/helpers/utils';

const CompanyTabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className='companies-container'>
      <ul className='companies'>
        {positions.map((position) => (
          <li
            key={position.id}
            className={activeTab === position.id ? 'active' : ''}
            onClick={() => setActiveTab(position.id)}
          >
            {position.company}
          </li>
        ))}
      </ul>
      <Positions activeTab={activeTab} />
    </div>
  );
};

export default CompanyTabs;

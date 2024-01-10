'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

import myLogoImg from '@/images/logo.png';
import './logo.scss';

const AnimatedLogo = () => {
  const [pageIsLoaded, setPageIsLoaded] = useState(false);

  useEffect(() => {
    setPageIsLoaded(true);
  }, []);

  return pageIsLoaded ? (
    <div id='animated-logo'>
      <div className='logo-border'>
        <Image src={myLogoImg} alt='Hassan Shakur Logo' />
      </div>
    </div>
  ) : null;
};

export default AnimatedLogo;

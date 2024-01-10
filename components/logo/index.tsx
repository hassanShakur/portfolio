import Image from 'next/image';

import myLogoImg from '@/images/logo.png';
import './logo.scss';

const AnimatedLogo = () => {
  return (
    <div id='animated-logo'>
      <div className='logo-border'>
        <Image
          src={myLogoImg}
          alt='Hassan Shakur Logo'
          // width={200}
          // height={200}
        />
      </div>
    </div>
  );
};

export default AnimatedLogo;

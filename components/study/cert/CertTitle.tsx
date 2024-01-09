import { TbMapPin } from 'react-icons/tb';

import CertTitleType from '@/types/certTitleType';
import './certTitle.scss';

const CertTitleType = ({ company }: CertTitleType) => {
  return (
    <div id='cert-title'>
      <div className='title-decorator'>
        <TbMapPin className='icon' />
        <div className='upper-line'></div>
      </div>
      <h4>{`${company} Journey`}</h4>
    </div>
  );
};

export default CertTitleType;

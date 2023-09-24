import CertTitle from '@/types/certTitle';
import './certTitle.scss';
import { TbMapPin } from 'react-icons/tb';

const CertTitle = ({ company }: CertTitle) => {
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

export default CertTitle;

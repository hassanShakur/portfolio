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
      <h2>{`${company} Journey`}</h2>
    </div>
  );
};

export default CertTitle;

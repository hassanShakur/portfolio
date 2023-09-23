import CertTitle from '@/types/certTitle';
import './certTitle.css';

const CertTitle = ({ index, company }: CertTitle) => {
  return (
    <h2 id='cert-title'>
      <span id='number'>{`${index + 1}. `}</span>
      {`${company} Journey`}
    </h2>
  );
};

export default CertTitle;

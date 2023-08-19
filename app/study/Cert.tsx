import { CertProps } from '@/types/appTypes';
import projectImg from '@/images/hack-3.jpg';
import Image from 'next/image';

const Cert = ({ cert }: { cert: CertProps }) => {
  return (
    <div className='cert'>
      <div className='main-cert'>
        <Image
          src={cert.mainCert}
          alt={`${cert.origin} main cert`}
          placeholder='blur'
          style={{
            borderRadius: '8px',
            width: '100%',
            height: 'auto',
          }}
        />
      </div>
      <div className='cert-text'>
        <p className='text'>{cert.summary}</p>
        <div className='cert-gallery'>
          {cert.minis.map((miniC) => (
            <div className='g-img' key={miniC.id}>
              <Image
                src={miniC.certificate}
                alt={miniC.course}
                placeholder='blur'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cert;

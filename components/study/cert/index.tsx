'use client';
import { useDispatch } from 'react-redux';
import Image from 'next/image';

import { galleryActions } from '@/redux/app/gallerySlice';
import CertType from '@/types/certType';
import CertTitleType from './CertTitle';

const Cert = ({ cert }: { cert: CertType }) => {
  const dispatch = useDispatch();

  return (
    <div className='cert'>
      <CertTitleType company={cert.name} />
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
      </div>
      <div
        className='mini-certs'
        onClick={() => dispatch(galleryActions.setImages(cert.minis))}
      >
        {cert.minis.slice(0, 5).map((miniCerts) => (
          <div className='g-img' key={miniCerts.id}>
            <Image
              src={miniCerts.certificate}
              alt={miniCerts.course}
              placeholder='blur'
            />
          </div>
        ))}
      </div>
      <div id='integral'></div>
    </div>
  );
};

export default Cert;

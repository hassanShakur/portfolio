'use client';
import { certActions } from '@/redux/app/certsSlice';
import { galleryActions } from '@/redux/app/gallerySlice';
import { CertProps, ReduxStoreType } from '@/types/appTypes';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';

const Cert = ({ cert }: { cert: CertProps }) => {
  const dispatch = useDispatch();
  const { activeCert } = useSelector(
    (state: ReduxStoreType) => state.cert
  );

  return (
    <div
      className={`cert ${
        cert.id === activeCert ? 'active' : 'inactive'
      }`}
      onClick={() => dispatch(certActions.setActive(cert.id))}
    >
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
        <div
          className='cert-gallery'
          onClick={() =>
            dispatch(galleryActions.setImages(cert.minis))
          }
        >
          {cert.minis.map((miniCerts) => (
            <div className='g-img' key={miniCerts.id}>
              <Image
                src={miniCerts.certificate}
                alt={miniCerts.course}
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

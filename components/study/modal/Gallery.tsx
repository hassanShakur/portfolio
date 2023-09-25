'use client';
import Image from 'next/image';
import './gallery.scss';
import { useDispatch, useSelector } from 'react-redux';
import ReduxStoreType from '@/types/reduxStore';
import { galleryActions } from '@/redux/app/gallerySlice';
import { TbArrowBigRight, TbArrowBigLeft } from 'react-icons/tb';

const Gallery = () => {
  const dispatch = useDispatch();
  const { currentCertIndex, isOpen, modalCerts } = useSelector(
    (state: ReduxStoreType) => state.gallery
  );
console.log(currentCertIndex)
  return (
    <>
      {isOpen && (
        <div
          className='modal'
          onClick={(e: any) => {
            e.stopPropagation();
            if (e.target.classList.contains('g-modal'))
              dispatch(galleryActions.toggleModal());
          }}
        >
          <div className='modal-content'>
            <div className='carrosel'>
              <div className='scrollable'>
                {modalCerts.map((cert) => (
                  <div
                    className='cert-info'
                    key={cert.id}
                    id={
                      currentCertIndex === cert.id
                        ? 'active'
                        : 'inactive'
                    }
                    // id='active'
                  >
                    <div className='mini-cert'>
                      <Image
                        src={cert.certificate}
                        alt={cert.course}
                      />
                    </div>

                    <div className='mini-description text'>
                      {cert.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className='carrosel-arrows'>
              <TbArrowBigLeft
                onClick={() => dispatch(galleryActions.prevCert())}
              />
              <TbArrowBigRight
                onClick={() => dispatch(galleryActions.nextCert())}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;

'use client';
import Image from 'next/image';
import './gallery.scss';
import { useDispatch, useSelector } from 'react-redux';
import ReduxStoreType from '@/types/reduxStore';
import { galleryActions } from '@/redux/app/gallerySlice';
import { TbArrowBigRight, TbArrowBigLeft } from 'react-icons/tb';

const Gallery = () => {
  const dispatch = useDispatch();
  const {
    currentCertIndex: index,
    isOpen,
    modalCerts,
  } = useSelector((state: ReduxStoreType) => state.gallery);

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
            <div className='cert-info'>
              <div className='mini-cert'>
                <Image
                  src={modalCerts[0].certificate}
                  alt={modalCerts[0].course}
                />
              </div>

              <div className='mini-description'>
                {modalCerts[0].description}
              </div>
            </div>
            <div className='carrosel-arrows'>
              <TbArrowBigLeft />
              <TbArrowBigRight />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;

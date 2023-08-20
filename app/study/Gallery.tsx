'use client';
import projectImg from '@/images/hack-3.jpg';
import Image from 'next/image';
import './gallery.css';
import { useDispatch, useSelector } from 'react-redux';
import { ReduxStoreType } from '@/types/appTypes';
import { galleryActions } from '@/redux/app/gallerySlice';
import { MouseEventHandler } from 'react';

const Gallery = () => {
  const dispatch = useDispatch();
  const { activeImg, isOpen, currentImages } = useSelector(
    (state: ReduxStoreType) => state.gallery
  );

  const selectedImg = currentImages[activeImg];

  return (
    <>
      {isOpen && (
        <div
          id='gallery-modal'
          className='g-modal'
          onClick={(e: any) => {
            e.stopPropagation();
            if (e.target.classList.contains('g-modal'))
              dispatch(galleryActions.toggleModal());
          }}
        >
          <div className='images'>
            <div id='selected'>
              <Image
                src={selectedImg.certificate}
                alt={selectedImg.course}
              />
            </div>

            <div className='thumbs'>
              {currentImages.map((cImg) => (
                <div
                  key={cImg.id}
                  className={cImg.id === activeImg ? 'selected' : ''}
                  onClick={() =>
                    dispatch(galleryActions.setActiveImage(cImg.id))
                  }
                >
                  <Image src={cImg.certificate} alt={cImg.course} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;

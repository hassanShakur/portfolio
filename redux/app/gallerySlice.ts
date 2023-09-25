import { createSlice } from '@reduxjs/toolkit';
import projectImg from '@/images/hack-3.jpg';

const initialState = {
  isOpen: true,
  currentCertIndex: 0,
  modalCerts: [
    {
      id: 0,
      course: 'string',
      certificate: projectImg,
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus sit architecto ipsum et officia error! Mollitia fugit similique nesciunt, consequatur dolorum quas ipsam rerum, cumque eos, repellat ex consectetur corrupti!',
    },
    {
      id: 1,
      course: 'string',
      certificate: projectImg,
      description:
        'Ipsum dolor sit, amet consectetur adipisicing elit. Doloribus sit architecto ipsum et officia error! Mollitia fugit similique nesciunt, consequatur dolorum quas ipsam rerum, cumque eos, repellat ex consectetur corrupti!',
    },
  ],
};

const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.isOpen = !state.isOpen;
    },
    setImages: (state, action) => {
      state.modalCerts = action.payload;
      state.isOpen = true;
    },
    nextCert: (state) => {
      state.currentCertIndex >= state.modalCerts.length - 1
        ? (state.currentCertIndex = 0)
        : (state.currentCertIndex += 1);
    },
    prevCert: (state) => {
      state.currentCertIndex <= 0
        ? (state.currentCertIndex = state.modalCerts.length - 1)
        : (state.currentCertIndex -= 1);
    },
  },
});

export const galleryActions = gallerySlice.actions;

export default gallerySlice;

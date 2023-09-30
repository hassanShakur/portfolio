import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  currentCertIndex: 0,
  modalCerts: [],
};

const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.isOpen = !state.isOpen;
      state.currentCertIndex = 0;
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

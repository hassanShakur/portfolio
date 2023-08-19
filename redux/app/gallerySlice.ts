import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  activeImg: 0
};

const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const menuActions = gallerySlice.actions;

export default gallerySlice;

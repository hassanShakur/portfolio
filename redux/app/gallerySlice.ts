import { createSlice } from '@reduxjs/toolkit';
import projectImg from '@/images/hack-3.jpg';

const initialState = {
  isOpen: false,
  currentImages: [
    {
      id: 1,
      course: 'string',
      certificate: projectImg,
    },
  ],
  activeImg: 1,
};

const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.isOpen = !state.isOpen;
    },
    setImages: (state, action) => {
      state.currentImages = action.payload;
      state.isOpen = true;
    },
    setActiveImage: (state, action) => {
      state.activeImg = action.payload;
    },
  },
});

export const galleryActions = gallerySlice.actions;

export default gallerySlice;

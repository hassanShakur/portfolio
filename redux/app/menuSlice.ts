import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const menuActions = menuSlice.actions;

export default menuSlice;

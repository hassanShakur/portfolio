import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeCert: 0,
};

const certSlice = createSlice({
  name: 'cert',
  initialState,
  reducers: {
    setActive: (state, action) => {
      state.activeCert = action.payload
    },
  },
});

export const certActions = certSlice.actions;

export default certSlice;

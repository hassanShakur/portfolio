import { createSlice } from '@reduxjs/toolkit';
import { certifications } from '@/helpers/utils';

const initialState = {
  activeCert: 0,
  maxIndex: certifications.length - 1,
};

const certSlice = createSlice({
  name: 'cert',
  initialState,
  reducers: {
    setActive: (state, action) => {
      state.activeCert = action.payload;
    },
    nextIndex: (state) => {
      state.activeCert =
        state.activeCert === state.maxIndex
          ? 0
          : state.activeCert + 1;
    },
    prevIndex: (state) => {
      state.activeCert =
        state.activeCert === 0
          ? state.maxIndex
          : state.activeCert - 1;
    },
  },
});

export const certActions = certSlice.actions;

export default certSlice;

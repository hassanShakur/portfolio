import { configureStore } from '@reduxjs/toolkit';

import menuSlice from './app/menuSlice';
import certSlice from './app/certsSlice';
import gallerySlice from './app/gallerySlice';

const rootReducer = {
  menu: menuSlice.reducer,
  cert: certSlice.reducer,
  gallery: gallerySlice.reducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;

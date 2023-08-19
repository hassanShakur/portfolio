import { configureStore } from '@reduxjs/toolkit';

import menuSlice from './app/menuSlice';
import gallerySlice from './app/gallerySlice';

const rootReducer = {
  menu: menuSlice.reducer,
  gallery: gallerySlice.reducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;

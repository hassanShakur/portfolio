import { configureStore } from '@reduxjs/toolkit';

// import rocketSlice from './rockets/rocketSlice';
import menuSlice from './app/menuSlice';

const rootReducer = {
  menu: menuSlice.reducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;

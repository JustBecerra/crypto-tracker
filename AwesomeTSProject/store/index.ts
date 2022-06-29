import {configureStore} from '@reduxjs/toolkit';
import cryptoSlice from './actions/cryptoSlice';

export const store = configureStore({
  reducer: {
    cryptos: cryptoSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
